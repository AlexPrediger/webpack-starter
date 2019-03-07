import { isUndefined } from '../src/helper/is/is-undefined';

test('null is undefined', () => {
  expect(isUndefined(undefined)).toBe(true);
});

test('short string is not undefined', () => {
  expect(isUndefined('d')).toBe(false);
});

test('long string is not undefined', () => {
  expect(isUndefined('jsadfisiadjf sioadj fposhiad fpo sadiof posahdfpuih aspdf')).toBe(false);
});

test('object is not undefined', () => {
  expect(isUndefined({'sdfsdf': 3})).toBe(false);
});

test('undefined is not undefined', () => {
  expect(isUndefined(null)).toBe(false);
});

test('array is not undefined', () => {
  expect(isUndefined([1, 2, 3, 4])).toBe(false);
});

test('function is not undefined', () => {
  expect(isUndefined(() => { return;})).toBe(false);
});

test('number is not undefined', () => {
  expect(isUndefined(56)).toBe(false);
});
