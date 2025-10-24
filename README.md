# structure-ts

Data structures for typescript.

⚙️ **[API](https://zhelvis.github.io/structure-ts)**

🎮 **[Playground](https://bolt.new/~/structure-ts)**


## Installation

```
npm install @zhelvis/structure-ts
```

## What's inside?

## What's inside?

| Module | API | Benchmarks | Description |
|------|-----|------------|-------------|
| [`Queue`](https://github.com/zhelvis/structure-ts/blob/main/src/queue/queue.ts) | [Queue API](https://zhelvis.github.io/structure-ts/classes/Queue.html) | [Queue Benchmarks](https://github.com/zhelvis/structure-ts/blob/main/src/queue/queue.bench.md) | Queue based on doubly linked list, FIFO principle. |
| [`RingBuffer`](https://github.com/zhelvis/structure-ts/blob/main/src/ringBuffer/ringBuffer.ts) | [RingBuffer API](https://zhelvis.github.io/structure-ts/classes/RingBuffer.html) | [RingBuffer Benchmarks](https://github.com/zhelvis/structure-ts/blob/main/src/ringBuffer/ringBuffer.bench.md) | Circular buffer for efficient data streams, queues, stacks. |
| [`History`](https://github.com/zhelvis/structure-ts/blob/main/src/history/history.ts) | [History API](https://zhelvis.github.io/structure-ts/classes/History.html) | [History Benchmarks](https://github.com/zhelvis/structure-ts/blob/main/src/history/history.bench.md) | Array-like structure with undo/redo, based on RingBuffer. |
| [`Diff`](https://github.com/zhelvis/structure-ts/blob/main/src/diff/diff.ts) | [computeDiff](https://zhelvis.github.io/structure-ts/functions/computeDiff.html), [applyDiff](https://zhelvis.github.io/structure-ts/functions/applyDiff.html), [revertDiff](https://zhelvis.github.io/structure-ts/functions/revertDiff.html) | [Diff Benchmarks](https://github.com/zhelvis/structure-ts/blob/main/src/diff/diff.bench.md) | Utilities for deep differences, applying and reverting changes. |


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
