export function find(haystack: number[], needle: number): number | never {
  if (haystack.length === 0) throw new Error("Value not in array");
  let left = 0;
  let right = haystack.length - 1;
  let middle = 0;
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (haystack[middle] < needle) {
      left = middle + 1;
    } else if (haystack[middle] > needle) {
      right = middle - 1;
    } else
      return middle;
  }
  throw new Error("Value not in array");
}
