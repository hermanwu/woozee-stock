export const getCompanyShortName = (longName: string) => {
  // Remove commas and periods from longName using a regular expression
  longName = longName.replace(/[,.]/g, '');

  // Define an array of suffixes to check for
  const suffixes = [
    'inc',
    'corp',
    'plc',
    'corporation',
    'ltd',
    'company',
    'co',
    '& co',
    'sa',
  ];

  // Split longName into an array of lowercase words
  const arr = longName.toLowerCase().split(' ');

  // Find the minimum index among the suffixes using reduce
  const endIndex = suffixes.reduce((minIndex, suffix) => {
    const index = arr.findIndex((word, i) => {
      // Check if the current word and the next word (if exists) match suffix
      return (
        word === suffix.split(' ')[0] &&
        (suffix.split(' ').length === 1 || arr[i + 1] === suffix.split(' ')[1])
      );
    });
    // If the suffix is found and index is smaller than the current
    // minimum index, update the minimum index to the suffix's index
    return index !== -1 && index < minIndex ? index : minIndex;
  }, arr.length); // Initialize minIndex with the length of the array

  // Split longName into an array of words, slice it from the start to the
  // endIndex,
  // and join the resulting words back into a string
  return longName.split(' ').slice(0, endIndex).join(' ');
};
