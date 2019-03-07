import { isClass } from '../src/helper/is/index';

test('class is a class', () => {
    class Test {
        constructor() {
        }
    }
    expect(isClass(Test).toBe(true);
});

test('function is not a class', () => {
  expect(isClass(() => {})).toBe(false);
});

test('number is not a class', () => {
  expect(isClass(56)).toBe(false);
});

test('object is not a class', () => {
  expect(isClass({'sdfsdf': 3})).toBe(false);
});

test('short string is not a class', () => {
  expect(isClass('d')).toBe(false);
});

test('long string is not a class', () => {
  expect(isClass('jsadfisiadjf sioadj fposhiad fpo sadiof posahdfpuih aspdf')).toBe(false);
});

test('array is not a class', () => {
  expect(isClass([1, 2, 3, 4])).toBe(false);
});

test('undefined is not a class', () => {
  expect(isClass(undefined)).toBe(false);
});

test('null is not a class', () => {
  expect(isClass(null)).toBe(false);
});
