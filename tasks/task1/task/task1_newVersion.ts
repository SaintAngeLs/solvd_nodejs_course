/**
*
*  @file
*  @brief Task 1 - Mathematical Operations
*  The problem is how to able to perform the basic mathematical operation on the input which is >= 2e30.
*  @note 
*   */


/**
 * Adds multiple numbers together.
 *
 * @param {string} string - A string of numbers separated by space.
 * @returns {string} - The sum of the numbers result as a string.
 */
function add(string: string): string 
{
    const numbers = string.split(' ').map(n => n.split('').reverse().join(''));

    // max number accorgding to the length
    const maxLength = Math.max(...numbers.map(n => n.length));


    let carry = 0;
    let result = [];

    // column-wise adding
    for (let i = 0; i < maxLength; i++) 
    {
        const sum = numbers.reduce((total, number) => total + (parseInt(number[i]) || 0), 0) + carry;
        // digits in the the final sum
        result.push(sum % 10);
        // in the next column the carry is 
        carry = Math.floor(sum / 10);
    }

    // if any remaining cary is => add them all
    if (carry > 0) 
    {
        result.push(carry);
    }

    return result.reverse().join('');
}
  

/**
 * Subtracts numbers from the first number in the string.
 *
 * @param {string} string - A string of numbers separated by space.
 * @returns {string} - The result of subtraction operation as a string.
 */
function subtract(string: string): string
{
    
    let numbers = string.split(' ');
    let result = numbers[0].split('');

    // Column-wise subtraction
    for (let i = 1; i < numbers.length; i++) 
    {
        let number = numbers[i].split('');
        let carry = 0;
        for (let j = result.length - 1; j >= 0; j--) 
        {
            let sub = Number(result[j] || '0') - Number(number[number.length - result.length + j] 
                                                                || '0') - carry;
            if (sub < 0) 
            {
                sub += 10;
                carry = 1;
            } 
            else 
            {
                carry = 0;
            }
            result[j] = sub.toString();
        }
        // Remaining carry hadling in case the a - b & a < b , a, b\in\mathbb{N}
        if (carry && number.length > result.length) 
        {
            let sub = Number(number[number.length - result.length - 1]) - carry;
            if (sub < 0) 
            {
                sub += 10;
            }
            result.unshift(sub.toString());
        }
    }

    // The case of the leading 0 at the begining in case the result is not 0
    while (result[0] === '0' && result.length > 1) 
    {
        result.shift();
    }

    return result.join('');
}
  
/**
 * Multiplies multiple numbers together.
 *
 * @param {string} string - A string of numbers separated by space.
 * @returns {string} - The product operation of the numbers as a string.
 */
function multiply(string: string): string 
{
    const numbers = string.split(' ');

    let result = '1';
    for (let number of numbers) 
    {
        // column-wise multiplication
        result = multiplyStrings(result, number);
    }
  
    return result;
}
 
/**
 * Helper function to multiply two strings.
 *
 * @param {string} a - The first string to multiply.
 * @param {string} b - The second string to multiply.
 * @returns {string} - The product of the two strings as a string.
 */
function multiplyStrings(a: string, b: string): string 
{
    const lenA = a.length;
    const lenB = b.length;
    const result = Array(lenA + lenB).fill(0);
  
    for (let i = lenA - 1; i >= 0; i--) 
    {
      const digitA = Number(a[i]);
  
      for (let j = lenB - 1; j >= 0; j--) 
      {
        const digitB = Number(b[j]);
        const product = digitA * digitB;
        const position = i + j + 1;
  
        const sum = result[position] + product;

        // store for the future sum
        result[position] = sum % 10;
        // the cary for the next column
        result[position - 1] += Math.floor(sum / 10);
      }
    }

    // leading zeros removal:
    // >= 1 consecutive zeroes 0+ at the beg. of a string ^ with a digit folowed \d

    return result.join('').replace(/^0+(?=\d)/, '');
}

/**
 * Divides the first number in the string by the rest of the numbers.
 *
 * @param {string} string - A string of numbers separated by space.
 * @returns {string} - The result of division operation as a string.
 */
function divide(string: string): string
{
    const numbers = string.split(' ');

    let result = numbers[0];
    
    // for each divizor
    for (let i = 1; i < numbers.length; i++) 
    {
        let divisor = numbers[i];
        let tempResult = '';
        let carry = 0;

        //long div digit by digit
        for (let j = 0; j < result.length; j++) 
        {
            let currNumber = Number(result[j]) + carry * 10;
            tempResult += Math.floor(currNumber / Number(divisor));
            carry = currNumber % Number(divisor);
        }

        // Leading zeros
        while (tempResult[0] === '0' && tempResult.length > 1) 
        {
            tempResult = tempResult.substring(1);
        }

        result = tempResult;
    }

    return result;
}
  
export { add, subtract, multiply, divide };
  