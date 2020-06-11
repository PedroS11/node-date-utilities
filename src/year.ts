import "./types/date";

/**
 Add a specific number of years to the current Date instance
 @param {number} years - The number of years to be added
 */
Date.prototype.addYears = function (years: number): Date {
  this.setFullYear(this.getFullYear() + Math.abs(years));
  return this;
};

/**
 Add one year to the current Date instance
 */
Date.prototype.addYear = function (): Date {
  return this.addYears(1);
};

/**
 Subtract a specific number of years to the current Date instance
 @param {number} years - The number of years to be subtracted
 */
Date.prototype.subtractYears = function (years: number): Date {
  this.setFullYear(this.getFullYear() - Math.abs(years));
  return this;
};

/**
 Subtract one year to the current Date instance
 */
Date.prototype.subtractYear = function (): Date {
  return this.subtractYears(1);
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
