import { merge } from "../src/merge";

describe("merge()", () => {
  // ─── Basic Cases ───────────────────────────────────────────────

  test("merges three typical arrays correctly", () => {
    const col1 = [1, 3, 5];   // ascending
    const col2 = [6, 4, 2];   // descending
    const col3 = [7, 8, 9];   // ascending
    const result = merge(col1, col2, col3);
    console.log("[Basic] input col1:", col1, "| col2:", col2, "| col3:", col3);
    console.log("[Basic] output:", result);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("merges arrays with overlapping values", () => {
    const col1 = [1, 4, 7];
    const col2 = [8, 5, 2];
    const col3 = [3, 6, 9];
    const result = merge(col1, col2, col3);
    console.log("[Overlap] input col1:", col1, "| col2:", col2, "| col3:", col3);
    console.log("[Overlap] output:", result);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("merges arrays with duplicate values", () => {
    const col1 = [1, 2, 3];
    const col2 = [3, 2, 1];
    const col3 = [1, 2, 3];
    const result = merge(col1, col2, col3);
    console.log("[Duplicate] input col1:", col1, "| col2:", col2, "| col3:", col3);
    console.log("[Duplicate] output:", result);
    expect(result).toEqual([1, 1, 1, 2, 2, 2, 3, 3, 3]);
  });

  // ─── Edge Cases ────────────────────────────────────────────────

  test("handles all empty arrays", () => {
    const result = merge([], [], []);
    console.log("[Empty] input: [], [], []");
    console.log("[Empty] output:", result);
    expect(result).toEqual([]);
  });

  test("handles one non-empty array (col1 only)", () => {
    const result = merge([1, 2, 3], [], []);
    console.log("[Col1 only] input col1: [1,2,3] | col2: [] | col3: []");
    console.log("[Col1 only] output:", result);
    expect(result).toEqual([1, 2, 3]);
  });

  test("handles one non-empty array (col2 only)", () => {
    const result = merge([], [3, 2, 1], []);
    console.log("[Col2 only] input col1: [] | col2: [3,2,1] | col3: []");
    console.log("[Col2 only] output:", result);
    expect(result).toEqual([1, 2, 3]);
  });

  test("handles one non-empty array (col3 only)", () => {
    const result = merge([], [], [1, 2, 3]);
    console.log("[Col3 only] input col1: [] | col2: [] | col3: [1,2,3]");
    console.log("[Col3 only] output:", result);
    expect(result).toEqual([1, 2, 3]);
  });

  test("handles single element arrays", () => {
    const result = merge([1], [3], [2]);
    console.log("[Single] input col1: [1] | col2: [3] | col3: [2]");
    console.log("[Single] output:", result);
    expect(result).toEqual([1, 2, 3]);
  });

  test("handles arrays with all same values", () => {
    const result = merge([5, 5], [5, 5], [5, 5]);
    console.log("[Same values] input col1: [5,5] | col2: [5,5] | col3: [5,5]");
    console.log("[Same values] output:", result);
    expect(result).toEqual([5, 5, 5, 5, 5, 5]);
  });

  test("handles arrays with negative numbers", () => {
    const col1 = [-5, -3, -1];
    const col2 = [4, 2, 0];
    const col3 = [5, 6, 7];
    const result = merge(col1, col2, col3);
    console.log("[Negative] input col1:", col1, "| col2:", col2, "| col3:", col3);
    console.log("[Negative] output:", result);
    expect(result).toEqual([-5, -3, -1, 0, 2, 4, 5, 6, 7]);
  });

  test("handles unequal length arrays", () => {
    const col1 = [1];
    const col2 = [10, 8, 6, 4, 2];
    const col3 = [3, 5, 7, 9];
    const result = merge(col1, col2, col3);
    console.log("[Unequal] input col1:", col1, "| col2:", col2, "| col3:", col3);
    console.log("[Unequal] output:", result);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test("result length equals sum of all input lengths", () => {
    const col1 = [1, 2];
    const col2 = [5, 3];
    const col3 = [4, 6];
    const result = merge(col1, col2, col3);
    const expectedLength = col1.length + col2.length + col3.length;
    console.log("[Length] input col1:", col1, "| col2:", col2, "| col3:", col3);
    console.log("[Length] output:", result);
    console.log("[Length] expected length:", expectedLength, "| actual length:", result.length);
    expect(result.length).toBe(expectedLength);
  });

  test("result is in strictly non-decreasing order", () => {
    const col1 = [2, 5, 11];
    const col2 = [9, 7, 3];
    const col3 = [1, 4, 8];
    const result = merge(col1, col2, col3);
    console.log("[Order] input col1:", col1, "| col2:", col2, "| col3:", col3);
    console.log("[Order] output:", result);
    for (let i = 1; i < result.length; i++) {
      expect(result[i]).toBeGreaterThanOrEqual(result[i - 1]);
    }
  });
});
