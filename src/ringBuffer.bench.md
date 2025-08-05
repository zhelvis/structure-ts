clk: ~3.11 GHz
cpu: Apple M1 Pro
runtime: bun 1.2.9 (arm64-darwin)

| benchmark                                 |              avg |         min |         p75 |         p99 |         max |
| ----------------------------------------- | ---------------- | ----------- | ----------- | ----------- | ----------- |
| RingBuffer.get (size: 1)                  | `  6.05 ns/iter` | `  5.71 ns` | `  5.88 ns` | ` 10.01 ns` | ` 16.83 ns` |
| RingBuffer.get (size: 10)                 | ` 11.84 ns/iter` | ` 10.81 ns` | ` 11.35 ns` | ` 18.36 ns` | ` 26.08 ns` |
| RingBuffer.get (size: 100)                | ` 10.66 ns/iter` | ` 10.20 ns` | ` 10.59 ns` | ` 15.11 ns` | ` 21.71 ns` |
| RingBuffer.get (size: 1000)               | ` 11.55 ns/iter` | ` 10.21 ns` | ` 10.81 ns` | ` 18.97 ns` | ` 21.24 ns` |
| RingBuffer.get (size: 10000)              | ` 11.85 ns/iter` | ` 10.18 ns` | ` 12.24 ns` | ` 17.43 ns` | ` 22.14 ns` |
| RingBuffer.get (size: 100000)             | ` 22.23 ns/iter` | ` 10.38 ns` | ` 25.22 ns` | ` 43.10 ns` | `127.29 ns` |
| RingBuffer.set (size: 1)                  | `  8.08 ns/iter` | `  5.29 ns` | `  9.10 ns` | ` 13.30 ns` | ` 17.69 ns` |
| RingBuffer.set (size: 10)                 | ` 18.67 ns/iter` | ` 17.16 ns` | ` 19.05 ns` | ` 25.17 ns` | ` 38.18 ns` |
| RingBuffer.set (size: 100)                | ` 16.93 ns/iter` | ` 15.99 ns` | ` 17.30 ns` | ` 21.16 ns` | ` 24.74 ns` |
| RingBuffer.set (size: 1000)               | ` 16.68 ns/iter` | ` 15.78 ns` | ` 16.76 ns` | ` 21.48 ns` | ` 23.68 ns` |
| RingBuffer.set (size: 10000)              | ` 16.80 ns/iter` | ` 15.53 ns` | ` 17.01 ns` | ` 23.11 ns` | ` 43.72 ns` |
| RingBuffer.set (size: 100000)             | ` 17.12 ns/iter` | ` 15.90 ns` | ` 17.20 ns` | ` 23.05 ns` | ` 94.50 ns` |
| RingBuffer.push (size: 1)                 | `  7.09 ns/iter` | `  6.39 ns` | `  6.72 ns` | ` 11.52 ns` | ` 14.04 ns` |
| RingBuffer.push (size: 10)                | `  8.85 ns/iter` | `  6.30 ns` | ` 11.28 ns` | ` 15.26 ns` | ` 20.06 ns` |
| RingBuffer.push (size: 100)               | `  6.58 ns/iter` | `  6.28 ns` | `  6.54 ns` | ` 11.38 ns` | ` 19.40 ns` |
| RingBuffer.push (size: 1000)              | `  6.47 ns/iter` | `  6.29 ns` | `  6.49 ns` | `  8.17 ns` | ` 11.20 ns` |
| RingBuffer.push (size: 10000)             | `  6.59 ns/iter` | `  6.27 ns` | `  6.55 ns` | ` 10.26 ns` | ` 13.99 ns` |
| RingBuffer.push (size: 100000)            | `  6.62 ns/iter` | `  6.29 ns` | `  6.65 ns` | `  9.50 ns` | ` 11.94 ns` |
| RingBuffer.pop (size: 1)                  | `  3.98 ns/iter` | `  3.78 ns` | `  4.00 ns` | `  6.01 ns` | `  9.11 ns` |
| RingBuffer.pop (size: 10)                 | `  2.44 ns/iter` | `  2.32 ns` | `  2.43 ns` | `  4.66 ns` | `  8.57 ns` |
| RingBuffer.pop (size: 100)                | `  2.40 ns/iter` | `  2.32 ns` | `  2.43 ns` | `  2.66 ns` | `  6.75 ns` |
| RingBuffer.pop (size: 1000)               | `  2.44 ns/iter` | `  2.32 ns` | `  2.43 ns` | `  4.05 ns` | `  7.29 ns` |
| RingBuffer.pop (size: 10000)              | `  1.95 ns/iter` | `  1.88 ns` | `  1.95 ns` | `  2.12 ns` | ` 13.49 ns` |
| RingBuffer.pop (size: 100000)             | `  2.50 ns/iter` | `  2.32 ns` | `  2.38 ns` | `  6.97 ns` | ` 24.42 ns` |
| RingBuffer.unshift (size: 1)              | `  7.45 ns/iter` | `  7.16 ns` | `  7.40 ns` | ` 11.93 ns` | ` 24.93 ns` |
| RingBuffer.unshift (size: 10)             | `  6.36 ns/iter` | `  6.11 ns` | `  6.36 ns` | `  9.67 ns` | ` 11.29 ns` |
| RingBuffer.unshift (size: 100)            | `  6.37 ns/iter` | `  6.12 ns` | `  6.40 ns` | `  9.58 ns` | ` 12.62 ns` |
| RingBuffer.unshift (size: 1000)           | `  6.40 ns/iter` | `  6.12 ns` | `  6.39 ns` | `  9.82 ns` | ` 19.20 ns` |
| RingBuffer.unshift (size: 10000)          | `  6.40 ns/iter` | `  6.06 ns` | `  6.40 ns` | `  9.80 ns` | ` 13.95 ns` |
| RingBuffer.unshift (size: 100000)         | `  6.68 ns/iter` | `  6.15 ns` | `  6.66 ns` | ` 10.46 ns` | ` 14.84 ns` |
| RingBuffer.shift (size: 1)                | `  4.95 ns/iter` | `  4.84 ns` | `  4.97 ns` | `  6.14 ns` | `  9.45 ns` |
| RingBuffer.shift (size: 10)               | `  2.98 ns/iter` | `  2.32 ns` | `  3.51 ns` | `  3.82 ns` | `  7.06 ns` |
| RingBuffer.shift (size: 100)              | `  2.39 ns/iter` | `  2.32 ns` | `  2.42 ns` | `  2.60 ns` | `  6.52 ns` |
| RingBuffer.shift (size: 1000)             | `  2.36 ns/iter` | `  2.32 ns` | `  2.37 ns` | `  2.50 ns` | `  2.62 ns` |
| RingBuffer.shift (size: 10000)            | `  1.94 ns/iter` | `  1.88 ns` | `  1.94 ns` | `  2.06 ns` | ` 12.40 ns` |
| RingBuffer.shift (size: 100000)           | `  2.51 ns/iter` | `  2.32 ns` | `  2.41 ns` | ` 11.90 ns` | ` 23.69 ns` |
| RingBuffer serialization (size: 1)        | ` 45.19 ns/iter` | ` 44.23 ns` | ` 44.96 ns` | ` 51.56 ns` | `125.23 ns` |
| RingBuffer serialization (size: 10)       | `135.74 ns/iter` | `133.75 ns` | `135.49 ns` | `148.46 ns` | `210.80 ns` |
| RingBuffer serialization (size: 100)      | `  1.08 µs/iter` | `  1.04 µs` | `  1.10 µs` | `  1.19 µs` | `  1.20 µs` |
| RingBuffer serialization (size: 1000)     | ` 10.03 µs/iter` | `  9.74 µs` | ` 10.16 µs` | ` 10.28 µs` | ` 10.31 µs` |
| RingBuffer serialization (size: 10000)    | ` 95.39 µs/iter` | ` 91.71 µs` | ` 95.75 µs` | `117.67 µs` | `135.63 µs` |
| RingBuffer serialization (size: 100000)   | `903.39 µs/iter` | `880.21 µs` | `909.42 µs` | `999.58 µs` | `  1.08 ms` |
| RingBuffer deserialization (size: 1)      | ` 46.24 ns/iter` | ` 43.59 ns` | ` 46.15 ns` | ` 78.94 ns` | `103.19 ns` |
| RingBuffer deserialization (size: 10)     | ` 95.07 ns/iter` | ` 90.77 ns` | ` 95.34 ns` | `133.28 ns` | `178.28 ns` |
| RingBuffer deserialization (size: 100)    | `819.06 ns/iter` | `786.61 ns` | `837.68 ns` | `959.65 ns` | `978.44 ns` |
| RingBuffer deserialization (size: 1000)   | `  8.08 µs/iter` | `  7.97 µs` | `  8.06 µs` | `  8.47 µs` | `  8.48 µs` |
| RingBuffer deserialization (size: 10000)  | ` 80.27 µs/iter` | ` 74.96 µs` | ` 82.08 µs` | ` 99.71 µs` | `120.58 µs` |
| RingBuffer deserialization (size: 100000) | `758.02 µs/iter` | `735.83 µs` | `759.42 µs` | `818.46 µs` | `850.50 µs` |
