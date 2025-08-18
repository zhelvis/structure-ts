clk: ~3.14 GHz
cpu: Apple M1 Pro
runtime: bun 1.2.9 (arm64-darwin)

| benchmark                              |              avg |         min |         p75 |         p99 |         max |
| -------------------------------------- | ---------------- | ----------- | ----------- | ----------- | ----------- |
| History.current (size: 10)             | `  1.36 ns/iter` | `498.54 ps` | `559.33 ps` | `  8.36 ns` | ` 14.37 ns` |
| History.current (size: 100)            | `  3.96 ns/iter` | `  2.62 ns` | `  6.06 ns` | `  6.55 ns` | ` 14.17 ns` |
| History.current (size: 1000)           | `  5.61 ns/iter` | `  2.63 ns` | `  6.21 ns` | `  7.25 ns` | ` 10.43 ns` |
| History.current (size: 10000)          | `  6.19 ns/iter` | `  6.04 ns` | `  6.15 ns` | `  7.10 ns` | ` 15.36 ns` |
| History.current (size: 100000)         | `  4.72 ns/iter` | `  4.57 ns` | `  4.72 ns` | `  7.00 ns` | ` 10.55 ns` |
| History.undo (size: 10)                | `  2.98 ns/iter` | `  2.75 ns` | `  2.96 ns` | `  4.96 ns` | ` 10.86 ns` |
| History.undo (size: 100)               | `  4.10 ns/iter` | `  3.91 ns` | `  4.16 ns` | `  6.12 ns` | ` 14.62 ns` |
| History.undo (size: 1000)              | `  4.01 ns/iter` | `  3.91 ns` | `  4.05 ns` | `  4.82 ns` | `  6.40 ns` |
| History.undo (size: 10000)             | `  4.01 ns/iter` | `  3.91 ns` | `  4.06 ns` | `  4.77 ns` | `  6.95 ns` |
| History.undo (size: 100000)            | `  3.05 ns/iter` | `  2.94 ns` | `  3.05 ns` | `  4.39 ns` | ` 11.28 ns` |
| History.redo (size: 10)                | `  2.21 ns/iter` | `  2.06 ns` | `  2.19 ns` | `  2.91 ns` | `  9.64 ns` |
| History.redo (size: 100)               | `  2.70 ns/iter` | `  2.55 ns` | `  2.67 ns` | `  5.89 ns` | `  7.94 ns` |
| History.redo (size: 1000)              | `  2.63 ns/iter` | `  2.55 ns` | `  2.66 ns` | `  3.03 ns` | `  6.55 ns` |
| History.redo (size: 10000)             | `  2.63 ns/iter` | `  2.55 ns` | `  2.66 ns` | `  3.03 ns` | `  6.43 ns` |
| History.redo (size: 100000)            | `  2.15 ns/iter` | `  2.06 ns` | `  2.15 ns` | `  3.05 ns` | `  6.43 ns` |
| History.push (size: 10)                | ` 54.24 ns/iter` | ` 49.51 ns` | ` 55.07 ns` | ` 93.27 ns` | `129.60 ns` |
| History.push (size: 100)               | ` 54.02 ns/iter` | ` 49.81 ns` | ` 54.98 ns` | ` 75.64 ns` | `119.32 ns` |
| History.push (size: 1000)              | ` 56.26 ns/iter` | ` 49.74 ns` | ` 56.80 ns` | `118.48 ns` | `131.30 ns` |
| History.push (size: 10000)             | ` 53.04 ns/iter` | ` 50.31 ns` | ` 54.20 ns` | ` 60.11 ns` | ` 63.18 ns` |
| History.push (size: 100000)            | ` 52.34 ns/iter` | ` 49.14 ns` | ` 53.64 ns` | ` 62.12 ns` | ` 76.68 ns` |
| History serialization (size: 10)       | `235.84 ns/iter` | `217.96 ns` | `246.36 ns` | `266.70 ns` | `326.54 ns` |
| History serialization (size: 100)      | `  7.71 µs/iter` | `  5.71 µs` | `  8.25 µs` | ` 16.58 µs` | ` 29.42 µs` |
| History serialization (size: 1000)     | ` 17.71 µs/iter` | ` 17.56 µs` | ` 17.73 µs` | ` 18.03 µs` | ` 18.12 µs` |
| History serialization (size: 10000)    | `169.03 µs/iter` | `162.13 µs` | `170.63 µs` | `200.92 µs` | `286.29 µs` |
| History serialization (size: 100000)   | `  1.63 ms/iter` | `  1.59 ms` | `  1.64 ms` | `  1.76 ms` | `  1.80 ms` |
| History deserialization (size: 10)     | `103.31 ns/iter` | ` 97.61 ns` | `103.12 ns` | `160.13 ns` | `177.31 ns` |
| History deserialization (size: 100)    | `847.11 ns/iter` | `820.55 ns` | `857.89 ns` | `920.04 ns` | `940.26 ns` |
| History deserialization (size: 1000)   | `  8.73 µs/iter` | `  8.49 µs` | `  8.80 µs` | `  9.27 µs` | `  9.27 µs` |
| History deserialization (size: 10000)  | ` 87.45 µs/iter` | ` 84.00 µs` | ` 88.17 µs` | `106.79 µs` | `125.54 µs` |
| History deserialization (size: 100000) | `847.60 µs/iter` | `825.00 µs` | `855.96 µs` | `918.63 µs` | `935.25 µs` |
