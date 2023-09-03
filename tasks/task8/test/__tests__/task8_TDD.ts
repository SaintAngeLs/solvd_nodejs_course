import { AsyncOperationManager } from './../../task/task8'; 

describe('AsyncOperationManager', () => {

  let manager: AsyncOperationManager;

  beforeEach(() => {
    manager = new AsyncOperationManager();
  });

  test('should execute simulateAsyncOperation with a given delay', async () => {
    const delay = 1000; 
    const result = await manager.simulateAsyncOperation(delay);
    expect(result).toBe(`Async operation completed after ${delay}ms and microtask executed.`);
  });

  test('should execute simulateAsyncOperation with a given delay', async () => {
    const delay = 100; 
    const result = await manager.simulateAsyncOperation(delay);
    expect(result).toBe(`Async operation completed after ${delay}ms and microtask executed.`);
  });
  test('should execute simulateAsyncOperation with a given delay', async () => {
    const delay = 10; 
    const result = await manager.simulateAsyncOperation(delay);
    expect(result).toBe(`Async operation completed after ${delay}ms and microtask executed.`);
  });

  test('should execute scheduleImmediate', async () => {
    const result = await manager.scheduleImmediate();
    expect(result).toBe('Immediate task executed.');
  });

  test('should execute microtasks before setImmediate', async () => {
    const result1 = await manager.simulateAsyncOperation(100);
    const result2 = await manager.scheduleImmediate();
    expect(result1).toBe(`Async operation completed after 100ms and microtask executed.`);
    expect(result2).toBe('Immediate task executed.');
  });

  test('should execute in correct sequence when simulateAsyncOperation and scheduleImmediate are mixed', async () => {
    const delays = [100, 50];
    const [result1, result2, result3] = await Promise.all([
      manager.simulateAsyncOperation(delays[0]),
      manager.simulateAsyncOperation(delays[1]),
      manager.scheduleImmediate()
    ]);

    expect(result1).toBe(`Async operation completed after ${delays[0]}ms and microtask executed.`);
    expect(result2).toBe(`Async operation completed after ${delays[1]}ms and microtask executed.`);
    expect(result3).toBe('Immediate task executed.');
  });

});