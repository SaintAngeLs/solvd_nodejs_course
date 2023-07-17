/**
 * @brief Generates random test cases for mathematical operations.
 * @returns {Object[]} - An array of random test cases.
 */
export function generateRandomTests() {
    const randomTests = [];
  
    for (let i = 0; i < 50; i++) 
    {
      const num1 = generateHugeNumber();
      const num2 = generateHugeNumber();
  
      randomTests.push({
        input: `${num1} ${num2}`,
        expectedAddition: performAddition(num1, num2),
        expectedSubtraction: performSubtraction(num1, num2),
        expectedMultiplication: performMultiplication(num1, num2),
        expectedDivision: performDivision(num1, num2),
      });
    }
  
    return randomTests;
}


/**
 * @brief Generates a huge number with a random number of digits.
 * @returns {string} - The generated huge number as a string.
 */
function generateHugeNumber() {
  const exponent = getRandomInt(300) + 1;
  const digits = Array.from({ length: exponent }, () => getRandomInt(10));

  return digits.join('');
}


/**
 * @brief Performs addition using the addBigInt function.
 * @param {string} num1 - The first number to add.
 * @param {string} num2 - The second number to add.
 * @returns {string} - The result of addition as a string.
 */
function performAddition(num1, num2) {
  return addBigInt(num1, num2).toString();
}
  

/**
 * @brief Performs subtraction using the subtractBigInt function.
 * @param {string} num1 - The number to subtract from.
 * @param {string} num2 - The number to subtract.
 * @returns {string} - The result of subtraction as a string.
 */
function performSubtraction(num1, num2) {
  return subtractBigInt(num1, num2).toString();
}


/**
 * @brief Performs multiplication using the multiplyBigInt function.
 * @param {string} num1 - The first number to multiply.
 * @param {string} num2 - The second number to multiply.
 * @returns {string} - The result of multiplication as a string.
 */
function performMultiplication(num1, num2) {
  return multiplyBigInt(num1, num2).toString();
}


/**
 * @brief Performs division using the divideBigInt function.
 * @param {string} num1 - The dividend.
 * @param {string} num2 - The divisor.
 * @returns {string} - The result of division as a string.
 */
function performDivision(num1, num2) {
  return divideBigInt(num1, num2).toString();
}


/**
 * @brief Adds two BigInt numbers.
 * @param {string} a - The first number to add.
 * @param {string} b - The second number to add.
 * @returns {BigInt} - The sum of the two numbers as a BigInt.
 */
function addBigInt(a, b) {
  const num1 = BigInt(a);
  const num2 = BigInt(b);

  return num1 + num2;
}


/**
 * @brief Subtracts two BigInt numbers.
 * @param {string} a - The number to subtract from.
 * @param {string} b - The number to subtract.
 * @returns {BigInt} - The difference of the two numbers as a BigInt.
 */
function subtractBigInt(a, b) {
  const num1 = BigInt(a);
  const num2 = BigInt(b);

  return num1 - num2;
}


/**
 * @brief Multiplies two BigInt numbers.
 * @param {string} a - The first number to multiply.
 * @param {string} b - The second number to multiply.
 * @returns {BigInt} - The product of the two numbers as a BigInt.
 */
function multiplyBigInt(a, b) {
  const num1 = BigInt(a);
  const num2 = BigInt(b);

  return num1 * num2;
}


/**
 * @brief Divides two BigInt numbers.
 * @param {string} a - The dividend.
 * @param {string} b - The divisor.
 * @returns {BigInt} - The result of division as a BigInt.
 */
function divideBigInt(a, b) {
  const num1 = BigInt(a);
  const num2 = BigInt(b);

  return num1 / num2;
}


/**
 * @brief Generates a random integer between 0 and max (exclusive).
 * @param {number} max - The upper bound (exclusive) for the random integer.
 * @returns {number} - The generated random integer.
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
