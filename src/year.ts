import "./types/date";

/**
 Add/Subtract a specific number of years to the current Date instance
 @param {Date} date - The date instance
 @param {number} years - The number of years to be added/subtracted
 */
export const addSubtractYears = function (date: Date, years: number): Date {
  date.setFullYear(date.getFullYear() + years);
  return date;
};

/**
 * Check if a specific year is a leap year
 * @param {number} year - Year to be checked
 */
Date.isLeapYear = function (year: number): boolean {
  if (year < 0) {
    throw new Error(`Invalid year value '${year}'`);
  }
  return !(year % 4 || (!(year % 100) && year % 400));
};

/**
 * Check if the Date instance corresponds a leap year
 */
Date.prototype.isLeapYear = function (): boolean {
  return Date.isLeapYear(this.getFullYear());
};
