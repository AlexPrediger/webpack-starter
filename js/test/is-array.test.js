import { isArray } from '../src/helper/is/is-array';

test('array is an array', () => {
  expect(isArray([1, 2, 3])).toBe(true);
});

test('short string is not an array', () => {
  expect(isArray('d')).toBe(false);
});

test('long string is not an array', () => {
  expect(isArray('jsadfisiadjf sioadj fposhiad fpo sadiof posahdfpuih aspdf')).toBe(false);
});

test('object is not an array', () => {
  expect(isArray({'sdfsdf': 3})).toBe(false);
});

test('undefined is not an array', () => {
  expect(isArray(undefined)).toBe(false);
});

test('null is not an array', () => {
  expect(isArray(null)).toBe(false);
});

test('function is not an array', () => {
  expect(isArray(() => { return;})).toBe(false);
});

test('number is not an array', () => {
  expect(isArray(56)).toBe(false);
});
