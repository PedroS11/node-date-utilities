import "../index";

describe("Common methods", () => {
  describe("addSubtract", () => {
    it("should add days/months/years to a date", () => {
      const date = new Date("1995-02-17T03:24:00");

      date.addSubtract({
        days: 1,
      });
      expect(date.getDate()).toBe(18);

      date.addSubtract({
        months: 1,
      });
      expect(date.getMonth()).toBe(2);

      date.addSubtract({
        years: 1,
      });
      expect(date.getFullYear()).toBe(1996);
    });
  });

  it("should subtract days/months/years to a date", () => {
    const date = new Date("1995-02-17T03:24:00");

    date.addSubtract({
      days: -1,
    });
    expect(date.getDate()).toBe(16);

    date.addSubtract({
      months: -1,
    });
    expect(date.getMonth()).toBe(0);

    date.addSubtract({
      years: -1,
    });
    expect(date.getFullYear()).toBe(1994);
  });

  it("should return true if two dates are from the same day", () => {
    const date1 = new Date("1995-02-17T03:24:00");
    const date2 = new Date("1995-02-17T12:24:00");

    expect(Date.sameDay(date1, date2)).toBeTruthy;
  });
});
