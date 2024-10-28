import { mult, splitIntoWords, sum } from "./01";

test('sum should be correct', () => {
  let a = 1; 
  let b = 2; 
  let c = 3;
  
  const result = sum(a,b);

  expect(result).toBe(3)
})

test('mult should be correct', () => {
  let a = 1; 
  let b = 2; 
  let c = 3;
  
  const result1 = mult(a,b);

  expect(result1).toBe(2)
})

test('split should be correct', () => {
  let str1 = 'Hello, world!';

  const result3 = splitIntoWords(str1)

  expect(result3.length).toBe(2)
  expect(result3[0]).toBe('Hello,')
})