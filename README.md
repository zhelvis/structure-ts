# structure-ts

Data structures for typescript.

⚙️ **[API](https://zhelvis.github.io/structure-ts)**

🎮 **[Playground](https://bolt.new/~/structure-ts)**


## Installation

```
npm install @zhelvis/structure-ts
```

## What's inside?

- [`Queue`](https://github.com/zhelvis/structure-ts/blob/main/src/queue.ts) -
⚙️ **[API](https://zhelvis.github.io/structure-ts/classes/Queue.html)**
🔬 **[Benchmarks](https://github.com/zhelvis/structure-ts/blob/main/src/queue.bench.md)** 
A queue is a data structure based on doubly linked list that follows the FIFO (first-in, first-out) principle.

- [`RingBuffer`](https://github.com/zhelvis/structure-ts/blob/main/src/ringBuffer.ts) -
⚙️ **[API](https://zhelvis.github.io/structure-ts/classes/RingBuffer.html)** 
🔬 **[Benchmarks](https://github.com/zhelvis/structure-ts/blob/main/src/ringBuffer.bench.md)**
A ring buffer (or circular buffer) is a data structure that uses a single, fixed-size buffer as if it were connected end-to-end.
It is particularly useful for buffering data streams and implementing memory efficient queues and stacks.

- [`History`](https://github.com/zhelvis/structure-ts/blob/main/src/history.ts) -
⚙️ **[API](https://zhelvis.github.io/structure-ts/classes/History.html)**
🔬 **[Benchmarks](https://github.com/zhelvis/structure-ts/blob/main/src/history.bench.md)**
A history is an array-like structure with undo/redo functionality based on `RingBuffer`.

- [`Diff utils`](https://github.com/zhelvis/structure-ts/blob/main/src/utils/diff.ts) -
🔬 **[Benchmarks](https://github.com/zhelvis/structure-ts/blob/main/src/utils/diff.bench.md)**
Utils to deal with deep differences between two structures.
    - `computeDiff` ⚙️ **[API](https://zhelvis.github.io/structure-ts/functions/computeDiff.html)** Computes the deep difference between two values.
    - `applyDiff` ⚙️ **[API](https://zhelvis.github.io/structure-ts/functions/applyDiff.html)** Apply a computed difference to a structure.
    - `revertDiff` ⚙️ **[API](https://zhelvis.github.io/structure-ts/functions/revertDiff.html)** Revert a structure to its previous state using a difference.


## Development

To run this project, you need to have [Bun] installed.

To install dependencies, run:

```bash
bun install
```

To run tests, use:

```bash
bun test
```

To run the linter, use:

```bash
bunx biome check
```

To build the project, use:

```bash
bun run build
```

> Note: Do not use `bun build` directly, as it runs default bundler, which is not configured for this project. Use `bun run build` instead, which uses the custom build script defined in `package.json`.

[Bun]: https://bun.sh
[Docs]: https://zhelvis.github.io/structure-ts/index.html
