import { getResult } from '../../some_file';

describe('Currency Converter - getResult function', () => {

  it('should return correct value for input 0', () => {
    const result = getResult(0);
    expect(result).toBe('0');
  });

  it('should return correct value for input 1', () => {
    const result = getResult(1);
    expect(result).toBe('59682f00');
  });

  it('should return correct value for input 10600.47', () => {
    const result = getResult(10600.47);
    expect(result).toBe('e762bdf8a40');
  });
});
