const { add, subtract, multiply, divide } = require('../../task/task1_newVersion');
const { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers,} = require('../../task/task1_unstable');

describe('Mathematical Operations for the large numbers (new implementation)', () => {
  describe('add', () => {

    it('should return a string', () => {
      expect(typeof add('1 1')).toBe('string');
    });
    it('should add ones', () => {
      expect(add('1 1')).toBe('2');
    });
    it('should add positive numbers', () => {
      expect(add('5 3')).toBe('8');
    });
    it('should add three numbers', () => {
      expect(add('1 2 3')).toBe('6');
    });
    it('should add a large number to 1', () => {
      expect(add('10000000000000000000000000000000000000000000000000000000000000 1')).toBe('10000000000000000000000000000000000000000000000000000000000001');
    });
    it('should add a large number to large number', () => {
      expect(add('10000000000000000000000000000000000000000000000000000000000000 10000000000000000000000000000000000000000000000000000000000000')).toBe('20000000000000000000000000000000000000000000000000000000000000');
    });

  });

  describe('subtract', () => {

    it('should return a string', () => {
      expect(typeof add('1 1')).toBe('string');
    });
    it('should subtract ones', () => {
      expect(subtract('1 1')).toBe('0');
    });
    it('should subtract positive numbers', () => {
      expect(subtract('5 3')).toBe('2');
    });
    it('should subtract three numbers', () => {
      expect(subtract('10 2 3')).toBe('5');
    });
    it('should subtract a large number from 1', () => {
      expect(subtract('10000000000000000000000000000000000000000000000000000000000000 1')).toBe('9999999999999999999999999999999999999999999999999999999999999');
    });
    it('should subtract a large number from large number', () => {
      expect(subtract('10000000000000000000000000000000000000000000000000000000000000 10000000000000000000000000000000000000000000000000000000000000')).toBe('0');
    });

  });

  describe('multiply', () => {

    it('should return a string', () => {
      expect(typeof multiply('1 1')).toBe('string');
    });

    it('should multiply ones', () => {
      expect(multiply('1 1')).toBe('1');
    });

    it('should multiply positive numbers', () => {
      expect(multiply('5 3')).toBe('15');
    });
    it('should multiply three numbers', () => {
      expect(multiply('2 3 4')).toBe('24');
    });

    it('should multiply a large number by 1', () => {
      expect(multiply('10000000000000000000000000000000000000000000000000000000000000 1')).toBe('10000000000000000000000000000000000000000000000000000000000000');
    });
    it('should multiply a large number by large number', () => {
      expect(multiply('10000000000000000000000000000000000000000000000000000000000000 10000000000000000000000000000000000000000000000000000000000000')).toBe('100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000');
    });

  });

  describe('divide', () => {

    it('should return a string', () => {
      expect(typeof divide('1 1')).toBe('string');
    });

    it('should divide ones', () => {
      expect(divide('1 1')).toBe('1');
    });

    it('should divide positive numbers', () => {
      expect(divide('6 3')).toBe('2');
    });
    it('should divide three numbers', () => {
      expect(divide('36 6 2')).toBe('3');
    });
    it('should divide a large number to 1', () => {
      expect(divide('10000000000000000000000000000000000000000000000000000000000000 1')).toBe('10000000000000000000000000000000000000000000000000000000000000');
    });
    it('should divide a large number by large number', () => {
      expect(divide('10000000000000000000000000000000000000000000000000000000000000 10000000000000000000000000000000000000000000000000000000000000')).toBe('1');
    });
    

  });

});



describe('Mathematical Operations for the numers (unstable algorith with the conversion to Number type == old implementation)', () => {

  describe('addNumbers', () => {

    it('should return a string', () => {
      expect(typeof addNumbers('1 1')).toBe('string');
    });

    it('should add ones', () => {
      expect(addNumbers('1 1')).toBe('2');
    });

    it('should add positive numbers', () => {
      expect(addNumbers('5 3')).toBe('8');
    });
    it('should add three numbers', () => {
      expect(addNumbers('1 2 3')).toBe('6');
    });
    it('should add a large number to 1', () => {
      expect(addNumbers('1000000000000000000000000000000000000000000000000 1')).toBe('1e+48');
    });
    it('should add a large number to large number', () => {
      expect(addNumbers('10000000000000000000000000000000000000000000000000000000000000 10000000000000000000000000000000000000000000000000000000000000')).toBe('2e+61');
    });


  });

  describe('subtractNumbers', () => {

    it('should return a string', () => {
      expect(typeof subtractNumbers('1 1')).toBe('string');
    });

    it('should subtract ones', () => {
      expect(subtractNumbers('1 1')).toBe('0');
    });

    it('should subtract positive numbers', () => {
      expect(subtractNumbers('5 3')).toBe('2');
    });
    it('should subtract three numbers', () => {
      expect(subtractNumbers('10 2 3')).toBe('5');
    });
    it('should subtract a large number to 1', () => {
      expect(subtractNumbers('10000000000000000000000000000000000000000000000000000000000000 1')).toBe('1e+61');
    });
    it('should subtract a large number from large number', () => {
      expect(subtractNumbers('10000000000000000000000000000000000000000000000000000000000000 10000000000000000000000000000000000000000000000000000000000000')).toBe('0');
    });

  });

  describe('multiplyNumbers', () => {

    it('should return a string', () => {
      expect(typeof multiplyNumbers('1 1')).toBe('string');
    });

    it('should multiply ones', () => {
      expect(multiplyNumbers('1 1')).toBe('1');
    });

    it('should multiply positive numbers', () => {
      expect(multiplyNumbers('5 3')).toBe('15');
    });
    it('should multiply three numbers', () => {
      expect(multiplyNumbers('2 3 4')).toBe('24');
    });
    it('should multiply a large number to 1', () => {
      expect(multiplyNumbers('10000000000000000000000000000000000000000000000000000000000000 1')).toBe('1e+61');
    });
    it('should multiply a large number with large number', () => {
      expect(multiplyNumbers('10000000000000000000000000000000000000000000000000000000000000 10000000000000000000000000000000000000000000000000000000000000')).toBe('9.999999999999998e+121');
    });

  });

  describe('divideNumbers', () => {

    it('should return a string', () => {
      expect(typeof divideNumbers('1 1')).toBe('string');
    });

    it('should divide ones', () => {
      expect(divideNumbers('1 1')).toBe('1');
    });

    it('should divide positive numbers', () => {
      expect(divideNumbers('6 3')).toBe('2');
    });
    it('should divide three numbers', () => {
      expect(divideNumbers('36 6 2')).toBe('3');
    });
    it('should divide a large number to 1', () => {
      expect(divideNumbers('10000000000000000000000000000000000000000000000000000000000000 1')).toBe('1e+61');
    });
    it('should divide a large number by large number', () => {
      expect(divideNumbers('10000000000000000000000000000000000000000000000000000000000000 10000000000000000000000000000000000000000000000000000000000000')).toBe('1');
    });
    


  });
});