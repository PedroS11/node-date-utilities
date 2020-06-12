import "./types/date";

/**
 Add/Subtract a specific number of years to the current Date instance
 @param {number} years - The number of years to be added/subtracted
 */
Date.prototype.addSubtractYears = function (years: number): Date {
  this.setFullYear(this.getFullYear() + years);
  return this;
};

/**
 * Check if a specific year is a leap year
 * @param {number} year - Year to be checked
 */
Date.isLeapYear = function (year: number): boolean {
  if (year < 0) {
    throw new Error(`Invalid year value '${year}'`);
  }
  return new Date(year, 1, 29).getDate() === 29;
};

/**
 * Check if the Date instance corresponds a leap year
 */
Date.prototype.isLeapYear = function (): boolean {
  return this.getDate() === 29;
};
