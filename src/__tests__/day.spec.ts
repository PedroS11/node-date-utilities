import "../index";

describe("Day methods", () => {
  const date = new Date("1995-12-17T03:24:00");

  describe("addSubtractDays", () => {
    it("should increment one day", () => {
      date.addSubtractDays(1);
      expect(date.getDate()).toBe(18);
    });

    it("should increment n days", () => {
      date.addSubtractDays(2);
      expect(date.getDate()).toBe(20);
    });

    it("should subtract one day", () => {
      date.addSubtractDays(-1);
      expect(date.getDate()).toBe(19);
    });

    it("should subtract n days", () => {
      date.addSubtractDays(-2);
      expect(date.getDate()).toBe(17);
    });
  });

  it("tomorrow", () => {
    const current = new Date();
    const tomorrow = Date.tomorrow();

    current.clearTime();
    tomorrow.clearTime();

    expect(
      tomorrow.valueOf() / 1000 / 60 / 60 / 24 -
        current.valueOf() / 1000 / 60 / 60 / 24
    ).toBe(1);
  });

  it("yesterday", () => {
    const current = new Date();
    const yesterday = Date.yesterday();

    current.clearTime();
    yesterday.clearTime();

    expect(
      current.valueOf() / 1000 / 60 / 60 / 24 -
        yesterday.valueOf() / 1000 / 60 / 60 / 24
    ).toBe(1);
  });
});
