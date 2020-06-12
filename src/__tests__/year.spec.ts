import "../index";

describe("Year methods", () => {
  const date = new Date("1995-12-17T03:24:00");

  it("should increment one month", () => {
    date.addSubtractYears(1);
    expect(date.getFullYear()).toBe(1996);
  });

  it("should increment n months", () => {
    date.addSubtractYears(2);
    expect(date.getFullYear()).toBe(1998);
  });

  it("should subtract one month", () => {
    date.addSubtractYears(-1);
    expect(date.getFullYear()).toBe(1997);
  });

  it("should subtract n months", () => {
    date.addSubtractYears(-2);
    expect(date.getFullYear()).toBe(1995);
  });

  it("should check if it's a leap year", () => {
    expect(Date.isLeapYear(1996)).toBeTruthy;
    expect(date.isLeapYear()).toBeFalsy;
  });

  it("should throw if the year is not valid", () => {
    expect(() => Date.isLeapYear(-1)).toThrow(`Invalid year value '${-1}'`);
  });
});
