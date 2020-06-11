import "./@types/date.d";

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
