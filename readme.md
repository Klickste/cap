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

Use and (optionally) configure the main module:

```scss
@use '@klickste/cap' with (
  $namespace: 'app'
);
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

:root {
  @include font.props(
    $family: 'Inter',
    $fallback: sans-serif,
    $weights: ('soft': 400,'strong': 500,'heavy': 600),
    $features: ('calt', 'liga', 'ss03', 'zero', 'cv05', 'cv10')
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
//  :root {
//    --app-fontFamily: 'Inter', sans-serif;
//    --app-fontFeatures: 'calt', 'liga', 'ss03', 'zero', 'cv05', 'cv10';
//    --app-fontWeight-soft: 400;
//    --app-fontWeight-strong: 500;
//    --app-fontWeight-heavy: 600;
//  }
```
<!-- prettier-ignore-end -->

If you would like to use multiple typefaces, you have to provide a `$name` for each `font.props()`. This ensures you can access individual properties which may results from different font metrics or configurations:

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
  $weight: 500 700,
  $src: './fonts/Merriweather-roman.var.woff2'
);

:root {
  @include font.props(
    $family: 'Inter',
    $fallback: sans-serif,
    $weights: ('soft': 400, 'strong': 500, 'heavy': 600),
    $features: ('calt', 'liga', 'ss03', 'zero', 'cv05', 'cv10'),
    $name: 'sans'
  );

  @include font.props(
    $family: 'Merriweather',
    $fallback: serif,
    $weights: ('soft': 500, 'strong': 600, 'heavy': 700),
    $name: 'serif'
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
//    font-weight: 500 700;
//    src: url('./fonts/Merriweather-roman.var.woff2') format('woff2');
//  }
//
//  :root {
//    --app-fontFamily-sans: 'Inter', sans-serif;
//    --app-fontFeatures-sans: 'calt', 'liga', 'ss03', 'zero', 'cv05', 'cv10';
//    --app-fontWeight-soft-sans: 400;
//    --app-fontWeight-strong-sans: 500;
//    --app-fontWeight-heavy-sans: 600;
//    --app-fontFamily-serif: 'Merriweather', serif;
//    --app-fontFeatures-serif: normal;
//    --app-fontWeight-soft-serif: 500;
//    --app-fontWeight-strong-serif: 600;
//    --app-fontWeight-heavy-serif: 700;
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
    $spacing: 0,
    $metrics: (2816, 2048)
  );
}

//  ==========================================================================
//  CSS output
//  ==========================================================================

//  :root {
//    --app-fontSize-sm: 13px;
//    --app-lineHeight-sm: 20px;
//    --app-letterSpacing-sm: -0.003em;
//    --app-trimOffset-sm: 5px;
//
//    --app-fontSize-md: 15px;
//    --app-lineHeight-md: 22px;
//    --app-letterSpacing-md: -0.009em;
//    --app-trimOffset-md: 6px;
//
//    --app-fontSize-lg: 18px;
//    --app-lineHeight-lg: 26px;
//    --app-letterSpacing-lg: -0.014em;
//    --app-trimOffset-lg: 6px;
//
//    --app-fontSize-xl: 22px;
//    --app-lineHeight-xl: 30px;
//    --app-letterSpacing-xl: -0.018em;
//    --app-trimOffset-xl: 7px;
//
//    --app-fontSize-2xl: 26px;
//    --app-lineHeight-2xl: 34px;
//    --app-letterSpacing-2xl: -0.02em;
//    --app-trimOffset-2xl: 8px;
//  }
```
<!-- prettier-ignore-end -->

Alternatively, you can directly configure the module, if you would like to reuse the module with its configuration at another location:

<!-- prettier-ignore-start -->
```scss
@use '@klickste/cap/scale' with (
  $ups: 3,
  $downs: 1,
  $spacing: 0,
  $metrics: (2816, 2048)
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
//    --app-fontSize-sm: 13px;
//    --app-lineHeight-sm: 20px;
//    --app-letterSpacing-sm: -0.003em;
//    --app-trimOffset-sm: 5px;
//
//    --app-fontSize-md: 15px;
//    --app-lineHeight-md: 22px;
//    --app-letterSpacing-md: -0.009em;
//    --app-trimOffset-md: 6px;
//
//    --app-fontSize-lg: 18px;
//    --app-lineHeight-lg: 26px;
//    --app-letterSpacing-lg: -0.014em;
//    --app-trimOffset-lg: 6px;
//
//    --app-fontSize-xl: 22px;
//    --app-lineHeight-xl: 30px;
//    --app-letterSpacing-xl: -0.018em;
//    --app-trimOffset-xl: 7px;
//
//    --app-fontSize-2xl: 26px;
//    --app-lineHeight-2xl: 34px;
//    --app-letterSpacing-2xl: -0.02em;
//    --app-trimOffset-2xl: 8px;
//  }

//  @media (pointer: coarse) {
//    :root {
//      --app-fontSize-sm: 15px;
//      --app-lineHeight-sm: 22px;
//      --app-letterSpacing-sm: -0.009em;
//      --app-trimOffset-sm: 6px;
//
//      --app-fontSize-md: 17px;
//      --app-lineHeight-md: 24px;
//      --app-letterSpacing-md: -0.013em;
//      --app-trimOffset-md: 6px;
//
//      --app-fontSize-lg: 19px;
//      --app-lineHeight-lg: 26px;
//      --app-letterSpacing-lg: -0.016em;
//      --app-trimOffset-lg: 6px;
//
//      --app-fontSize-xl: 21px;
//      --app-lineHeight-xl: 28px;
//      --app-letterSpacing-xl: -0.018em;
//      --app-trimOffset-xl: 6px;
//
//      --app-fontSize-2xl: 23px;
//      --app-lineHeight-2xl: 30px;
//      --app-letterSpacing-2xl: -0.019em;
//      --app-trimOffset-2xl: 7px;
//    }
//  }
```
<!-- prettier-ignore-end -->

If you would like to use multiple typefaces, you have to provide a map for the `$spacing` and `$metrics` configuration/parameter. Use the `$name` parameter you specified in the `font.props()` mixin as the map keys:

<!-- prettier-ignore-start -->
```scss
@use '@klickste/cap/scale' with (
  $ups: 3,
  $downs: 1,
  $factor: 1.2,
  $spacing: ('sans': 0, 'serif': 1),
  $metrics: (
    'sans': (2816, 2048),
    'serif': (2000, 1486),
  )
);

:root {
  @include scale.props($base: 15px);
}

//  ==========================================================================
//  CSS output
//  ==========================================================================

//  :root {
//
//    ...
//
//    --app-fontSize-md: 15px;
//    --app-lineHeight-md: 22px;
//    --app-letterSpacing-md-sans: -0.009em;
//    --app-letterSpacing-md-serif: -0.007em;
//    --app-trimOffset-md-sans: 6px;
//    --app-trimOffset-md-serif: 5px;
//
//    --app-fontSize-lg: 18px;
//    --app-lineHeight-lg: 26px;
//    --app-letterSpacing-lg-sans: -0.014em;
//    --app-letterSpacing-lg-serif: -0.013em;
//    --app-trimOffset-lg-sans: 6px;
//    --app-trimOffset-lg-serif: 6px;
//
//    ...
//
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
