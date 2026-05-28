# Merge Sorted Arrays

A TypeScript implementation that merges three integer arrays into a single ascending-sorted array — without using any sort function.

## Function Interface

```typescript
merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]
```

| Parameter | Order |
|---|---|
| `collection_1` | Ascending (min → max) |
| `collection_2` | Descending (max → min) |
| `collection_3` | Ascending (min → max) |

**Returns:** A single array sorted in ascending order.

### Example

```typescript
merge([1, 3, 5], [6, 4, 2], [7, 8, 9])
// → [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

---

## Prerequisites

Make sure you have **Node.js** installed on your machine.

- Download: https://nodejs.org (choose the LTS version)

Verify installation:

```bash
node -v
npm -v
```

---

## Project Structure

```
merge-project/
├── src/
│   └── merge.ts          # Main merge function
├── tests/
│   └── merge.test.ts     # Unit tests (13 cases)
├── package.json
├── tsconfig.json
└── README.md
```

---

## Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/merge-sorted-arrays.git
cd merge-sorted-arrays
npm install
```

---

## Run Unit Tests

```bash
npm test
```

To see detailed output for each test case:

```bash
npx jest --verbose
```

To see test coverage:

```bash
npm run test:coverage
```

---

## How It Works

Since `collection_2` is sorted descending, the algorithm:

1. **Reverses** `collection_2` to make it ascending — using a simple loop, no sort function
2. **Merges** `collection_1` and reversed `collection_2` using the two-pointer technique
3. **Merges** the result with `collection_3` using the same technique

### Two-Pointer Merge

```
col1: [1, 3, 5]     pointer i →
col2: [2, 4, 6]     pointer j →

compare col1[i] vs col2[j] → push the smaller one → advance that pointer
repeat until both arrays are exhausted
```

This runs in **O(n)** time and never calls `.sort()`.
