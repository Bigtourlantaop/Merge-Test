/**
 * Reverses an array without using sort.
 * Used to convert collection_2 from descending to ascending.
 */
function reverseArray(arr: number[]): number[] {
  const result: number[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

/**
 * Merges two ascending-sorted arrays into one ascending-sorted array.
 * Uses the classic two-pointer merge (no sort function).
 */
function mergeTwoAscending(a: number[], b: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[j]);
      j++;
    }
  }

  while (i < a.length) {
    result.push(a[i]);
    i++;
  }

  while (j < b.length) {
    result.push(b[j]);
    j++;
  }

  return result;
}

/**
 * Merges three integer arrays and returns a single ascending-sorted array.
 *
 * @param collection_1 - Sorted ascending (min to max)
 * @param collection_2 - Sorted descending (max to min)
 * @param collection_3 - Sorted ascending (min to max)
 * @returns Single array sorted in ascending order
 */
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  // Convert collection_2 from descending to ascending
  const col2Ascending = reverseArray(collection_2);

  // Merge collection_1 and col2Ascending
  const merged12 = mergeTwoAscending(collection_1, col2Ascending);

  // Merge result with collection_3
  const merged123 = mergeTwoAscending(merged12, collection_3);

  return merged123;
}
