import { AddSubOptions } from "./types/date";

/**
 Add a specific number of days/months/years to the current Date instance
 @param {AddSubOptions} options - The values to be added
 */
Date.prototype.add = function (options: AddSubOptions): Date {
  if (options.days) this.addDays(options.days);
  if (options.months) this.addMonths(options.months);
  if (options.years) this.addYears(options.years);

  return this;
};

/**
 Subtract a specific number of days/months/years to the current Date instance
 @param {AddSubOptions} options - The values to be added
 */
Date.prototype.subtract = function (options: AddSubOptions): Date {
  if (options.days) this.subtractDays(options.days);
  if (options.months) this.subtractMonths(options.months);
  if (options.years) this.subtractYears(options.years);

  return this;
};

/**
 * Check if 2 dates are the same day
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
