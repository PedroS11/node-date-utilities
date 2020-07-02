import { daysInMonth } from "./types/date";

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

/**
 * Returns the number of days of the current instance Date
 */
Date.prototype.getDaysInMonth = function (): number {
  return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
};

/**
 Add/Subtract a specific number of months to the current Date instance
 The next month day is the min value between the previous day and the number of days of the following month
 let myDate = new Date("2012-01-31");
 myDate.addMonths(1); // 2012-02-29
 @param {Date} date - The date instance
 @param {number} months - The number of months to be added/subtracted
 */
export const addSubtractMonths = function (date: Date, months: number): Date {
  const day = date.getDate();
  date.setDate(1);
  date.setMonth(date.getMonth() + Math.floor(months));
  date.setDate(Math.min(day, date.getDaysInMonth()));

  return date;
};
