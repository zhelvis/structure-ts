clk: ~3.12 GHz
cpu: Apple M1 Pro
runtime: bun 1.2.9 (arm64-darwin)

| benchmark                              |              avg |         min |         p75 |         p99 |         max |
| -------------------------------------- | ---------------- | ----------- | ----------- | ----------- | ----------- |
| Queue.enqueue (size: 1)                | ` 24.07 ns/iter` | ` 20.33 ns` | ` 25.84 ns` | ` 29.09 ns` | ` 30.38 ns` |
| Queue.enqueue (size: 10)               | ` 25.05 ns/iter` | ` 21.38 ns` | ` 26.70 ns` | ` 30.53 ns` | ` 30.91 ns` |
| Queue.enqueue (size: 100)              | ` 24.79 ns/iter` | ` 21.52 ns` | ` 26.77 ns` | ` 28.99 ns` | ` 29.69 ns` |
| Queue.enqueue (size: 1000)             | ` 25.53 ns/iter` | ` 21.51 ns` | ` 27.83 ns` | ` 32.43 ns` | ` 35.11 ns` |
| Queue.enqueue (size: 10000)            | ` 24.31 ns/iter` | ` 19.73 ns` | ` 26.83 ns` | ` 29.77 ns` | ` 32.05 ns` |
| Queue.enqueue (size: 100000)           | ` 24.47 ns/iter` | ` 20.52 ns` | ` 25.98 ns` | ` 30.32 ns` | ` 31.50 ns` |
| Queue.enqueue (size: 1000000)          | ` 25.60 ns/iter` | ` 21.30 ns` | ` 26.78 ns` | ` 31.18 ns` | ` 31.27 ns` |
| Queue.enqueue (size: 10000000)         | ` 33.86 ns/iter` | ` 21.77 ns` | ` 30.92 ns` | ` 31.07 ns` | `106.70 ns` |
| Queue.dequeue (size: 1)                | `  4.39 ns/iter` | `  4.21 ns` | `  4.39 ns` | `  5.16 ns` | `  7.14 ns` |
| Queue.dequeue (size: 10)               | `  4.20 ns/iter` | `  4.14 ns` | `  4.17 ns` | `  4.53 ns` | `  8.15 ns` |
| Queue.dequeue (size: 100)              | `  4.98 ns/iter` | `  4.91 ns` | `  4.95 ns` | `  5.35 ns` | `  7.33 ns` |
| Queue.dequeue (size: 1000)             | `  4.99 ns/iter` | `  4.91 ns` | `  4.97 ns` | `  5.32 ns` | `  8.37 ns` |
| Queue.dequeue (size: 10000)            | `  1.98 ns/iter` | `  1.93 ns` | `  1.96 ns` | `  2.15 ns` | `  7.54 ns` |
| Queue.dequeue (size: 100000)           | `  3.08 ns/iter` | `  2.97 ns` | `  3.00 ns` | `  5.45 ns` | ` 14.42 ns` |
| Queue.dequeue (size: 1000000)          | `  9.37 ns/iter` | `  8.86 ns` | `  9.47 ns` | ` 11.30 ns` | ` 11.53 ns` |
| Queue.dequeue (size: 10000000)         | ` 15.52 ns/iter` | ` 11.25 ns` | ` 14.32 ns` | ` 15.00 ns` | ` 43.83 ns` |
| Queue serialization (size: 1)          | ` 44.03 ns/iter` | ` 42.83 ns` | ` 44.10 ns` | ` 52.45 ns` | ` 80.96 ns` |
| Queue serialization (size: 10)         | `120.39 ns/iter` | `118.17 ns` | `120.08 ns` | `136.51 ns` | `202.24 ns` |
| Queue serialization (size: 100)        | `896.50 ns/iter` | `889.82 ns` | `895.92 ns` | `961.95 ns` | `980.43 ns` |
| Queue serialization (size: 1000)       | `  8.42 µs/iter` | `  8.34 µs` | `  8.41 µs` | `  8.66 µs` | `  8.70 µs` |
| Queue serialization (size: 10000)      | ` 80.27 µs/iter` | ` 77.25 µs` | ` 81.33 µs` | ` 92.04 µs` | `104.13 µs` |
| Queue serialization (size: 100000)     | `751.20 µs/iter` | `735.42 µs` | `753.21 µs` | `817.42 µs` | `830.17 µs` |
| Queue serialization (size: 1000000)    | `  7.56 ms/iter` | `  7.39 ms` | `  7.62 ms` | `  7.82 ms` | `  7.86 ms` |
| Queue serialization (size: 10000000)   | ` 75.05 ms/iter` | ` 74.80 ms` | ` 75.07 ms` | ` 75.49 ms` | ` 75.74 ms` |
| Queue deserialization (size: 1)        | ` 19.14 ns/iter` | ` 18.25 ns` | ` 19.03 ns` | ` 27.20 ns` | ` 30.87 ns` |
| Queue deserialization (size: 10)       | `188.49 ns/iter` | `182.87 ns` | `188.19 ns` | `235.11 ns` | `239.57 ns` |
| Queue deserialization (size: 100)      | `  1.78 µs/iter` | `  1.75 µs` | `  1.80 µs` | `  1.89 µs` | `  1.91 µs` |
| Queue deserialization (size: 1000)     | ` 18.03 µs/iter` | ` 17.78 µs` | ` 18.16 µs` | ` 18.36 µs` | ` 18.39 µs` |
| Queue deserialization (size: 10000)    | `188.52 µs/iter` | `178.54 µs` | `192.67 µs` | `229.04 µs` | `249.08 µs` |
| Queue deserialization (size: 100000)   | `  1.77 ms/iter` | `  1.74 ms` | `  1.78 ms` | `  1.92 ms` | `  2.10 ms` |
| Queue deserialization (size: 1000000)  | ` 17.89 ms/iter` | ` 17.48 ms` | ` 18.05 ms` | ` 18.26 ms` | ` 18.26 ms` |
| Queue deserialization (size: 10000000) | `189.51 ms/iter` | `185.89 ms` | `187.45 ms` | `192.07 ms` | `210.93 ms` |
