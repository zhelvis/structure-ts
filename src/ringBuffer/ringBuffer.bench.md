clk: ~3.13 GHz
cpu: Apple M1 Pro
runtime: bun 1.2.9 (arm64-darwin)

| benchmark                                 |              avg |         min |         p75 |         p99 |         max |
| ----------------------------------------- | ---------------- | ----------- | ----------- | ----------- | ----------- |
| RingBuffer.get (size: 1)                  | `  4.04 ns/iter` | `  3.80 ns` | `  3.84 ns` | `  9.86 ns` | ` 17.49 ns` |
| RingBuffer.get (size: 10)                 | `  6.39 ns/iter` | `  5.64 ns` | `  5.88 ns` | ` 12.93 ns` | ` 17.04 ns` |
| RingBuffer.get (size: 100)                | `  4.51 ns/iter` | `  4.44 ns` | `  4.53 ns` | `  4.66 ns` | `  4.91 ns` |
| RingBuffer.get (size: 1000)               | `  5.40 ns/iter` | `  4.44 ns` | `  4.53 ns` | ` 10.98 ns` | ` 11.58 ns` |
| RingBuffer.get (size: 10000)              | `  5.44 ns/iter` | `  4.45 ns` | `  4.61 ns` | ` 10.98 ns` | ` 16.26 ns` |
| RingBuffer.get (size: 100000)             | `  8.76 ns/iter` | `  4.79 ns` | ` 11.03 ns` | ` 16.40 ns` | ` 26.75 ns` |
| RingBuffer.set (size: 1)                  | `  7.84 ns/iter` | `  4.41 ns` | `  9.91 ns` | ` 10.65 ns` | ` 14.54 ns` |
| RingBuffer.set (size: 10)                 | ` 11.94 ns/iter` | ` 11.60 ns` | ` 11.95 ns` | ` 12.79 ns` | ` 18.53 ns` |
| RingBuffer.set (size: 100)                | ` 10.41 ns/iter` | ` 10.25 ns` | ` 10.41 ns` | ` 11.08 ns` | ` 12.71 ns` |
| RingBuffer.set (size: 1000)               | `  8.68 ns/iter` | `  4.44 ns` | ` 10.22 ns` | ` 10.92 ns` | ` 14.20 ns` |
| RingBuffer.set (size: 10000)              | `  9.53 ns/iter` | `  9.41 ns` | `  9.57 ns` | ` 10.20 ns` | ` 15.17 ns` |
| RingBuffer.set (size: 100000)             | ` 10.05 ns/iter` | `  9.79 ns` | ` 10.06 ns` | ` 11.38 ns` | ` 17.89 ns` |
| RingBuffer.push (size: 1)                 | `  6.89 ns/iter` | `  6.37 ns` | `  6.58 ns` | ` 10.97 ns` | ` 13.42 ns` |
| RingBuffer.push (size: 10)                | `  8.21 ns/iter` | `  6.29 ns` | ` 11.04 ns` | ` 11.93 ns` | ` 16.04 ns` |
| RingBuffer.push (size: 100)               | `  6.41 ns/iter` | `  6.30 ns` | `  6.44 ns` | `  6.75 ns` | `  7.32 ns` |
| RingBuffer.push (size: 1000)              | `  6.42 ns/iter` | `  6.30 ns` | `  6.44 ns` | `  6.86 ns` | `  8.14 ns` |
| RingBuffer.push (size: 10000)             | `  6.61 ns/iter` | `  6.25 ns` | `  6.58 ns` | `  8.62 ns` | ` 13.35 ns` |
| RingBuffer.push (size: 100000)            | `  6.52 ns/iter` | `  6.31 ns` | `  6.63 ns` | `  7.60 ns` | ` 10.21 ns` |
| RingBuffer.pop (size: 1)                  | `  4.03 ns/iter` | `  3.90 ns` | `  4.07 ns` | `  4.76 ns` | `  7.76 ns` |
| RingBuffer.pop (size: 10)                 | `  2.34 ns/iter` | `  2.28 ns` | `  2.33 ns` | `  2.53 ns` | `  6.10 ns` |
| RingBuffer.pop (size: 100)                | `  2.32 ns/iter` | `  2.28 ns` | `  2.31 ns` | `  2.49 ns` | `  2.58 ns` |
| RingBuffer.pop (size: 1000)               | `  2.33 ns/iter` | `  2.28 ns` | `  2.34 ns` | `  2.51 ns` | `  2.58 ns` |
| RingBuffer.pop (size: 10000)              | `  3.94 ns/iter` | `  3.87 ns` | `  3.97 ns` | `  4.20 ns` | `  8.21 ns` |
| RingBuffer.pop (size: 100000)             | `  2.40 ns/iter` | `  2.28 ns` | `  2.39 ns` | `  6.32 ns` | `  8.43 ns` |
| RingBuffer.unshift (size: 1)              | `  7.56 ns/iter` | `  7.43 ns` | `  7.49 ns` | `  8.15 ns` | ` 22.89 ns` |
| RingBuffer.unshift (size: 10)             | `  6.26 ns/iter` | `  6.15 ns` | `  6.21 ns` | `  6.95 ns` | ` 15.18 ns` |
| RingBuffer.unshift (size: 100)            | `  6.22 ns/iter` | `  6.15 ns` | `  6.22 ns` | `  6.48 ns` | `  7.82 ns` |
| RingBuffer.unshift (size: 1000)           | `  6.23 ns/iter` | `  6.15 ns` | `  6.25 ns` | `  6.57 ns` | `  7.29 ns` |
| RingBuffer.unshift (size: 10000)          | `  6.27 ns/iter` | `  6.17 ns` | `  6.32 ns` | `  6.96 ns` | `  9.53 ns` |
| RingBuffer.unshift (size: 100000)         | `  9.23 ns/iter` | `  8.81 ns` | `  9.08 ns` | ` 11.48 ns` | ` 23.71 ns` |
| RingBuffer.shift (size: 1)                | `  5.02 ns/iter` | `  4.95 ns` | `  5.01 ns` | `  5.25 ns` | `  7.11 ns` |
| RingBuffer.shift (size: 10)               | `  2.96 ns/iter` | `  2.29 ns` | `  3.51 ns` | `  3.69 ns` | `  6.92 ns` |
| RingBuffer.shift (size: 100)              | `  2.33 ns/iter` | `  2.28 ns` | `  2.35 ns` | `  2.47 ns` | `  2.55 ns` |
| RingBuffer.shift (size: 1000)             | `  2.32 ns/iter` | `  2.28 ns` | `  2.32 ns` | `  2.47 ns` | `  2.54 ns` |
| RingBuffer.shift (size: 10000)            | `  1.90 ns/iter` | `  1.84 ns` | `  1.91 ns` | `  2.01 ns` | `  9.05 ns` |
| RingBuffer.shift (size: 100000)           | `  2.41 ns/iter` | `  2.28 ns` | `  2.32 ns` | `  6.12 ns` | ` 15.24 ns` |
| RingBuffer serialization (size: 1)        | ` 45.34 ns/iter` | ` 44.23 ns` | ` 44.97 ns` | ` 62.22 ns` | `127.04 ns` |
| RingBuffer serialization (size: 10)       | `137.19 ns/iter` | `135.44 ns` | `136.86 ns` | `152.61 ns` | `214.13 ns` |
| RingBuffer serialization (size: 100)      | `  1.06 µs/iter` | `  1.06 µs` | `  1.06 µs` | `  1.08 µs` | `  1.08 µs` |
| RingBuffer serialization (size: 1000)     | ` 10.48 µs/iter` | ` 10.42 µs` | ` 10.51 µs` | ` 10.53 µs` | ` 10.53 µs` |
| RingBuffer serialization (size: 10000)    | ` 95.02 µs/iter` | ` 93.50 µs` | ` 95.29 µs` | `103.54 µs` | `117.54 µs` |
| RingBuffer serialization (size: 100000)   | `910.58 µs/iter` | `896.04 µs` | `914.63 µs` | `964.21 µs` | `980.25 µs` |
| RingBuffer deserialization (size: 1)      | ` 42.23 ns/iter` | ` 40.44 ns` | ` 41.10 ns` | ` 84.43 ns` | `101.42 ns` |
| RingBuffer deserialization (size: 10)     | ` 88.33 ns/iter` | ` 85.71 ns` | ` 87.42 ns` | `142.04 ns` | `163.23 ns` |
| RingBuffer deserialization (size: 100)    | `819.10 ns/iter` | `805.88 ns` | `812.72 ns` | `927.78 ns` | `933.46 ns` |
| RingBuffer deserialization (size: 1000)   | `  8.65 µs/iter` | `  8.59 µs` | `  8.67 µs` | `  8.69 µs` | `  8.70 µs` |
| RingBuffer deserialization (size: 10000)  | ` 78.08 µs/iter` | ` 77.33 µs` | ` 77.96 µs` | ` 83.42 µs` | ` 92.29 µs` |
| RingBuffer deserialization (size: 100000) | `766.34 µs/iter` | `760.75 µs` | `767.38 µs` | `796.17 µs` | `806.29 µs` |
