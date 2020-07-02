import "../index";
import {addSubtractMonths} from "../month";

describe("Month methods", () => {
  describe("addSubtractMonths", () => {
    const date = new Date("1995-12-17T03:24:00");

    it("should add a specific number of months", () => {
      addSubtractMonths(date, 1);
      expect(date.getMonth()).toBe(0);

      addSubtractMonths(date, 2);
      expect(date.getMonth()).toBe(2);
    });

    it("should subtract a specific number of months", () => {
      addSubtractMonths(date, -1);
      expect(date.getMonth()).toBe(1);

      addSubtractMonths(date, -2);
      expect(date.getMonth()).toBe(11);
    });
  });

  describe("getDaysInMonth", () => {
    it("should return the number of days", () => {
      expect(Date.getDaysInMonth(1996, 1)).toBe(29);
      expect(Date.getDaysInMonth(1996, 0)).toBe(31);
      expect(Date.getDaysInMonth(1996, 3)).toBe(30);
      expect(Date.getDaysInMonth(1995, 1)).toBe(28);

      const date = new Date("1995-12-17T03:24:00");
      expect(date.getDaysInMonth()).toBe(31);
    });

    it("should throw an error if the month is not valid", () => {
      expect(() => Date.getDaysInMonth(2000, -1)).toThrow(
          `Invalid month value '${-1}'`
      );
      expect(() => Date.getDaysInMonth(2000, 12)).toThrow(
          `Invalid month value '${12}'`
      );
    });
  });
});
