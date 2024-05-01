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

export const formatDateToUTCString = (dateObj) => {
  const year = dateObj.getUTCFullYear();
  const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, '0'); // +1 for zero-based months
  const day = dateObj.getUTCDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const formatDateToString = (dateObj) => {
  const year = dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // +1 for zero-based months
  const day = dateObj.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const getPreviousBusinessDay = (inputDate = new Date()) => {
  let date = new Date(inputDate); // Copy the input date
  date.setDate(date.getDate() - 1); // Start with yesterday

  while (date.getDay() === 0 || date.getDay() === 6) {
    // Check if it's a weekend
    date.setDate(date.getDate() - 1); // Go back one day
  }

  return date;
};
