clk: ~3.10 GHz
cpu: Apple M1 Pro
runtime: bun 1.2.21 (arm64-darwin)

| benchmark                              |              avg |         min |         p75 |         p99 |         max |
| -------------------------------------- | ---------------- | ----------- | ----------- | ----------- | ----------- |
| History.current (size: 10)             | `  1.40 ns/iter` | `508.54 ps` | `579.83 ps` | `  8.47 ns` | ` 15.02 ns` |
| History.current (size: 100)            | `  3.96 ns/iter` | `  2.64 ns` | `  6.07 ns` | `  6.81 ns` | ` 15.46 ns` |
| History.current (size: 1000)           | `  5.45 ns/iter` | `  2.63 ns` | `  6.27 ns` | `  7.19 ns` | `  8.55 ns` |
| History.current (size: 10000)          | `  6.23 ns/iter` | `  6.05 ns` | `  6.28 ns` | `  7.11 ns` | `  9.16 ns` |
| History.current (size: 100000)         | `  4.72 ns/iter` | `  4.57 ns` | `  4.73 ns` | `  5.64 ns` | ` 10.12 ns` |
| History.canUndo (size: 10)             | `  3.34 ns/iter` | `  3.22 ns` | `  3.36 ns` | `  4.35 ns` | `  6.73 ns` |
| History.canUndo (size: 100)            | `  3.74 ns/iter` | `  3.62 ns` | `  3.78 ns` | `  4.66 ns` | `  7.91 ns` |
| History.canUndo (size: 1000)           | `  3.74 ns/iter` | `  3.62 ns` | `  3.78 ns` | `  4.65 ns` | `  7.73 ns` |
| History.canUndo (size: 10000)          | `  3.60 ns/iter` | `  3.47 ns` | `  3.66 ns` | `  4.48 ns` | `  5.17 ns` |
| History.canUndo (size: 100000)         | `  3.18 ns/iter` | `  3.08 ns` | `  3.22 ns` | `  3.79 ns` | `  7.75 ns` |
| History.undo (size: 10)                | `  2.70 ns/iter` | `  2.59 ns` | `  2.71 ns` | `  5.62 ns` | `  9.09 ns` |
| History.undo (size: 100)               | `  3.73 ns/iter` | `  3.59 ns` | `  3.76 ns` | `  4.83 ns` | `  9.60 ns` |
| History.undo (size: 1000)              | `  3.69 ns/iter` | `  3.59 ns` | `  3.74 ns` | `  4.01 ns` | `  4.66 ns` |
| History.undo (size: 10000)             | `  3.70 ns/iter` | `  3.60 ns` | `  3.74 ns` | `  4.07 ns` | `  5.04 ns` |
| History.undo (size: 100000)            | `  2.62 ns/iter` | `  2.47 ns` | `  2.60 ns` | `  3.76 ns` | ` 12.24 ns` |
| History.canRedo (size: 10)             | `  2.63 ns/iter` | `  2.54 ns` | `  2.67 ns` | `  3.21 ns` | `  7.42 ns` |
| History.canRedo (size: 100)            | `  3.80 ns/iter` | `  3.70 ns` | `  3.86 ns` | `  4.25 ns` | `  7.67 ns` |
| History.canRedo (size: 1000)           | `  3.79 ns/iter` | `  3.70 ns` | `  3.85 ns` | `  4.14 ns` | `  5.23 ns` |
| History.canRedo (size: 10000)          | `  3.80 ns/iter` | `  3.70 ns` | `  3.86 ns` | `  4.14 ns` | `  5.70 ns` |
| History.canRedo (size: 100000)         | `  2.62 ns/iter` | `  2.53 ns` | `  2.67 ns` | `  2.95 ns` | `  5.46 ns` |
| History.redo (size: 10)                | `  2.01 ns/iter` | `  1.92 ns` | `  2.02 ns` | `  2.45 ns` | ` 11.68 ns` |
| History.redo (size: 100)               | `  2.45 ns/iter` | `  2.36 ns` | `  2.47 ns` | `  2.94 ns` | `  6.37 ns` |
| History.redo (size: 1000)              | `  2.43 ns/iter` | `  2.36 ns` | `  2.47 ns` | `  2.72 ns` | `  3.70 ns` |
| History.redo (size: 10000)             | `  2.44 ns/iter` | `  2.36 ns` | `  2.48 ns` | `  2.66 ns` | `  3.47 ns` |
| History.redo (size: 100000)            | `  2.05 ns/iter` | `  1.95 ns` | `  2.08 ns` | `  2.42 ns` | `  5.18 ns` |
| History.push (size: 10)                | ` 49.47 ns/iter` | ` 46.65 ns` | ` 49.03 ns` | ` 87.39 ns` | `122.30 ns` |
| History.push (size: 100)               | ` 49.39 ns/iter` | ` 47.00 ns` | ` 49.10 ns` | ` 69.41 ns` | `124.47 ns` |
| History.push (size: 1000)              | ` 52.05 ns/iter` | ` 47.70 ns` | ` 51.78 ns` | `121.67 ns` | `129.08 ns` |
| History.push (size: 10000)             | ` 49.37 ns/iter` | ` 47.72 ns` | ` 49.85 ns` | ` 55.18 ns` | ` 64.15 ns` |
| History.push (size: 100000)            | ` 52.35 ns/iter` | ` 46.61 ns` | ` 50.29 ns` | `125.85 ns` | `135.86 ns` |
| History serialization (size: 10)       | `226.11 ns/iter` | `220.03 ns` | `225.21 ns` | `264.74 ns` | `352.16 ns` |
| History serialization (size: 100)      | `  1.80 µs/iter` | `  1.77 µs` | `  1.81 µs` | `  1.94 µs` | `  1.95 µs` |
| History serialization (size: 1000)     | ` 17.56 µs/iter` | ` 17.15 µs` | ` 17.63 µs` | ` 17.95 µs` | ` 18.12 µs` |
| History serialization (size: 10000)    | `169.81 µs/iter` | `162.67 µs` | `171.21 µs` | `196.33 µs` | `305.08 µs` |
| History serialization (size: 100000)   | `  1.67 ms/iter` | `  1.61 ms` | `  1.69 ms` | `  1.88 ms` | `  1.97 ms` |
| History deserialization (size: 10)     | ` 90.81 ns/iter` | ` 84.99 ns` | ` 91.54 ns` | `148.03 ns` | `170.95 ns` |
| History deserialization (size: 100)    | `828.94 ns/iter` | `808.68 ns` | `827.96 ns` | `939.81 ns` | `  1.05 µs` |
| History deserialization (size: 1000)   | `  8.60 µs/iter` | `  8.17 µs` | `  8.63 µs` | `  9.22 µs` | `  9.37 µs` |
| History deserialization (size: 10000)  | ` 78.18 µs/iter` | ` 75.92 µs` | ` 78.92 µs` | ` 87.75 µs` | `110.42 µs` |
| History deserialization (size: 100000) | `772.95 µs/iter` | `760.71 µs` | `773.38 µs` | `827.83 µs` | `837.54 µs` |
