![cap logo](./cap.svg)

Adaptive typography for the web. Trimmed on the baseline, calculated on the cap height.

[![npm publish](https://github.com/klickste/cap/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/klickste/cap/actions/workflows/npm-publish.yml)

## Usage

Run `npm i @klickste/cap` in your project directory.

Use & configure the Sass module:

```scss
@use '@klickste/cap/cap' with
  (
    $defaultWeight: 'soft',
    $defaultFont: 'sans',
    $baseSizes: (
      15px,
      17px,
    ),
    $fonts: (
      'sans': (
        'family': '"Inter"',
        'fallback': 'sans-serif',
        'weights': (
          'soft': 400,
          'strong': 500,
          'heavy': 600,
        ),
        'styles': (
          'normal': '/fonts/Inter-roman.var.woff2',
          'italic': '/fonts/Inter-italic.var.woff2',
        ),
        'upm': 2816,
        'capHeight': 2048,
        'features': "'calt', 'liga', 'ss03', 'zero', 'cv05', 'cv10'",
        'spacing': 1,
      ),
      'serif': (
        'family': '"Merriweather"',
        'fallback': 'serif',
        'weights': (
          'soft': 400,
          'strong': 500,
          'heavy': 900,
        ),
        'styles': (
          'normal': '/fonts/Merriweather-roman.var.woff2',
          'italic': '/fonts/Merriweather-italic.var.woff2',
        ),
        'upm': 2000,
        'capHeight': 1486,
        'features': normal,
        'spacing': null,
      ),
    ),
    // ...
  );
```

Use the component modules:

```scss
@use '@klickste/cap/components/text';
@use '@klickste/cap/components/rich-text';
```

Use the components elements in your HTML:

```html
<!-- All attributes are optional, except of 'size' -->
<cap-text size="+2" font="serif" weight="heavy" line="loose">
  Qui numquam odit dolores et in dolor rerum. Et natus et vero rerum ut in. Voluptates quas quidem
  minima eveniet optio quis quibusdam.
</cap-text>
```
