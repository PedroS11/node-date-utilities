const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

interface AddSubOptions {
  days?: number;
  months?: number;
  years?: number;
}

interface Date {
  add(options: AddSubOptions): Date;
  subtract(options: AddSubOptions): Date;

  addDays(days: number): Date;
  addDay(): Date;
  subtractDays(days: number): Date;
  subtractDay(): Date;

  addMonths(months: number): Date;
  addMonth(): Date;
  subtractMonths(months: number): Date;
  subtractMonth(): Date;

  addYears(years: number): Date;
  addYear(): Date;
  subtractYears(years: number): Date;
  subtractYear(): Date;

  isLeapYear(year: number): boolean;

  getDaysInMonth(year: number, month: number): number;
}

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
 Add a specific number of days to the current Date instance
 @static
 @param {number} days - The number of days to be added
 */
Date.prototype.addDays = function (days: number): Date {
  this.setDate(this.getDate() + days);
  return this;
};

/**
 Add one day to the current Date instance
 @static
 */
Date.prototype.addDay = function (): Date {
  return this.addDays(1);
};

/**
 Subtract a specific number of days to the current Date instance
 @static
 @param {number} days - The number of days to be subtracted
 */
Date.prototype.subtractDays = function (days: number): Date {
  this.setDate(this.getDate() - days);
  return this;
};

/**
 Subtract one day to the current Date instance
 @static
 */
Date.prototype.subtractDay = function (): Date {
  return this.subtractDays(1);
};

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
 Add a specific number of years to the current Date instance
 @static
 @param {number} years - The number of years to be added
 */
Date.prototype.addYears = function (years: number): Date {
  this.setFullYear(this.getFullYear() + years);
  return this;
};

/**
 Add one year to the current Date instance
 @static
 */
Date.prototype.addYear = function (): Date {
  return this.addYears(1);
};

/**
 Subtract a specific number of years to the current Date instance
 @static
 @param {number} years - The number of years to be subtracted
 */
Date.prototype.subtractYears = function (years: number): Date {
  this.setFullYear(this.getFullYear() - years);
  return this;
};

/**
 Subtract one year to the current Date instance
 @static
 */
Date.prototype.subtractYear = function (): Date {
  return this.subtractYears(1);
};

/**
 * Check if a specific year is a leap year
 * @param {number} year - Year to be checked
 */
Date.prototype.isLeapYear = function (year: number): boolean {
  return new Date(year, 1, 29).getDate() === 29;
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
