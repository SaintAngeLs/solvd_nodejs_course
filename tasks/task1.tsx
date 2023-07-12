/**
*
*  @file
*  @brief Task 1 - Mathematical Operations
*  This file contains functions for performing mathematical operations such as addition, subtraction,
*  multiplication, and division on a string of numbers separated by spaces.
*  @note This implementation does not support large numbers or decimal precision beyond a certain threshold.
*  For more accurate calculations, consider using libraries or built-in methods that handle arbitrary precision.
*   */

/**
 * Adds multiple numbers together.
 *
 * @param {string} string - A string of numbers separated by space.
 * @returns {string} - The sum of the numbers as a string.
 */
function add(string) 
{
    const numbers = string.split(' ').map(Number);
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum.toString();
}
  

/**
 * Subtracts numbers from the first number in the string.
 *
 * @param {string} string - A string of numbers separated by space.
 * @returns {string} - The result of subtraction as a string.
 */
function subtract(string) 
{
    const numbers = string.split(' ').map(Number);
    const result = numbers.reduce((acc, curr) => acc - curr);
    return result.toString();
}
  
/**
 * Multiplies multiple numbers together.
 *
 * @param {string} string - A string of numbers separated by space.
 * @returns {string} - The product of the numbers as a string.
 */
function multiply(string) 
{
    const numbers = string.split(' ').map(Number);
    const product = numbers.reduce((acc, curr) => acc * curr, 1);
    return product.toString();
}

/**
 * Divides the first number in the string by the rest of the numbers.
 *
 * @param {string} string - A string of numbers separated by space.
 * @returns {string} - The result of division as a string.
 */
function divide(string) 
{
    const numbers = string.split(' ').map(Number);
    const dividend = numbers[0];
    const divisor = numbers.slice(1).reduce((acc, curr) => acc * curr, 1);
  
    const quotient = Math.floor(dividend / divisor);
    const remainder = dividend % divisor;
  
    let decimalPart = '';
    let remainderPart = remainder;
  
    // eps value
    const precision = 16; // Adjust the precision as needed
  
    for (let i = 0; i < precision && remainderPart !== 0; i++) 
    {
        remainderPart *= 10;
        const quotientPart = Math.floor(remainderPart / divisor);
        decimalPart += quotientPart.toString();
        remainderPart %= divisor;
    }
  
    const result = quotient + (decimalPart !== '' ? '.' + decimalPart : '');
    return result;
  
}
  
export { add, subtract, multiply, divide };
  