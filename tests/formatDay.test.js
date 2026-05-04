import { formatDay } from "../src/utils/formatDay.js";

test("formats single digit day", () => {
    expect(formatDay(3)).toBe("03");
});

test("formats double digit day", () => {
    expect(formatDay(12)).toBe("12");
});

test("handles invalid day input", () => {
    expect(formatDay(undefined)).toBe("");
    expect(formatDay(null)).toBe("");
    expect(formatDay("abc")).toBe("");
});