
const chunk = require('../src/index');

describe('chunk', () => {
  test('chunks an array into smaller arrays of a specified size', () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
    expect(chunk([], 3)).toEqual([]);
  });
});