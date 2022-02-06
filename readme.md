![cap logo](./cap.svg)

Adaptive typography for the web. Trimmed on the baseline, calculated on the cap height.

[![npm publish](https://github.com/klickste/cap/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/klickste/cap/actions/workflows/npm-publish.yml)

## Usage

Run `npm i @klickste/cap` in your project directory.

Use & optionally configure the Sass module:

```scss
@use '@klickste/cap' with (
  $namespace: 'app',
  $roundEven: false
);
```
