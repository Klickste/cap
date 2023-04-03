![cap logo](./cap.svg)

Adaptive typography for the web, trimmed at the baseline.

[![npm publish](https://github.com/klickste/cap/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/klickste/cap/actions/workflows/npm-publish.yml)
![npm (scoped)](https://img.shields.io/npm/v/@klickste/cap)

## Installation

```bash
npm install @klickste/cap
```

## Usage

Configure the Sass module:

```scss
@use '@klickste/cap/dist/cap/cap' with (
  $levels-base: 17,
  $levels-ratio: 1.2,
  $levels-up: 6,
  $levels-down: 2,
  $family-sans: (
    'font': '"Inter"',
    'fallback': 'sans-serif',
    'upm': 2048,
    'cap-height': 1490,
    'spacing': 1,
    'features': '"calt", "liga", "ss03", "zero", "cv05", "cv10", "ss01"',
    'weights': (
      'soft': 400,
      'strong': 500,
      'heavy': 600,
    ),
  ),
  $family-serif: (
    'font': '"Merriweather"',
    'fallback': 'serif',
    'upm': 2000,
    'cap-height': 1486,
    'spacing': 0,
    'features': '"liga"',
    'weights': (
      'soft': 400,
      'strong': 600,
      'heavy': 800,
    ),
  )
);
```

Include custom properties with the built-in mixins:

```scss
:root {
  @include cap.levels;
  @include cap.families;
  @include cap.leadings;
}
```

Load your variable web fonts:

```scss
@font-face {
  font-display: swap;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100 900;
  src: url('./../assets/fonts/Inter.var.woff2') format('woff2-variations');
}

// ...
```

Load the ES module in your HTML `<head>`:

```html
<script type="module" src="node_modules/@klickste/cap/dist/cap/cap.esm.js"></script>
```

Use the cap-text component anywhere in your markup:

```html
<cap-text level="+1" family="serif">Lorem ipsum</cap-text>
```

Use the cap-rich-text component anywhere in your markup:

```html
<cap-rich-text heading-family="sans">
  <h1>Tempora odit accusantium facilis</h1>
  <p>
    Amet accusamus minima autem facere adipisci non officia qui. Delectus nostrum quis esse
    <strong>quis corporis et</strong> voluptates. Enim quos dolor dignissimos nihil voluptatem error ab recusandae.
    Maxime repellat ut error at fuga harum molestiae.
  </p>
  <h2>Et iusto minima</h2>
  <p>
    Eum et dolor aut possimus ratione est. Et voluptas <a href="#">ut iste rerum et</a> et. Voluptatem iure culpa
    quaerat voluptatem veritatis repudiandae earum. Pariatur nam omnis corporis est id aspernatur omnis. Necessitatibus
    est eius enim ratione necessitatibus commodi aut. Et ab tempore facilis ullam suscipit et.
  </p>
</cap-rich-text>
```
