import "../index";
import {addSubtractDays} from "../day";

describe("Day methods", () => {
    describe("addSubtractDays", () => {
        const date = new Date("1995-12-17T03:24:00");

        it("should add a specific number of days", () => {
            addSubtractDays(date, 1);
            expect(date.getDate()).toBe(18);

            addSubtractDays(date, 2);
            expect(date.getDate()).toBe(20);
        });

        it("should subtract a specific number of days", () => {
            addSubtractDays(date, -1);
            expect(date.getDate()).toBe(19);

            addSubtractDays(date, -2);
            expect(date.getDate()).toBe(17);
        });
    });

    describe("tomorrow", () => {
        it("should return tomorrow date as a Date instance", () => {
            const current = new Date();
            const tomorrow = Date.tomorrow();

            current.clearTime();
            tomorrow.clearTime();

            expect(
                tomorrow.valueOf() / 1000 / 60 / 60 / 24 -
                current.valueOf() / 1000 / 60 / 60 / 24
            ).toBe(1);
        });
    });

    describe("yesterday", () => {
        it("should return yesterday date as a Date instance", () => {
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
});
