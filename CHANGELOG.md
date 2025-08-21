# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `Queue`: A queue data structure for TypeScript, useful for implementing FIFO (first-in, first-out) behavior.
- Add playground example for `RingBuffer`.
- `History`: Array-like structure with undo/redo functionality based on `RingBuffer`.
- `computeDiff`: Function to compute deep differences between two structures, returning an array of changes.
- `applyDiff`: Function to apply a computed diff to a structure.
- `revertDiff`: Function to revert a structure to its previous state using a diff.

### Changed

- `RingBuffer`: Constructor now throws an error if the `capacity` is not a safe positive integer.
- `RingBuffer`: Replace delete operations with `undefined` assignments to improve performance for V8.
- `RingBuffer`: Initialization now uses batch creation to prevent "max call stack size exceeded" errors.
- `RingBuffer`: Update benchmarks.

## [0.1.1] - 2025-08-05

### Fixed

- Fix `package.json` entry point for NodeJS

### Changed

- Update deployment workflow name and trigger conditions

## [0.1.0] - 2025-08-05

### Added

- `RingBuffer`: A ring buffer (or circular buffer) data structure for TypeScript, useful for buffering data streams and implementing memory efficient queues and stacks.

[Unreleased]: https://github.com/zhelvis/structure-ts/compare/v0.1.1...HEAD
[0.1.1]: https://github.com/zhelvis/structure-ts/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/zhelvis/structure-ts/releases/tag/v0.1.0
