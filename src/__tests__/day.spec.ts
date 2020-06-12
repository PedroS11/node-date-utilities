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
});
