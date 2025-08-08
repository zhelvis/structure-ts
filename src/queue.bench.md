clk: ~2.99 GHz
cpu: Apple M1 Pro
runtime: bun 1.2.9 (arm64-darwin)

| benchmark                              |              avg |         min |         p75 |         p99 |         max |
| -------------------------------------- | ---------------- | ----------- | ----------- | ----------- | ----------- |
| Queue.enqueue (size: 1)                | ` 26.59 ns/iter` | ` 21.07 ns` | ` 27.71 ns` | ` 63.96 ns` | ` 78.01 ns` |
| Queue.enqueue (size: 10)               | ` 26.65 ns/iter` | ` 22.11 ns` | ` 28.71 ns` | ` 33.86 ns` | ` 35.90 ns` |
| Queue.enqueue (size: 100)              | ` 26.61 ns/iter` | ` 21.86 ns` | ` 29.01 ns` | ` 34.71 ns` | ` 36.88 ns` |
| Queue.enqueue (size: 1000)             | ` 26.35 ns/iter` | ` 22.09 ns` | ` 27.99 ns` | ` 31.92 ns` | ` 32.50 ns` |
| Queue.enqueue (size: 10000)            | ` 24.84 ns/iter` | ` 20.10 ns` | ` 27.63 ns` | ` 32.02 ns` | ` 34.48 ns` |
| Queue.enqueue (size: 100000)           | ` 26.49 ns/iter` | ` 21.01 ns` | ` 29.19 ns` | ` 35.93 ns` | ` 36.28 ns` |
| Queue.enqueue (size: 1000000)          | ` 26.02 ns/iter` | ` 22.16 ns` | ` 27.31 ns` | ` 30.08 ns` | ` 30.16 ns` |
| Queue.enqueue (size: 10000000)         | ` 28.34 ns/iter` | ` 24.94 ns` | ` 29.54 ns` | ` 30.83 ns` | ` 31.09 ns` |
| Queue.dequeue (size: 1)                | `  2.32 ns/iter` | `  2.04 ns` | `  2.30 ns` | `  5.20 ns` | `  8.69 ns` |
| Queue.dequeue (size: 10)               | `  2.82 ns/iter` | `  2.55 ns` | `  2.78 ns` | `  7.14 ns` | ` 16.88 ns` |
| Queue.dequeue (size: 100)              | `  3.26 ns/iter` | `  3.17 ns` | `  3.29 ns` | `  3.64 ns` | `  7.33 ns` |
| Queue.dequeue (size: 1000)             | `  3.14 ns/iter` | `  3.04 ns` | `  3.16 ns` | `  4.57 ns` | `  7.32 ns` |
| Queue.dequeue (size: 10000)            | `  2.16 ns/iter` | `  1.99 ns` | `  2.13 ns` | `  4.79 ns` | ` 33.59 ns` |
| Queue.dequeue (size: 100000)           | `  3.29 ns/iter` | `  3.04 ns` | `  3.19 ns` | `  8.77 ns` | ` 10.43 ns` |
| Queue.dequeue (size: 1000000)          | `  4.57 ns/iter` | `  4.36 ns` | `  4.67 ns` | `  5.16 ns` | `  5.42 ns` |
| Queue.dequeue (size: 10000000)         | `  7.58 ns/iter` | `  5.01 ns` | `  5.38 ns` | `  5.85 ns` | ` 33.24 ns` |
| Queue serialization (size: 1)          | ` 46.24 ns/iter` | ` 43.20 ns` | ` 47.51 ns` | ` 58.33 ns` | ` 74.35 ns` |
| Queue serialization (size: 10)         | `122.51 ns/iter` | `118.12 ns` | `121.84 ns` | `150.51 ns` | `232.15 ns` |
| Queue serialization (size: 100)        | `  6.45 µs/iter` | `  4.67 µs` | `  7.04 µs` | ` 13.92 µs` | ` 37.13 µs` |
| Queue serialization (size: 1000)       | `  8.73 µs/iter` | `  8.42 µs` | `  8.84 µs` | `  9.26 µs` | `  9.41 µs` |
| Queue serialization (size: 10000)      | ` 84.19 µs/iter` | ` 77.42 µs` | ` 88.00 µs` | `103.38 µs` | `127.71 µs` |
| Queue serialization (size: 100000)     | `776.40 µs/iter` | `739.17 µs` | `794.08 µs` | `871.79 µs` | `  1.11 ms` |
| Queue serialization (size: 1000000)    | `  7.76 ms/iter` | `  7.56 ms` | `  7.81 ms` | `  8.19 ms` | `  8.23 ms` |
| Queue serialization (size: 10000000)   | ` 77.67 ms/iter` | ` 75.47 ms` | ` 79.23 ms` | ` 79.76 ms` | ` 80.88 ms` |
| Queue deserialization (size: 1)        | ` 24.86 ns/iter` | ` 23.52 ns` | ` 25.04 ns` | ` 32.79 ns` | `116.23 ns` |
| Queue deserialization (size: 10)       | `197.51 ns/iter` | `190.87 ns` | `200.48 ns` | `223.83 ns` | `322.10 ns` |
| Queue deserialization (size: 100)      | `  1.79 µs/iter` | `  1.78 µs` | `  1.79 µs` | `  1.86 µs` | `  1.92 µs` |
| Queue deserialization (size: 1000)     | ` 18.23 µs/iter` | ` 18.07 µs` | ` 18.33 µs` | ` 18.44 µs` | ` 18.72 µs` |
| Queue deserialization (size: 10000)    | `184.27 µs/iter` | `182.00 µs` | `183.67 µs` | `201.50 µs` | `217.21 µs` |
| Queue deserialization (size: 100000)   | `  1.78 ms/iter` | `  1.77 ms` | `  1.78 ms` | `  1.91 ms` | `  1.93 ms` |
| Queue deserialization (size: 1000000)  | ` 17.73 ms/iter` | ` 17.67 ms` | ` 17.74 ms` | ` 17.85 ms` | ` 17.92 ms` |
| Queue deserialization (size: 10000000) | `189.58 ms/iter` | `188.05 ms` | `189.71 ms` | `191.31 ms` | `192.24 ms` |
