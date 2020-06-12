import { AddSubOptions } from "./types/date";

/**
 Add/Subtract a specific number of days/months/years to the current Date instance
 @param {AddSubOptions} options - The values to be added/subtracted
 */
Date.prototype.addSubtract = function (options: AddSubOptions): Date {
  if (options.days) this.addSubtractDays(options.days);
  if (options.months) this.addSubtractMonths(options.months);
  if (options.years) this.addSubtractYears(options.years);

  return this;
};

/**
 * Check if two dates are the same day
 * @param {Date} date1 - First date
 * @param {Date} date2 - Second date
 */
Date.sameDay = function (date1: Date, date2: Date): boolean {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

/**
 * Sets the time part to 00:00:00:0000
 */
Date.prototype.clearTime = function (): Date {
  this.setHours(0);
  this.setMinutes(0);
  this.setSeconds(0);
  this.setMilliseconds(0);

  return this;
};
