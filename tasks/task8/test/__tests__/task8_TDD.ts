import { AsyncOperationManager } from './../../task/task8'; 

describe('AsyncOperationManager', () => {

  let manager: AsyncOperationManager;

  beforeEach(() => {
    manager = new AsyncOperationManager();
  });

  test('should execute simulateAsyncOperation with a given delay', (done) => {
    const delay = 1000;
    manager.simulateAsyncOperation(delay, (result) => {
      expect(result).toBe(`Async operation completed after ${delay}ms and microtask executed.`);
      done();
    });
  });

 
  test('should execute simulateAsyncOperation with a given delay', (done) => {
    const delay = 10; 
    manager.simulateAsyncOperation(delay, (result) => {
      expect(result).toBe(`Async operation completed after ${delay}ms and microtask executed.`);
      done();
    });
  });

  test('should execute scheduleImmediate', (done) => {
    manager.scheduleImmediate((result) => {
      expect(result).toBe('Immediate task executed.');
      done();
    });
  });

  test('the case in which execute microtasks before setImmediate', (done) => {
    let completedMicrotask = false;
    let completedImmediate = false;

    manager.simulateAsyncOperation(100, (result) => {
      completedMicrotask = true;
      expect(result).toBe(`Async operation completed after 100ms and microtask executed.`);
      if(completedImmediate) 
        done();
        
    })

    manager.scheduleImmediate((result) => {
      completedImmediate = true;
      expect(result).toBe('Immediate task executed.')
      if (completedMicrotask)
        done();
    })

  });

  test('should execute in correct sequence when simulateAsyncOperation and scheduleImmediate are mixed', (done) => {
    const delays_set = [100, 50];
    
    let completedCount = 0;

    function checkCompletionStatus()
    {
      completedCount++;
      if(completedCount == 3)
      {
        done();
      }
    }

    manager.simulateAsyncOperation(delays_set[0], (result) => {
      expect(result).toBe(`Async operation completed after 100ms and microtask executed.`);
      checkCompletionStatus();
    })

    manager.simulateAsyncOperation(delays_set[1], (result) => {
      expect(result).toBe(`Async operation completed after 50ms and microtask executed.`);
      checkCompletionStatus();
    })

    manager.scheduleImmediate((result) => {
      expect(result).toBe('Immediate task executed.');
      checkCompletionStatus();
    })
  });
 

});