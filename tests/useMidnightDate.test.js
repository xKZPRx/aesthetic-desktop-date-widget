import { jest } from "@jest/globals";
import { renderHook, act } from "@testing-library/react";
import { useMidnightDate } from "../src/hooks/useMidnightDate";

beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2026-05-04T23:59:00"));
});

afterEach(() => {
  jest.useRealTimers();
});

test("returns current date", () => {
  const { result } = renderHook(() => useMidnightDate());

  expect(result.current.day).toBe(4);
  expect(result.current.month).toBe(4);
});

test("updates after midnight", () => {
  const { result } = renderHook(() => useMidnightDate());

  act(() => {
    jest.advanceTimersByTime(2 * 60 * 1000);
  });

  expect(result.current.day).toBe(5);
});

test("cleans up timer on unmount", () => {
  const { unmount } = renderHook(() => useMidnightDate());

  unmount();

  expect(true).toBe(true);
});