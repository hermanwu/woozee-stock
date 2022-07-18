export function calculateIncreasePercentage(
  prev: number,
  curr: number
): number {
  return (curr - prev) / prev;
}
