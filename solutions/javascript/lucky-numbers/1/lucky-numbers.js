// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let firstDigit = array1.join('');
  let secondDigit = array2.join('');
  let sum = Number(firstDigit) + Number(secondDigit);
  return sum;
  
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const textValue = value?.toString?.();
  let reversedValue = textValue?.split('').reverse().join('');
  let isLucky = textValue === reversedValue;
  return isLucky;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) {
    return 'Required field';
  };
  const num = Number(input);
  
  if (Number.isNaN(num) || num === 0) {
    return 'Must be a number besides 0';
  };
  
  return '';
}
