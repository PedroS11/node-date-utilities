import { AddSubOptions } from "./types/date";
import {addSubtractDays} from "./day";
import {addSubtractYears} from "./year";
import {addSubtractMonths} from "./month";

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

/**
 Add/Subtract a specific number of days/months/years to the current Date instance
 @param {Date} date - The date instance
 @param {AddSubOptions} options - The values to be added/subtracted
 @param {number} direction - 1 if sum, -1 if subtract
 */
function addSubtract(date: Date, options: AddSubOptions, direction: number): Date {
  if (options.days) addSubtractDays(date, Math.abs(options.days) * direction);
  if (options.months) addSubtractMonths(date, Math.abs(options.months) * direction);
  if (options.years) addSubtractYears(date, Math.abs(options.years) * direction);

  return date;
}

/**
 Add a specific number of days/months/years to the current Date instance
 @param {AddSubOptions} options - The values to be added
 */
Date.prototype.add = function (options: AddSubOptions) {
  return addSubtract(this, options, 1);
};

/**
 Subtract a specific number of days/months/years to the current Date instance
 @param {AddSubOptions} options - The values to be subtracted
 */
Date.prototype.subtract = function (options: AddSubOptions) {
  return addSubtract(this, options, -1);
};

Date.prototype.clone = function (): Date {
  return new Date(this.valueOf());
};