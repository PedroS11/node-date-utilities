import "./types/date";
import { daysInMonth } from "./types/date";

/**
 Add a specific number of months to the current Date instance
 @static
 @param {number} months - The number of months to be added
 */
Date.prototype.addMonths = function (months: number): Date {
  this.setMonth(this.getMonth() + months);
  return this;
};

/**
 Add one month to the current Date instance
 @static
 */
Date.prototype.addMonth = function (): Date {
  return this.addMonths(1);
};

/**
 Subtract a specific number of months to the current Date instance
 @static
 @param {number} months - The number of months to be subtracted
 */
Date.prototype.subtractMonths = function (months: number): Date {
  this.setMonth(this.getMonth() - months);
  return this;
};

/**
 Subtract one month to the current Date instance
 @static
 */
Date.prototype.subtractMonth = function (): Date {
  return this.subtractMonths(1);
};

/**
 * Returns the number of days of a month in a given year
 * @param {number} year - The year to be considered
 * @param {number} month - The month to be analysed
 */
Date.prototype.getDaysInMonth = function (year: number, month: number): number {
  if (month === 1) {
    return Date.prototype.isLeapYear(year) ? 29 : 28;
  }
  return daysInMonth[month];
};
