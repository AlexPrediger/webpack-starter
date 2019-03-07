import { isNull } from '../src/helper/is/is-null';

test('null is null', () => {
  expect(isNull(null)).toBe(true);
});

test('short string is not null', () => {
  expect(isNull('d')).toBe(false);
});

test('long string is not null', () => {
  expect(isNull('jsadfisiadjf sioadj fposhiad fpo sadiof posahdfpuih aspdf')).toBe(false);
});

test('object is not null', () => {
  expect(isNull({'sdfsdf': 3})).toBe(false);
});

test('undefined is not null', () => {
  expect(isNull(undefined)).toBe(false);
});

test('array is not null', () => {
  expect(isNull([1, 2, 3, 4])).toBe(false);
});

test('function is not null', () => {
  expect(isNull(() => { return;})).toBe(false);
});

test('number is not null', () => {
  expect(isNull(56)).toBe(false);
});
