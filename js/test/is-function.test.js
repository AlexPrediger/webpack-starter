import { isFunction } from '../src/helper/is/index';

test('function is a function', () => {
  expect(isFunction(() => {})).toBe(true);
});

test('class is not a function', () => {
    class Test {
        constructor() {
        }
    }
    expect(isFunction(Test)).toBe(false);
});

test('number is not a function', () => {
  expect(isFunction(56)).toBe(false);
});

test('object is not a function', () => {
  expect(isFunction({'sdfsdf': 3})).toBe(false);
});

test('short string is not a function', () => {
  expect(isFunction('d')).toBe(false);
});

test('long string is not a function', () => {
  expect(isFunction('jsadfisiadjf sioadj fposhiad fpo sadiof posahdfpuih aspdf')).toBe(false);
});

test('array is not a function', () => {
  expect(isFunction([1, 2, 3, 4])).toBe(false);
});

test('undefined is not a function', () => {
  expect(isFunction(undefined)).toBe(false);
});

test('null is not a function', () => {
  expect(isFunction(null)).toBe(false);
});
