clk: ~3.14 GHz
cpu: Apple M1 Pro
runtime: bun 1.2.9 (arm64-darwin)

| benchmark                                 |              avg |         min |         p75 |         p99 |         max |
| ----------------------------------------- | ---------------- | ----------- | ----------- | ----------- | ----------- |
| RingBuffer.get (size: 1)                  | `  5.61 ns/iter` | `  5.41 ns` | `  5.50 ns` | `  8.91 ns` | ` 15.45 ns` |
| RingBuffer.get (size: 10)                 | ` 10.69 ns/iter` | `  9.69 ns` | ` 10.06 ns` | ` 18.33 ns` | ` 25.32 ns` |
| RingBuffer.get (size: 100)                | `  9.21 ns/iter` | `  8.96 ns` | `  9.23 ns` | `  9.96 ns` | ` 12.21 ns` |
| RingBuffer.get (size: 1000)               | ` 10.27 ns/iter` | `  8.91 ns` | `  9.27 ns` | ` 16.87 ns` | ` 20.29 ns` |
| RingBuffer.get (size: 10000)              | ` 10.28 ns/iter` | `  8.93 ns` | `  9.29 ns` | ` 17.38 ns` | ` 22.38 ns` |
| RingBuffer.get (size: 100000)             | ` 13.66 ns/iter` | `  8.96 ns` | ` 15.93 ns` | ` 23.03 ns` | ` 27.93 ns` |
| RingBuffer.set (size: 1)                  | `  7.52 ns/iter` | `  4.65 ns` | `  9.06 ns` | `  9.80 ns` | ` 18.32 ns` |
| RingBuffer.set (size: 10)                 | ` 17.75 ns/iter` | ` 17.19 ns` | ` 17.76 ns` | ` 19.97 ns` | ` 24.53 ns` |
| RingBuffer.set (size: 100)                | ` 16.37 ns/iter` | ` 15.93 ns` | ` 16.40 ns` | ` 17.59 ns` | ` 20.45 ns` |
| RingBuffer.set (size: 1000)               | ` 15.38 ns/iter` | `  9.15 ns` | ` 16.23 ns` | ` 17.28 ns` | ` 20.52 ns` |
| RingBuffer.set (size: 10000)              | ` 15.86 ns/iter` | ` 15.32 ns` | ` 15.85 ns` | ` 17.61 ns` | ` 21.20 ns` |
| RingBuffer.set (size: 100000)             | ` 16.29 ns/iter` | ` 15.74 ns` | ` 16.26 ns` | ` 18.52 ns` | ` 21.64 ns` |
| RingBuffer.push (size: 1)                 | ` 22.17 ns/iter` | ` 21.64 ns` | ` 22.17 ns` | ` 26.58 ns` | ` 28.63 ns` |
| RingBuffer.push (size: 10)                | ` 23.61 ns/iter` | ` 22.52 ns` | ` 23.67 ns` | ` 26.70 ns` | ` 29.14 ns` |
| RingBuffer.push (size: 100)               | ` 22.95 ns/iter` | ` 22.50 ns` | ` 22.94 ns` | ` 25.08 ns` | ` 28.57 ns` |
| RingBuffer.push (size: 1000)              | ` 22.91 ns/iter` | ` 22.50 ns` | ` 22.90 ns` | ` 25.17 ns` | ` 27.12 ns` |
| RingBuffer.push (size: 10000)             | ` 24.32 ns/iter` | ` 23.84 ns` | ` 24.30 ns` | ` 26.92 ns` | ` 28.86 ns` |
| RingBuffer.push (size: 100000)            | ` 24.46 ns/iter` | ` 20.66 ns` | ` 24.46 ns` | ` 27.20 ns` | ` 29.60 ns` |
| RingBuffer.pop (size: 1)                  | `  4.01 ns/iter` | `  3.82 ns` | `  4.02 ns` | `  4.68 ns` | `  7.55 ns` |
| RingBuffer.pop (size: 10)                 | `  2.38 ns/iter` | `  2.32 ns` | `  2.40 ns` | `  2.54 ns` | `  5.99 ns` |
| RingBuffer.pop (size: 100)                | `  2.36 ns/iter` | `  2.32 ns` | `  2.37 ns` | `  2.52 ns` | `  3.76 ns` |
| RingBuffer.pop (size: 1000)               | `  2.37 ns/iter` | `  2.32 ns` | `  2.37 ns` | `  2.54 ns` | `  4.94 ns` |
| RingBuffer.pop (size: 10000)              | `  1.94 ns/iter` | `  1.88 ns` | `  1.94 ns` | `  2.11 ns` | ` 12.24 ns` |
| RingBuffer.pop (size: 100000)             | `  2.51 ns/iter` | `  2.32 ns` | `  2.40 ns` | `  6.56 ns` | ` 22.77 ns` |
| RingBuffer.unshift (size: 1)              | `  7.28 ns/iter` | `  7.12 ns` | `  7.21 ns` | `  8.12 ns` | ` 22.90 ns` |
| RingBuffer.unshift (size: 10)             | `  6.23 ns/iter` | `  6.12 ns` | `  6.21 ns` | `  7.07 ns` | `  9.43 ns` |
| RingBuffer.unshift (size: 100)            | `  6.21 ns/iter` | `  6.12 ns` | `  6.21 ns` | `  6.85 ns` | `  7.38 ns` |
| RingBuffer.unshift (size: 1000)           | `  6.22 ns/iter` | `  6.12 ns` | `  6.25 ns` | `  6.84 ns` | `  9.07 ns` |
| RingBuffer.unshift (size: 10000)          | `  6.18 ns/iter` | `  6.06 ns` | `  6.21 ns` | `  7.24 ns` | ` 10.92 ns` |
| RingBuffer.unshift (size: 100000)         | `  6.52 ns/iter` | `  6.21 ns` | `  6.53 ns` | `  7.52 ns` | ` 11.57 ns` |
| RingBuffer.shift (size: 1)                | `  4.97 ns/iter` | `  4.84 ns` | `  4.96 ns` | `  7.06 ns` | `  9.72 ns` |
| RingBuffer.shift (size: 10)               | `  3.02 ns/iter` | `  2.32 ns` | `  3.51 ns` | `  5.09 ns` | `  8.69 ns` |
| RingBuffer.shift (size: 100)              | `  2.56 ns/iter` | `  2.32 ns` | `  2.52 ns` | `  7.25 ns` | ` 11.00 ns` |
| RingBuffer.shift (size: 1000)             | `  2.41 ns/iter` | `  2.32 ns` | `  2.43 ns` | `  2.65 ns` | `  5.78 ns` |
| RingBuffer.shift (size: 10000)            | `  2.04 ns/iter` | `  1.88 ns` | `  1.97 ns` | `  5.90 ns` | ` 12.43 ns` |
| RingBuffer.shift (size: 100000)           | `  2.67 ns/iter` | `  2.32 ns` | `  2.46 ns` | ` 11.95 ns` | ` 23.93 ns` |
| RingBuffer serialization (size: 1)        | ` 47.42 ns/iter` | ` 44.04 ns` | ` 48.57 ns` | ` 61.31 ns` | `244.72 ns` |
| RingBuffer serialization (size: 10)       | `137.96 ns/iter` | `133.58 ns` | `137.59 ns` | `161.95 ns` | `213.62 ns` |
| RingBuffer serialization (size: 100)      | `  5.78 µs/iter` | `  4.83 µs` | `  5.71 µs` | ` 11.29 µs` | ` 18.79 µs` |
| RingBuffer serialization (size: 1000)     | ` 10.04 µs/iter` | `  9.70 µs` | ` 10.11 µs` | ` 10.27 µs` | ` 11.32 µs` |
| RingBuffer serialization (size: 10000)    | ` 95.39 µs/iter` | ` 91.71 µs` | ` 96.04 µs` | `117.75 µs` | `128.79 µs` |
| RingBuffer serialization (size: 100000)   | `916.11 µs/iter` | `890.38 µs` | `925.17 µs` | `  1.01 ms` | `  1.04 ms` |
| RingBuffer deserialization (size: 1)      | ` 54.41 ns/iter` | ` 53.46 ns` | ` 54.43 ns` | ` 61.02 ns` | ` 64.66 ns` |
| RingBuffer deserialization (size: 10)     | ` 99.94 ns/iter` | ` 97.25 ns` | ` 99.70 ns` | `115.68 ns` | `120.83 ns` |
| RingBuffer deserialization (size: 100)    | `885.41 ns/iter` | `871.30 ns` | `887.30 ns` | `979.99 ns` | `988.32 ns` |
| RingBuffer deserialization (size: 1000)   | `  8.99 µs/iter` | `  8.85 µs` | `  9.07 µs` | `  9.24 µs` | `  9.26 µs` |
| RingBuffer deserialization (size: 10000)  | ` 87.13 µs/iter` | ` 83.75 µs` | ` 87.71 µs` | `108.54 µs` | `121.92 µs` |
| RingBuffer deserialization (size: 100000) | `839.51 µs/iter` | `823.79 µs` | `842.67 µs` | `911.50 µs` | `931.08 µs` |
