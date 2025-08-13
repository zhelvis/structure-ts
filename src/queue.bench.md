clk: ~3.13 GHz
cpu: Apple M1 Pro
runtime: bun 1.2.9 (arm64-darwin)

| benchmark                              |              avg |         min |         p75 |         p99 |         max |
| -------------------------------------- | ---------------- | ----------- | ----------- | ----------- | ----------- |
| Queue.enqueue (size: 1)                | ` 25.69 ns/iter` | ` 21.04 ns` | ` 27.84 ns` | ` 31.83 ns` | ` 43.11 ns` |
| Queue.enqueue (size: 10)               | ` 25.37 ns/iter` | ` 21.81 ns` | ` 27.09 ns` | ` 30.50 ns` | ` 31.08 ns` |
| Queue.enqueue (size: 100)              | ` 25.34 ns/iter` | ` 21.86 ns` | ` 27.18 ns` | ` 30.29 ns` | ` 31.05 ns` |
| Queue.enqueue (size: 1000)             | ` 25.93 ns/iter` | ` 22.02 ns` | ` 28.07 ns` | ` 33.58 ns` | ` 35.99 ns` |
| Queue.enqueue (size: 10000)            | ` 25.32 ns/iter` | ` 20.48 ns` | ` 27.45 ns` | ` 32.46 ns` | ` 33.75 ns` |
| Queue.enqueue (size: 100000)           | ` 25.40 ns/iter` | ` 21.08 ns` | ` 27.52 ns` | ` 34.43 ns` | ` 35.31 ns` |
| Queue.enqueue (size: 1000000)          | ` 26.22 ns/iter` | ` 21.65 ns` | ` 27.83 ns` | ` 30.53 ns` | ` 31.24 ns` |
| Queue.enqueue (size: 10000000)         | ` 28.21 ns/iter` | ` 25.77 ns` | ` 28.88 ns` | ` 29.42 ns` | ` 32.01 ns` |
| Queue.dequeue (size: 1)                | `  4.07 ns/iter` | `  3.87 ns` | `  4.04 ns` | `  4.74 ns` | ` 13.11 ns` |
| Queue.dequeue (size: 10)               | `  2.63 ns/iter` | `  2.55 ns` | `  2.61 ns` | `  4.07 ns` | `  9.07 ns` |
| Queue.dequeue (size: 100)              | `  3.25 ns/iter` | `  3.17 ns` | `  3.25 ns` | `  3.53 ns` | `  9.89 ns` |
| Queue.dequeue (size: 1000)             | `  5.14 ns/iter` | `  5.04 ns` | `  5.14 ns` | `  6.68 ns` | ` 10.42 ns` |
| Queue.dequeue (size: 10000)            | `  2.09 ns/iter` | `  2.03 ns` | `  2.08 ns` | `  2.29 ns` | `  7.98 ns` |
| Queue.dequeue (size: 100000)           | `  3.24 ns/iter` | `  3.08 ns` | `  3.20 ns` | `  6.42 ns` | ` 16.51 ns` |
| Queue.dequeue (size: 1000000)          | `  5.10 ns/iter` | `  4.91 ns` | `  5.14 ns` | `  5.66 ns` | `  6.10 ns` |
| Queue.dequeue (size: 10000000)         | `  8.76 ns/iter` | `  5.95 ns` | `  6.76 ns` | `  7.20 ns` | ` 34.26 ns` |
| Queue serialization (size: 1)          | ` 45.59 ns/iter` | ` 43.31 ns` | ` 46.20 ns` | ` 56.04 ns` | ` 74.62 ns` |
| Queue serialization (size: 10)         | `122.78 ns/iter` | `118.70 ns` | `122.64 ns` | `143.57 ns` | `205.49 ns` |
| Queue serialization (size: 100)        | `895.05 ns/iter` | `888.34 ns` | `894.60 ns` | `953.97 ns` | `978.28 ns` |
| Queue serialization (size: 1000)       | `  8.35 µs/iter` | `  8.32 µs` | `  8.36 µs` | `  8.39 µs` | `  8.58 µs` |
| Queue serialization (size: 10000)      | ` 79.97 µs/iter` | ` 76.96 µs` | ` 81.04 µs` | ` 92.29 µs` | `102.79 µs` |
| Queue serialization (size: 100000)     | `749.74 µs/iter` | `733.88 µs` | `751.79 µs` | `812.33 µs` | `832.00 µs` |
| Queue serialization (size: 1000000)    | `  7.42 ms/iter` | `  7.37 ms` | `  7.43 ms` | `  7.52 ms` | `  7.56 ms` |
| Queue serialization (size: 10000000)   | ` 75.04 ms/iter` | ` 74.75 ms` | ` 74.90 ms` | ` 74.98 ms` | ` 77.17 ms` |
| Queue deserialization (size: 1)        | ` 19.76 ns/iter` | ` 18.87 ns` | ` 19.62 ns` | ` 29.45 ns` | ` 38.38 ns` |
| Queue deserialization (size: 10)       | `188.41 ns/iter` | `183.68 ns` | `186.26 ns` | `242.58 ns` | `255.13 ns` |
| Queue deserialization (size: 100)      | `  1.79 µs/iter` | `  1.79 µs` | `  1.80 µs` | `  1.83 µs` | `  1.85 µs` |
| Queue deserialization (size: 1000)     | ` 18.14 µs/iter` | ` 18.09 µs` | ` 18.14 µs` | ` 18.17 µs` | ` 18.28 µs` |
| Queue deserialization (size: 10000)    | `189.60 µs/iter` | `179.04 µs` | `192.08 µs` | `233.17 µs` | `647.38 µs` |
| Queue deserialization (size: 100000)   | `  1.86 ms/iter` | `  1.76 ms` | `  1.90 ms` | `  2.04 ms` | `  2.34 ms` |
| Queue deserialization (size: 1000000)  | ` 18.20 ms/iter` | ` 17.80 ms` | ` 18.30 ms` | ` 19.53 ms` | ` 19.87 ms` |
| Queue deserialization (size: 10000000) | `191.89 ms/iter` | `189.63 ms` | `192.02 ms` | `195.20 ms` | `197.84 ms` |
