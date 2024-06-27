import firebase from 'firebase/compat/app';
import 'firebase/firestore';

/**
 * Update the tags for a stock or note
 * @param existingTagUuids
 * @param updatedTagUuids
 * @param uuid
 * @param type
 * @returns
 */
export const updateUuidToTags = (
  existingTagUuids: string[],
  updatedTagUuids: string[],
  uuid: string,
  type: 'stock' | 'note'
): Record<
  string,
  {
    stocks?: { [key: string]: boolean | firebase.firestore.FieldValue };
    notes?: { [key: string]: boolean | firebase.firestore.FieldValue };
  }
> => {
  const toMerge: Record<
    string,
    {
      stocks?: { [key: string]: boolean | firebase.firestore.FieldValue };
      notes?: { [key: string]: boolean | firebase.firestore.FieldValue };
    }
  > = {};

  const existingTagSet = new Set(existingTagUuids);
  const updatedTagSet = new Set(updatedTagUuids);

  const newTags = updatedTagUuids.filter(
    (tagUuid) => !existingTagSet.has(tagUuid)
  );
  const removedTags = existingTagUuids.filter(
    (tagUuid) => !updatedTagSet.has(tagUuid)
  );

  // Add or update tags
  for (let tagUuid of newTags) {
    if (type === 'stock') {
      toMerge[tagUuid] = {
        stocks: {
          [uuid]: true,
        },
      };
    } else if (type === 'note') {
      toMerge[tagUuid] = {
        notes: {
          [uuid]: true,
        },
      };
    }
  }

  for (let tagUuid of removedTags) {
    if (type === 'stock') {
      toMerge[tagUuid] = {
        stocks: {
          [uuid]: firebase.firestore.FieldValue.delete(),
        },
      };
    } else if (type === 'note') {
      toMerge[tagUuid] = {
        notes: {
          [uuid]: firebase.firestore.FieldValue.delete(),
        },
      };
    }
  }

  return toMerge;
};
