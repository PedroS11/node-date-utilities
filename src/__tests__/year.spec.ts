import "../index";
import { addSubtractYears } from "../year";

describe("Year methods", () => {
  describe("addSubtractYears", () => {
    const date = new Date("1995-12-17T03:24:00");

    it("should add a specific number of years", () => {
      addSubtractYears(date, 1);
      expect(date.getFullYear()).toBe(1996);

      addSubtractYears(date, 2);
      expect(date.getFullYear()).toBe(1998);
    });

    it("should subtract a specific number of years", () => {
      addSubtractYears(date, -1);
      expect(date.getFullYear()).toBe(1997);

      addSubtractYears(date, -2);
      expect(date.getFullYear()).toBe(1995);
    });
  });

  describe("isLeapYear", () => {
    it("should check if it's a leap year", () => {
      expect(Date.isLeapYear(1996)).toBeTruthy;
      expect(Date.isLeapYear(1900)).toBeTruthy;

      const dateTZ = new Date(
        "Sun Oct 27 2019 01:59:00 GMT+0100 (British Summer Time)"
      );
      expect(dateTZ.isLeapYear()).toBeFalsy;
    });

    it("should throw if the year is not valid", () => {
      expect(() => Date.isLeapYear(-1)).toThrow(`Invalid year value '${-1}'`);
    });
  });
});
