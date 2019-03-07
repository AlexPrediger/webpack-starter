import { isBoolean } from '../src/helper/is/is-boolean';

test('Boolean is boolean', () => {
  expect(isBoolean(true)).toBe(true);
});

test('Boolean is boolean', () => {
  expect(isBoolean(false)).toBe(true);
});

test('null is not boolean', () => {
  expect(isBoolean(null)).toBe(false);
});

test('short string is not boolean', () => {
  expect(isBoolean('d')).toBe(false);
});

test('long string is not boolean', () => {
  expect(isBoolean('jsadfisiadjf sioadj fposhiad fpo sadiof posahdfpuih aspdf')).toBe(false);
});

test('object is not boolean', () => {
  expect(isBoolean({'sdfsdf': 3})).toBe(false);
});

test('undefined is not boolean', () => {
  expect(isBoolean(undefined)).toBe(false);
});

test('array is not boolean', () => {
  expect(isBoolean([1, 2, 3, 4])).toBe(false);
});

test('function is not boolean', () => {
  expect(isBoolean(() => { return;})).toBe(false);
});

test('number is not boolean', () => {
  expect(isBoolean(56)).toBe(false);
});
