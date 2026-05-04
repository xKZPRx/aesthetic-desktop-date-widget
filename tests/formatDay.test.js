const { formatDay } = require('../src/utils/formatDay.js');

test("formats single digit day", () => {
    expect(formatDay(3)).toBe("03");
});

test("formats double digit day", () => {
    expect(formatDay(12)).toBe("12");
});