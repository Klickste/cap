![cap logo](./cap.svg)

Adaptive typography for the web, trimmed at the baseline.

[![npm publish](https://github.com/klickste/cap/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/klickste/cap/actions/workflows/npm-publish.yml)
![npm (scoped)](https://img.shields.io/npm/v/@klickste/cap)

## Installation

Run `npm i @klickste/cap` in your project directory and ensure Sass can resolve the `node_modules` directory as a module path.

## Usage

[Specify fonts](#specify-fonts)\
[Specify scales](#specify-scales)\
[Use custom properties](#use-custom-properties)\
[Trim selectors](#trim-selectors)

---

> **Note**: Named parameters for included **mixins** are not necessarily required. This is just for documentation purposes, so that depends on your preference.

Use the main module:

```scss
@use '@klickste/cap';
```

### Specify fonts

<!-- prettier-ignore-start -->
```scss
@use '@klickste/cap/font';

@include font.face(
  $family: 'Inter',
  $style: normal,
  $weight: 400 600,
  $src: './fonts/Inter-roman.var.woff2'
);

@include font.face(
  $family: 'Merriweather',
  $style: normal,
  $weight: 300 700,
  $src: './fonts/Merriweather.var.woff2'
);

:root {
  @include font.props(
    $family: 'Inter',
    $fallback: sans-serif,
    $name: 'sans',
    $weights: ('soft': 400, 'strong': 500, 'heavy': 600),
    $features: ('calt', 'liga', 'ss03', 'zero', 'cv05', 'cv10')
  );

  @include font.props(
    $family: 'Merriweather',
    $fallback: serif,
    $name: 'serif',
    $weights: ('soft': 300, 'strong': 400, 'heavy': 700),
    $features: ('liga')
  );
}

//  ==========================================================================
//  CSS output
//  ==========================================================================

//  @font-face {
//    font-display: 'swap';
//    font-family: 'Inter';
//    font-style: normal;
//    font-weight: 400 600;
//    src: url('./fonts/Inter-roman.var.woff2') format('woff2');
//  }
//
//  @font-face {
//    font-display: 'swap';
//    font-family: 'Merriweather';
//    font-style: normal;
//    font-weight: 300 700;
//    src: url('./fonts/Merriweather.var.woff2') format('woff2');
//  }
//
//  :root {
//    --cap-fontFamily-sans: 'Inter', sans-serif;
//    --cap-fontFeatures-sans: 'calt', 'liga', 'ss03', 'zero', 'cv05', 'cv10';
//    --cap-fontWeight-soft-sans: 400;
//    --cap-fontWeight-strong-sans: 500;
//    --cap-fontWeight-heavy-sans: 600;
//
//    --cap-fontFamily-serif: 'Merriweather', serif;
//    --cap-fontFeatures-serif: 'liga';
//    --cap-fontWeight-soft-serif: 300;
//    --cap-fontWeight-strong-serif: 400;
//    --cap-fontWeight-heavy-serif: 700;
//  }
```
<!-- prettier-ignore-end -->

### Specify scales

> The `$metrics` parameter consists of the **UPM** (**U**nits **P**er e**M**) and the **cap height** value. These values can be extracted by font tools like [fontkit](https://github.com/foliojs/fontkit) in [this example](#extract-font-metrics).

<!-- prettier-ignore-start -->
```scss
@use '@klickste/cap/scale';

:root {
  @include scale.props(
    $base: 15px,
    $ups: 3,
    $downs: 1,
    $factor: 1.2,
    $spacing: (
      'sans': 0,
      'serif': null
    ),
    $metrics: (
      'sans': (2816, 2048),
      'serif': (2000, 1486)
    )
  );
}

//  ==========================================================================
//  CSS output
//  ==========================================================================

//  :root {
//    --cap-fontSize-sm: 13px;
//    --cap-lineHeight-sm: 20px;
//    --cap-letterSpacing-sm-sans: -0.003em;
//    --cap-trimOffset-sm-sans: 5px;
//    --cap-trimOffset-sm-serif: 5px;
//
//    --cap-fontSize-md: 15px;
//    --cap-lineHeight-md: 22px;
//    --cap-letterSpacing-md-sans: -0.009em;
//    --cap-trimOffset-md-sans: 6px;
//    --cap-trimOffset-md-serif: 5px;
//
//    --cap-fontSize-lg: 18px;
//    --cap-lineHeight-lg: 26px;
//    --cap-letterSpacing-lg-sans: -0.014em;
//    --cap-trimOffset-lg-sans: 6px;
//    --cap-trimOffset-lg-serif: 6px;
//
//    --cap-fontSize-xl: 22px;
//    --cap-lineHeight-xl: 30px;
//    --cap-letterSpacing-xl-sans: -0.018em;
//    --cap-trimOffset-xl-sans: 7px;
//    --cap-trimOffset-xl-serif: 7px;
//
//    --cap-fontSize-2xl: 26px;
//    --cap-lineHeight-2xl: 34px;
//    --cap-letterSpacing-2xl-sans: -0.02em;
//    --cap-trimOffset-2xl-sans: 8px;
//    --cap-trimOffset-2xl-serif: 7px;
//  }
```
<!-- prettier-ignore-end -->

Alternatively, you can directly configure the module, if you would like to reuse the module with its configuration at another location:

<!-- prettier-ignore-start -->
```scss
@use '@klickste/cap/scale' with (
  $ups: 3,
  $downs: 1,
  $spacing: (
    'sans': 0,
    'serif': null
  ),
  $metrics: (
    'sans': (2816, 2048),
    'serif': (2000, 1486)
  )
);

:root {
  @include scale.props($base: 15px, $factor: 1.2);

  @media (pointer: coarse) {
    @include scale.props($base: 17px, $factor: 1.1);
  }
}

//  ==========================================================================
//  CSS output
//  ==========================================================================

//  :root {
//    --cap-fontSize-sm: 13px;
//    --cap-lineHeight-sm: 20px;
//    --cap-letterSpacing-sm-sans: -0.003em;
//    --cap-trimOffset-sm-sans: 5px;
//    --cap-trimOffset-sm-serif: 5px;
//
//    --cap-fontSize-md: 15px;
//    --cap-lineHeight-md: 22px;
//    --cap-letterSpacing-md-sans: -0.009em;
//    --cap-trimOffset-md-sans: 6px;
//    --cap-trimOffset-md-serif: 5px;
//
//    --cap-fontSize-lg: 18px;
//    --cap-lineHeight-lg: 26px;
//    --cap-letterSpacing-lg-sans: -0.014em;
//    --cap-trimOffset-lg-sans: 6px;
//    --cap-trimOffset-lg-serif: 6px;
//
//    --cap-fontSize-xl: 22px;
//    --cap-lineHeight-xl: 30px;
//    --cap-letterSpacing-xl-sans: -0.018em;
//    --cap-trimOffset-xl-sans: 7px;
//    --cap-trimOffset-xl-serif: 7px;
//
//    --cap-fontSize-2xl: 26px;
//    --cap-lineHeight-2xl: 34px;
//    --cap-letterSpacing-2xl-sans: -0.02em;
//    --cap-trimOffset-2xl-sans: 8px;
//    --cap-trimOffset-2xl-serif: 7px;
//  }
//
//  @media (pointer: coarse) {
//    :root {
//      --cap-fontSize-sm: 15px;
//      --cap-lineHeight-sm: 22px;
//      --cap-letterSpacing-sm-sans: -0.009em;
//      --cap-trimOffset-sm-sans: 6px;
//      --cap-trimOffset-sm-serif: 5px;
//
//      --cap-fontSize-md: 17px;
//      --cap-lineHeight-md: 24px;
//      --cap-letterSpacing-md-sans: -0.013em;
//      --cap-trimOffset-md-sans: 6px;
//      --cap-trimOffset-md-serif: 6px;
//
//      --cap-fontSize-lg: 19px;
//      --cap-lineHeight-lg: 26px;
//      --cap-letterSpacing-lg-sans: -0.016em;
//      --cap-trimOffset-lg-sans: 6px;
//      --cap-trimOffset-lg-serif: 6px;
//
//      --cap-fontSize-xl: 21px;
//      --cap-lineHeight-xl: 28px;
//      --cap-letterSpacing-xl-sans: -0.018em;
//      --cap-trimOffset-xl-sans: 6px;
//      --cap-trimOffset-xl-serif: 6px;
//
//      --cap-fontSize-2xl: 23px;
//      --cap-lineHeight-2xl: 30px;
//      --cap-letterSpacing-2xl-sans: -0.019em;
//      --cap-trimOffset-2xl-sans: 7px;
//      --cap-trimOffset-2xl-serif: 6px;
//    }
//  }
```
<!-- prettier-ignore-end -->

#### Extract font metrics

```javascript
const fontkit = require('fontkit')
const fonts = [
  fontkit.openSync('./fonts/Inter-roman.var.woff2'),
  fontkit.openSync('./fonts/Merriweather-roman.var.woff2'),
]

fonts.map((font) => {
  console.log(`${font.fullName}\nUPM: ${font.unitsPerEm}\nCap height: ${font.capHeight}\n`)
})

//  ==========================================================================
//  Console output
//  ==========================================================================

//  Inter
//  UPM: 2816
//  Cap height: 2048
//
//  Merriweather
//  UPM: 2000
//  Cap height: 1486
```

### Use custom properties

This library does not provide any built-in selector rules for class names or other attributes, _but this may change in upcoming releases._
You can simply use the declared custom properties anywhere in your stylesheets to create your own (semantic) typography system.

```scss
//  app-label.scss

$levels: (
  'primary': 'md',
  'secondary': 'sm',
);

.app-label {
  font-size: var(--app-label-fontSize);
  line-height: var(--app-label-lineHeight);
  letter-spacing: var(--app-label-letterSpacing);
  font-weight: var(--app-label-fontWeight, var(--app-fontWeight-soft));

  &--required {
    --app-label-fontWeight: var(--app-fontWeight-strong);
  }

  @each $level, $scale in $levels {
    &--#{$level} {
      --app-label-fontSize: var(--app-fontSize-#{$scale});
      --app-label-lineHeight: var(--app-lineHeight-#{$scale});
      --app-label-letterSpacing: var(--app-letterSpacing-#{$scale});
    }
  }
}

//  ==========================================================================
//  CSS output
//  ==========================================================================

//  .app-label {
//    font-size: var(--app-label-fontSize);
//    line-height: var(--app-label-lineHeight);
//    letter-spacing: var(--app-label-letterSpacing);
//    font-weight: var(--app-label-fontWeight, var(--app-fontWeight-soft));
//  }
//
//  .app-label--required {
//    --app-label-fontWeight: var(--app-fontWeight-strong);
//  }
//
//  .app-label--primary {
//    --app-label-fontSize: var(--app-fontSize-md);
//    --app-label-lineHeight: var(--app-lineHeight-md);
//    --app-label-letterSpacing: var(--app-letterSpacing-md);
//  }
//
//  .app-label--secondary {
//    --app-label-fontSize: var(--app-fontSize-sm);
//    --app-label-lineHeight: var(--app-lineHeight-sm);
//    --app-label-letterSpacing: var(--app-letterSpacing-sm);
//  }
```

### Trim selectors

The `trimOffset` property provides an easy and solid way to reduces the height of a selector by the assigned offset value.

```scss
//  app-label.scss

@use '@klickste/cap';

$levels: (
  'primary': 'md',
  'secondary': 'sm',
);

.app-label {
  font-size: var(--app-label-fontSize);
  line-height: var(--app-label-lineHeight);
  letter-spacing: var(--app-label-letterSpacing);

  @include cap.trim($name: 'label');

  @each $level, $scale in $levels {
    &--#{$level} {
      --app-label-fontSize: var(--app-fontSize-#{$scale});
      --app-label-lineHeight: var(--app-lineHeight-#{$scale});
      --app-label-letterSpacing: var(--app-letterSpacing-#{$scale});
      --app-label-trimOffset: var(--app-trimOffset-#{$scale});
    }
  }
}

//  ==========================================================================
//  CSS output
//  ==========================================================================

//  .app-label {
//    font-size: var(--app-label-fontSize);
//    line-height: var(--app-label-lineHeight);
//    letter-spacing: var(--app-label-letterSpacing);
//    padding-bottom: 1px;
//    padding-top: 1px;
//   }
//
//  .app-label::before,
//  .app-label::after {
//    content: "";
//    display: block;
//    height: 0;
//   }
//
//  .app-label::before {
//    margin-top: calc((var(--app-label-trimOffset) + 1px) * -1);
//   }
//
//  .app-label::after {
//    margin-bottom: calc((var(--app-label-trimOffset) + 1px) * -1);
//   }
//
//  .app-label--primary {
//    --app-label-fontSize: var(--app-fontSize-md);
//    --app-label-lineHeight: var(--app-lineHeight-md);
//    --app-label-letterSpacing: var(--app-letterSpacing-md);
//    --app-label-trimOffset: var(--app-trimOffset-md);
//   }
//
//  .app-label--secondary {
//    --app-label-fontSize: var(--app-fontSize-sm);
//    --app-label-lineHeight: var(--app-lineHeight-sm);
//    --app-label-letterSpacing: var(--app-letterSpacing-sm);
//    --app-label-trimOffset: var(--app-trimOffset-sm);
//   }
```

Since calculated `lineHeight` values are rounded to an even number, the associated trim values are rounded to a whole number. This always results in an even selector height for any declared scale. From a design perspective this is more comfortable to work with, but can be disabled by configuring the main module:

```scss
@use '@klickste/cap' with (
  $roundEven: false
);
```
