# structure-ts

Data structures for typescript.

## Installation

```
npm install @zhelvis/structure-ts
```

## What's inside?

- [`RingBuffer`](https://github.com/zhelvis/structure-ts/blob/main/src/ringBuffer.ts) -
⚙️ **[API](https://zhelvis.github.io/structure-ts/classes/RingBuffer.html)** 
🔬 **[Benchmarks](https://github.com/zhelvis/structure-ts/blob/main/src/ringBuffer.bench.md)**  
A ring buffer (or circular buffer) is a data structure that uses a single, fixed-size buffer as if it were connected end-to-end.
It is particularly useful for buffering data streams and implementing memory efficient queues and stacks.


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
