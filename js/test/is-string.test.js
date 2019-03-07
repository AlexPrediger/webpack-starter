import { isString } from '../src/helper/is/is-string';

test('short string is a string', () => {
  expect(isString('d')).toBe(true);
});

test('long string is a string', () => {
  expect(isString('jsadfisiadjf sioadj fposhiad fpo sadiof posahdfpuih aspdf')).toBe(true);
});

test('object is not a string', () => {
  expect(isString({'sdfsdf': 3})).toBe(false);
});

test('array is not a string', () => {
  expect(isString(['sdf', 'sdfsdf'])).toBe(false);
});

test('undefined is not a string', () => {
  expect(isString(undefined)).toBe(false);
});

test('null is not a string', () => {
  expect(isString(null)).toBe(false);
});

test('function is not a string', () => {
  expect(isString(() => { return;})).toBe(false);
});

test('number is not a string', () => {
  expect(isString(56)).toBe(false);
});
