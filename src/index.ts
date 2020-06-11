import "./types/date";
import "./day";
import "./month";
import "./year";
import { AddSubOptions } from "./types/date";

/**
 Add a specific number of days/months/years to the current Date instance
 @static
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
 @static
 @param {AddSubOptions} options - The values to be added
 */
Date.prototype.subtract = function (options: AddSubOptions): Date {
  if (options.days) this.subtractDays(options.days);
  if (options.months) this.subtractMonths(options.months);
  if (options.years) this.subtractYears(options.years);

  return this;
};

/**
 * Returns a Date instance from the next day
 */
Date.prototype.tomorrow = function () {
  return this.addDay();
};
