import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

export const updateGlobalTagData = functions.pubsub
  .schedule('0 * * * *')
  .onRun(async (context) => {
    try {
      // Get all documents from the tags collection
      const db = admin.firestore();
      const tagsSnapshot = await db.collection('tags').get();

      // Initialize an object to store vote counts
      const tagDataForSearch: Record<
        string,
        { totalVotes: number; isBullish: number }
      > = {};

      tagsSnapshot.forEach((doc) => {
        const tagUid = doc.id;
        const tagData = doc.data();
        let totalVotes = 0;
        let isBullish = 0;

        if (tagData.interactions) {
          for (const [, value] of Object.entries(tagData.interactions)) {
            const interaction = value as {
              votes?: number;
              sentiment?: 'bullish' | 'bearish';
            };

            totalVotes += interaction.votes || 0;
            if (interaction.sentiment === 'bullish') {
              isBullish++;
            } else if (interaction.sentiment === 'bearish') {
              isBullish--;
            }
          }
        }

        const uid = tagUid + '::tag';
        tagDataForSearch[uid] = {
          totalVotes,
          isBullish,
        };
      });

      // Get top 10 items by votes
      const top10Tags = Object.entries(tagDataForSearch)
        .sort(([, a], [, b]) => b.totalVotes - a.totalVotes)
        .slice(0, 10)
        .reduce((obj, [key, value]) => {
          obj[key] = value;
          return obj;
        }, {} as Record<string, { totalVotes: number; isBullish: number }>);

      // Add top 10 tags to searchData document in search collection
      const searchDataRef = db.collection('search').doc('searchData');
      await searchDataRef.set(top10Tags, { merge: true });

      console.log('Top 10 tags added to searchData document');
    } catch (error) {
      console.error('Error updating daily tag vote count:', error);
      return null;
    }

    console.log('Task completed successfully');
    return null;
  });
