export const getUtcDate = (year: number, month: number, day: number): Date => {
  return convertDateToUTC(new Date(year, month - 1, day));
};

export const convertDateToUTC = (date: Date): Date => {
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
};
