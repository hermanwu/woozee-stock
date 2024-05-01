export const underscoreToCamelCase = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map(underscoreToCamelCase);
  } else if (typeof obj === 'object' && obj !== null) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key.replace(/_([a-z])/g, (match, char) => char.toUpperCase()),
        underscoreToCamelCase(value),
      ])
    );
  } else {
    return obj;
  }
};

export const camelToUnderscoreString = (camelStr: string): string => {
  return camelStr
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase();
};

export const camelToUnderscore = (obj: any): any => {
  if (obj instanceof Array) {
    return obj.map(camelToUnderscore);
  } else if (obj instanceof Object) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      const newKey = key
        .split(/(?=[A-Z])/)
        .join('_')
        .toLowerCase();
      acc[newKey] = camelToUnderscore(value);
      return acc;
    }, {} as any);
  } else {
    return obj;
  }
};

export const getCompanyShortDashName = (longName: string) => {
  return getCompanyShortName(longName).split(' ').join('-');
};

export const getCompanyShortName = (longName) => {
  // Define an array of suffixes to check for, including possible punctuations
  const suffixes = [
    'inc.',
    'inc',
    'corp.',
    'corp',
    'plc.',
    'plc',
    'corporation',
    'ltd.',
    'ltd',
    'company',
    'co.',
    'co',
    '& co',
    'sa',
    'incorporated',
  ];

  // Convert to lowercase and split longName into an array of words
  const words = longName.toLowerCase().split(' ');

  // Find the earliest suffix index, iterating through each suffix
  const endIndex = words.reduce((minIndex, word, index) => {
    // Remove periods for comparison purposes
    const normalizedWord = word.replace('.', '').replace(',', '');
    return suffixes.includes(normalizedWord) && index < minIndex
      ? index
      : minIndex;
  }, words.length);

  // Rejoin the words excluding the suffix and clean final result to remove any trailing punctuation
  const result = longName.split(' ', endIndex).join(' ');
  return result.replace(/[\,\.]$/, ''); // Remove any trailing comma or period
};
