import "./types/date";

/**
 Add/Subtract a specific number of days to the current Date instance
 @param {number} days - The number of days to be added/subtracted
 */
Date.prototype.addSubtractDays = function (days: number): Date {
  this.setDate(this.getDate() + days);
  return this;
};

/**
 * Returns a Date instance from the next day
 */
Date.tomorrow = function () {
  return new Date().addSubtractDays(1);
};

/**
 * Returns a Date instance from the previous day
 */
Date.yesterday = function () {
  return new Date().addSubtractDays(-1);
};
