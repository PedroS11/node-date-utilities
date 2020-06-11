export const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export interface AddSubOptions {
  days?: number;
  months?: number;
  years?: number;
}

declare global {
  export interface DateConstructor {
    isLeapYear(year: number): boolean;
  }

  export interface Date {
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

    isLeapYear(): boolean;

    tomorrow(): Date;

    getDaysInMonth(year: number, month: number): number;
  }
}
