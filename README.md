# NOVL
[![license](https://img.shields.io/github/license/value-fallback/NOVL.svg?style=flat-square)](https://github.com/value-fallback/NOVL/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/novl.svg?style=flat-square)](https://www.npmjs.com/package/novl)
[![npm](https://img.shields.io/npm/dt/novl.svg?style=flat-square)](https://www.npmjs.com/package/novl)
[![Travis](https://img.shields.io/travis/value-fallback/NOVL.svg?style=flat-square)](https://travis-ci.org/value-fallback/NOVL)
[![ESLint Gluons](https://img.shields.io/badge/code%20style-gluons-9C27B0.svg?style=flat-square)](https://github.com/gluons/eslint-config-gluons)

Fallback when a value is not [Number](https://developer.mozilla.org/th/docs/Web/JavaScript/Reference/Global_Objects/Number).

## Installation

**Via [NPM](https://www.npmjs.com):**

[![NPM](https://nodei.co/npm/novl.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/novl)

```
npm install novl
```

**Via [Yarn](https://yarnpkg.com):**

```
yarn add novl
```

## Usage

```javascript
const novl = require('novl');

// When a value is not Number, it will return fallback value.
let a = novl(null, 0); // a = 0
let b = novl({}, 'x'); // b = 'x'

// When a value is Number, it will return that value.
let c = novl(NaN, 1); // c = NaN   😂
let d = novl(100, [0, 1, 2]); // d = 100
```

## API

### novl(value, fallbackValue)

#### value
A main value.

#### fallbackValue
A fallback value.
