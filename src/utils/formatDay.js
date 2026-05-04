export function formatDay(d) {
  if (typeof d !== "number") return "";
  return String(d).padStart(2, "0");
}