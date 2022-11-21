![cap logo](./cap.svg)

Adaptive typography for the web, trimmed at the baseline.

[![npm publish](https://github.com/klickste/cap/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/klickste/cap/actions/workflows/npm-publish.yml)
![npm (scoped)](https://img.shields.io/npm/v/@klickste/cap)

## Installation

```bash
npm install @klickste/cap
```

## Usage

Add the module to your HTML `<head>`:

```html
<script type="module" src="/node_modules/@klickste/cap/dist/cap/cap.esm.js"></script>
```

Or import the module in your JavaScript module:

```javascript
import '@klickste/cap/dist/cap/cap.esm'
```

Use CSS custom properties to pass properties:

```css
:root {
  --cap-text-levels-ratio: 1.2;
  --cap-text-levels-base: 14px;
  --cap-text-levels-down: -2;
  --cap-text-levels-up: 6;

  --cap-text-font-family-sans: 'Inter', sans-serif;
  --cap-text-font-feature-settings-sans: 'calt', 'liga', 'ss03', 'zero', 'cv05', 'cv10', 'ss01';
  --cap-text-upm-sans: 2048;
  --cap-text-cap-height-sans: 1490;
  --cap-text-letter-spacing-factor-sans: 1;
  --cap-text-font-weight-soft-sans: 400;
  --cap-text-font-weight-strong-sans: 500;
  --cap-text-font-weight-heavy-sans: 600;

  /**
   * Same for additional families
   */

  --cap-text-font-family-serif: 'Merriweather', serif;
  --cap-text-font-feature-settings-serif: 'liga';
  /* ... */

  --cap-text-font-family-mono: 'Fira Code', monospace;
  --cap-text-font-feature-settings-mono: 'liga';
  /* ... */
}
```

Use the custom element (all attributes are optional):

```html
<cap-text level="+1" weight="strong" family="sans">The quick brown fox...</cap-text>
```
