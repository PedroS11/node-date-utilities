import { daysInMonth } from "./types/date";

/**
 Add/Subtract a specific number of months to the current Date instance
 @param {number} months - The number of months to be added/subtracted
 */
Date.prototype.addSubtractMonths = function (months: number): Date {
  this.setMonth(this.getMonth() + months);
  return this;
};

/**
 * Returns the number of days of a month in a given year
 * @param {number} year - The year to be considered
 * @param {number} month - The month to be analysed
 */
Date.getDaysInMonth = function (year: number, month: number): number {
  if (!daysInMonth[month]) {
    throw new Error(`Invalid month value '${month}'`);
  }

  if (month === 1) {
    return Date.isLeapYear(year) ? 29 : 28;
  }
  return daysInMonth[month];
};
