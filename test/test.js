const assert = require('assert');
const novl = require('../');

describe('NOVL', () => {
	let fallbackValue = 37726;

	it('should return `value` when `value` is Number.', () => {
		assert.strictEqual(novl(1, fallbackValue), 1);
		assert.strictEqual(novl(1.23, fallbackValue), 1.23);
		assert.strictEqual(novl(5e2, fallbackValue), 500);
		assert.strictEqual(novl(0xF, fallbackValue), 15);
		assert.strictEqual(novl(Math.PI, fallbackValue), Math.PI);
		assert.strictEqual(novl(Number.POSITIVE_INFINITY, fallbackValue), Number.POSITIVE_INFINITY);

		/*
		 * "Not-A-Number" still be the number. 😂
		 *
		 * `NaN` value has never been equal to itself.
		 */
		assert.notStrictEqual(novl(Number.NaN, fallbackValue), fallbackValue);
	});
	it('should return `fallbackValue` when `value` is not Number.', () => {
		assert.strictEqual(novl(null, fallbackValue), fallbackValue);
		assert.strictEqual(novl({ a: 1, b: 2, c: 3 }, fallbackValue), fallbackValue);
		assert.strictEqual(novl(Symbol(), fallbackValue), fallbackValue);
		assert.strictEqual(novl([0, 1, 2], fallbackValue), fallbackValue);
	});
});
