import { isObject } from '../src/helper/is/index';

test('object is an object', () => {
  expect(isObject({'sdfsdf': 3})).toBe(true);
});

test('short string is not an object', () => {
  expect(isObject('d')).toBe(false);
});

test('long string is not an object', () => {
  expect(isObject('jsadfisiadjf sioadj fposhiad fpo sadiof posahdfpuih aspdf')).toBe(false);
});

test('array is not an object', () => {
  expect(isObject([1, 2, 3, 4])).toBe(false);
});

test('undefined is not an object', () => {
  expect(isObject(undefined)).toBe(false);
});

test('null is not an object', () => {
  expect(isObject(null)).toBe(false);
});

test('function is not an object', () => {
  expect(isObject(() => { return;})).toBe(false);
});

test('number is not an object', () => {
  expect(isObject(56)).toBe(false);
});
