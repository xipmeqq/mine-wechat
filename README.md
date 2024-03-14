# tea-chunk-js

`tea-chunk-js` is designed to be simple and straightforward, similar to the `_.chunk` function in lodash, but as a standalone module with no dependencies, making it perfect for projects where you want to keep your bundle size small.

## Installation

To install `tea-chunk-js`, use npm or yarn:

```bash
npm install tea-chunk-js
# OR
yarn add tea-chunk-js
```

## Usage

Import `tea-chunk-js` into your project and use it to split an array into smaller arrays of a specified size:

```javascript
const chunk = require("tea-chunk-js");

// Example array
const myArray = [1, 2, 3, 4, 5, 6];

// Split into chunks of 2
const result = chunk(myArray, 2);

// Output: [[1, 2], [3, 4], [5, 6]]
console.log(result);
```
