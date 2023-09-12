import { Stack, MinMaxStack } from '../../task/task11'; 

// Stack tests
describe('Stack', () => {
    it('should push to the stack', () => {
        const stack = new Stack<number>();
        stack.push(5);
        expect(stack.peek()).toBe(5);
    });

    it('should pop from the stack', () => {
        const stack = new Stack<number>();
        stack.push(5);
        stack.push(10);
        expect(stack.pop()).toBe(10);
        expect(stack.peek()).toBe(5);
    });

    it('should return null on pop from empty stack', () => {
        const stack = new Stack<number>();
        expect(stack.pop()).toBeNull();
    });

    it('should return null on peek from empty stack', () => {
        const stack = new Stack<number>();
        expect(stack.peek()).toBeNull();
    });
});

// MinMaxStack tests
describe('MinMaxStack', () => {
    it('should push to the stack', () => {
        const stack = new MinMaxStack<number>();
        stack.push(5);
        expect(stack.peek()).toBe(5);
    });

    it('should pop from the stack', () => {
        const stack = new MinMaxStack<number>();
        stack.push(5);
        stack.push(10);
        expect(stack.pop()).toBe(10);
        expect(stack.peek()).toBe(5);
    });

    it('should get minimum from the stack', () => {
        const stack = new MinMaxStack<number>();
        stack.push(10);
        stack.push(5);
        stack.push(20);
        expect(stack.getMin()).toBe(5);
    });

    it('should get maximum from the stack', () => {
        const stack = new MinMaxStack<number>();
        stack.push(10);
        stack.push(5);
        stack.push(20);
        expect(stack.getMax()).toBe(20);
    });

    it('should update minimum after pops', () => {
        const stack = new MinMaxStack<number>();
        stack.push(10);
        stack.push(5);
        stack.push(20);
        stack.pop();  // Remove 20
        expect(stack.getMin()).toBe(5);
        stack.pop();  // Remove 5
        expect(stack.getMin()).toBe(10);
    });

    it('should update maximum after pops', () => {
        const stack = new MinMaxStack<number>();
        stack.push(10);
        stack.push(5);
        stack.push(20);
        stack.pop();  // Remove 20
        expect(stack.getMax()).toBe(10);
        stack.pop();  // Remove 5
        expect(stack.getMax()).toBe(10);
    });

    it('should return null on pop from empty stack', () => {
        const stack = new MinMaxStack<number>();
        expect(stack.pop()).toBeNull();
    });

    it('should return null on peek from empty stack', () => {
        const stack = new MinMaxStack<number>();
        expect(stack.peek()).toBeNull();
    });

    it('should return null for getMin on empty stack', () => {
        const stack = new MinMaxStack<number>();
        expect(stack.getMin()).toBeNull();
    });

    it('should return null for getMax on empty stack', () => {
        const stack = new MinMaxStack<number>();
        expect(stack.getMax()).toBeNull();
    });
});
