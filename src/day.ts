import "./types/date";

/**
 Add/Subtract a specific number of days to the current Date instance
 It retain the time across DST (so 10:30 will still be 10:30)...

 var dt = new Date( 2014, 10, 1, 10, 30, 0 );
 console.log( dt );                  // Sat Nov 01 2014 10:30:00
 console.log( dt.addDays( 10 ) );    // Tue Nov 11 2014 10:30:00

 https://stackoverflow.com/a/26390162/9661304
 @param {Date} date - The date instance
 @param {number} days - The number of days to be added/subtracted
 */
export const addSubtractDays = function (date: Date, days: number): Date {
  date.setDate(date.getDate() + Math.floor(days));
  return date;
};

/**
 * Returns a Date instance from the next day
 */
Date.tomorrow = function (): Date {
  return addSubtractDays(new Date(),1);
};

/**
 * Returns a Date instance from the previous day
 */
Date.yesterday = function (): Date {
  return addSubtractDays(new Date(),-1);
};