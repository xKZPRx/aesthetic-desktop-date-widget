import { formatMonth } from "../src/utils/formatMonth";

test("formats january", () => {
    expect(formatMonth(0)).toBe("january");
});

test("handles invalid month input", () => {
    expect(formatMonth(undefined)).toBe("");
    expect(formatMonth(null)).toBe("");
    expect(formatMonth("abc")).toBe("");
});