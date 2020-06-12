export const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export interface AddSubOptions {
  days?: number;
  months?: number;
  years?: number;
}

declare global {
  export interface DateConstructor {
    isLeapYear(year: number): boolean;

    getDaysInMonth(year: number, month: number): number;

    tomorrow(): Date;

    yesterday(): Date;

    sameDay(date1: Date, date2: Date): boolean;
  }

  export interface Date {
    addSubtract(options: AddSubOptions): Date;

    addSubtractDays(days: number): Date;

    addSubtractMonths(months: number): Date;

    addSubtractYears(years: number): Date;

    isLeapYear(): boolean;

    clearTime(): Date;
  }
}
