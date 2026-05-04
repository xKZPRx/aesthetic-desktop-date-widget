import { formatMonth } from "../src/utils/formatMonth";

test("formats january", () => {
    expect(formatMonth(0)).toBe("january");
});