import "../index";

describe("Day methods", () => {
  const date = new Date("1995-12-17T03:24:00");

  it("should increment one day", () => {
    date.addDay();
    expect(date.getDate()).toBe(18);
  });

  it("should increment n days", () => {
    date.addDays(2);
    expect(date.getDate()).toBe(20);
  });

  it("should subtract one day", () => {
    date.subtractDay();
    expect(date.getDate()).toBe(19);
  });

  it("should subtract n days", () => {
    date.subtractDays(2);
    expect(date.getDate()).toBe(17);
  });
});
