import "../index";

describe("Month methods", () => {
  const date = new Date("1995-12-17T03:24:00");

  it("should increment one month", () => {
    date.addSubtractMonths(1);
    expect(date.getMonth()).toBe(0);
  });

  it("should increment n months", () => {
    date.addSubtractMonths(2);
    expect(date.getMonth()).toBe(2);
  });

  it("should subtract one month", () => {
    date.addSubtractMonths(-1);
    expect(date.getMonth()).toBe(1);
  });

  it("should subtract n months", () => {
    date.addSubtractMonths(-2);
    expect(date.getMonth()).toBe(11);
  });

  it("should return the number of days", () => {
    expect(Date.getDaysInMonth(1996, 1)).toBe(29);
    expect(Date.getDaysInMonth(1996, 0)).toBe(31);
    expect(Date.getDaysInMonth(1996, 3)).toBe(30);
    expect(Date.getDaysInMonth(1995, 1)).toBe(28);
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
