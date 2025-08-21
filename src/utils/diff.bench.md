clk: ~3.12 GHz
cpu: Apple M1 Pro
runtime: bun 1.2.9 (arm64-darwin)

| benchmark   |              avg |         min |         p75 |         p99 |         max |
| ----------- | ---------------- | ----------- | ----------- | ----------- | ----------- |
| computeDiff | `  3.16 µs/iter` | `  3.02 µs` | `  3.19 µs` | `  3.31 µs` | `  3.33 µs` |
| applyDiff   | `  3.70 µs/iter` | `  3.53 µs` | `  3.79 µs` | `  4.08 µs` | `  4.10 µs` |
| revertDiff  | `  3.80 µs/iter` | `  3.69 µs` | `  3.85 µs` | `  4.06 µs` | `  4.06 µs` |
