import { isNumber } from '../src/helper/is/index';

test('number is a number', () => {
  expect(isNumber(56)).toBe(true);
});

test('object is not a number', () => {
  expect(isNumber({'sdfsdf': 3})).toBe(false);
});

test('short string is not a number', () => {
  expect(isNumber('d')).toBe(false);
});

test('long string is not a number', () => {
  expect(isNumber('jsadfisiadjf sioadj fposhiad fpo sadiof posahdfpuih aspdf')).toBe(false);
});

test('array is not a number', () => {
  expect(isNumber([1, 2, 3, 4])).toBe(false);
});

test('undefined is not a number', () => {
  expect(isNumber(undefined)).toBe(false);
});

test('null is not a number', () => {
  expect(isNumber(null)).toBe(false);
});

test('function is not a number', () => {
  expect(isNumber(() => { return;})).toBe(false);
});
