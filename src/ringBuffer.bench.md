clk: ~3.15 GHz
cpu: Apple M1 Pro
runtime: bun 1.2.9 (arm64-darwin)

| benchmark                                 |              avg |         min |         p75 |         p99 |         max |
| ----------------------------------------- | ---------------- | ----------- | ----------- | ----------- | ----------- |
| RingBuffer.get (size: 1)                  | `  4.34 ns/iter` | `  4.08 ns` | `  4.11 ns` | ` 10.05 ns` | ` 17.57 ns` |
| RingBuffer.get (size: 10)                 | `  6.48 ns/iter` | `  5.67 ns` | `  5.95 ns` | ` 13.02 ns` | ` 17.26 ns` |
| RingBuffer.get (size: 100)                | `  4.59 ns/iter` | `  4.52 ns` | `  4.60 ns` | `  5.00 ns` | `  8.40 ns` |
| RingBuffer.get (size: 1000)               | `  5.37 ns/iter` | `  4.38 ns` | `  4.53 ns` | ` 10.89 ns` | ` 11.40 ns` |
| RingBuffer.get (size: 10000)              | `  5.47 ns/iter` | `  4.44 ns` | `  4.61 ns` | ` 11.33 ns` | ` 16.95 ns` |
| RingBuffer.get (size: 100000)             | ` 11.61 ns/iter` | ` 10.93 ns` | ` 11.09 ns` | ` 22.84 ns` | ` 31.40 ns` |
| RingBuffer.set (size: 1)                  | ` 10.05 ns/iter` | `  9.87 ns` | ` 10.00 ns` | ` 11.00 ns` | ` 15.95 ns` |
| RingBuffer.set (size: 10)                 | ` 12.03 ns/iter` | ` 11.66 ns` | ` 12.03 ns` | ` 13.13 ns` | ` 18.71 ns` |
| RingBuffer.set (size: 100)                | ` 10.52 ns/iter` | ` 10.27 ns` | ` 10.52 ns` | ` 11.66 ns` | ` 15.42 ns` |
| RingBuffer.set (size: 1000)               | `  9.10 ns/iter` | `  4.45 ns` | ` 10.29 ns` | ` 11.11 ns` | ` 14.48 ns` |
| RingBuffer.set (size: 10000)              | `  9.55 ns/iter` | `  9.35 ns` | `  9.57 ns` | ` 10.60 ns` | ` 15.54 ns` |
| RingBuffer.set (size: 100000)             | ` 10.10 ns/iter` | `  9.83 ns` | ` 10.12 ns` | ` 11.56 ns` | ` 17.22 ns` |
| RingBuffer.push (size: 1)                 | `  6.92 ns/iter` | `  6.38 ns` | `  6.61 ns` | ` 10.88 ns` | ` 14.41 ns` |
| RingBuffer.push (size: 10)                | `  8.17 ns/iter` | `  6.29 ns` | ` 10.88 ns` | ` 11.76 ns` | ` 15.91 ns` |
| RingBuffer.push (size: 100)               | `  6.40 ns/iter` | `  6.30 ns` | `  6.43 ns` | `  7.05 ns` | `  8.44 ns` |
| RingBuffer.push (size: 1000)              | `  6.41 ns/iter` | `  6.29 ns` | `  6.43 ns` | `  7.17 ns` | `  8.58 ns` |
| RingBuffer.push (size: 10000)             | `  6.45 ns/iter` | `  6.27 ns` | `  6.45 ns` | `  7.52 ns` | ` 13.22 ns` |
| RingBuffer.push (size: 100000)            | `  6.51 ns/iter` | `  6.29 ns` | `  6.62 ns` | `  8.03 ns` | ` 10.01 ns` |
| RingBuffer.pop (size: 1)                  | `  3.94 ns/iter` | `  3.78 ns` | `  3.99 ns` | `  4.69 ns` | `  8.77 ns` |
| RingBuffer.pop (size: 10)                 | `  2.38 ns/iter` | `  2.32 ns` | `  2.38 ns` | `  2.57 ns` | `  5.27 ns` |
| RingBuffer.pop (size: 100)                | `  2.36 ns/iter` | `  2.32 ns` | `  2.37 ns` | `  2.51 ns` | `  2.61 ns` |
| RingBuffer.pop (size: 1000)               | `  2.36 ns/iter` | `  2.32 ns` | `  2.39 ns` | `  2.52 ns` | `  2.59 ns` |
| RingBuffer.pop (size: 10000)              | `  1.95 ns/iter` | `  1.88 ns` | `  1.95 ns` | `  2.12 ns` | ` 12.22 ns` |
| RingBuffer.pop (size: 100000)             | `  2.52 ns/iter` | `  2.32 ns` | `  2.40 ns` | `  7.53 ns` | ` 22.71 ns` |
| RingBuffer.unshift (size: 1)              | `  7.28 ns/iter` | `  7.12 ns` | `  7.23 ns` | `  7.93 ns` | ` 21.51 ns` |
| RingBuffer.unshift (size: 10)             | `  6.23 ns/iter` | `  6.12 ns` | `  6.24 ns` | `  7.20 ns` | `  9.70 ns` |
| RingBuffer.unshift (size: 100)            | `  6.23 ns/iter` | `  6.12 ns` | `  6.26 ns` | `  6.91 ns` | `  8.93 ns` |
| RingBuffer.unshift (size: 1000)           | `  6.23 ns/iter` | `  6.12 ns` | `  6.26 ns` | `  6.95 ns` | ` 10.62 ns` |
| RingBuffer.unshift (size: 10000)          | `  6.17 ns/iter` | `  6.07 ns` | `  6.21 ns` | `  7.08 ns` | `  9.35 ns` |
| RingBuffer.unshift (size: 100000)         | `  6.52 ns/iter` | `  6.15 ns` | `  6.54 ns` | `  7.44 ns` | ` 10.65 ns` |
| RingBuffer.shift (size: 1)                | `  4.92 ns/iter` | `  4.84 ns` | `  4.93 ns` | `  5.25 ns` | ` 10.26 ns` |
| RingBuffer.shift (size: 10)               | `  2.99 ns/iter` | `  2.32 ns` | `  3.51 ns` | `  5.31 ns` | `  7.40 ns` |
| RingBuffer.shift (size: 100)              | `  2.36 ns/iter` | `  2.32 ns` | `  2.37 ns` | `  2.49 ns` | `  3.16 ns` |
| RingBuffer.shift (size: 1000)             | `  2.37 ns/iter` | `  2.32 ns` | `  2.38 ns` | `  2.51 ns` | `  4.23 ns` |
| RingBuffer.shift (size: 10000)            | `  1.94 ns/iter` | `  1.88 ns` | `  1.95 ns` | `  2.06 ns` | ` 12.51 ns` |
| RingBuffer.shift (size: 100000)           | `  2.53 ns/iter` | `  2.32 ns` | `  2.43 ns` | ` 11.91 ns` | ` 23.33 ns` |
| RingBuffer serialization (size: 1)        | ` 45.09 ns/iter` | ` 43.92 ns` | ` 44.83 ns` | ` 55.32 ns` | `218.00 ns` |
| RingBuffer serialization (size: 10)       | `136.90 ns/iter` | `134.30 ns` | `136.30 ns` | `156.66 ns` | `219.99 ns` |
| RingBuffer serialization (size: 100)      | `  1.05 µs/iter` | `  1.05 µs` | `  1.05 µs` | `  1.09 µs` | `  1.15 µs` |
| RingBuffer serialization (size: 1000)     | `  9.84 µs/iter` | `  9.80 µs` | `  9.84 µs` | `  9.87 µs` | ` 10.22 µs` |
| RingBuffer serialization (size: 10000)    | ` 94.57 µs/iter` | ` 92.63 µs` | ` 94.29 µs` | `108.75 µs` | `130.33 µs` |
| RingBuffer serialization (size: 100000)   | `903.22 µs/iter` | `889.17 µs` | `902.75 µs` | `972.08 µs` | `  1.00 ms` |
| RingBuffer deserialization (size: 1)      | ` 44.14 ns/iter` | ` 42.45 ns` | ` 43.44 ns` | ` 75.22 ns` | `102.29 ns` |
| RingBuffer deserialization (size: 10)     | ` 94.08 ns/iter` | ` 91.22 ns` | ` 93.31 ns` | `133.21 ns` | `172.83 ns` |
| RingBuffer deserialization (size: 100)    | `801.46 ns/iter` | `783.46 ns` | `790.80 ns` | `961.13 ns` | `965.45 ns` |
| RingBuffer deserialization (size: 1000)   | `  7.98 µs/iter` | `  7.94 µs` | `  7.97 µs` | `  8.22 µs` | `  8.25 µs` |
| RingBuffer deserialization (size: 10000)  | ` 76.50 µs/iter` | ` 74.96 µs` | ` 77.00 µs` | ` 84.00 µs` | ` 93.71 µs` |
| RingBuffer deserialization (size: 100000) | `752.27 µs/iter` | `735.58 µs` | `758.33 µs` | `814.63 µs` | `837.96 µs` |
