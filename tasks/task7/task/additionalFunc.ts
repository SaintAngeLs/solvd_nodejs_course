export function measureTime(fn: (arr: number[]) => number[], arr: number[]): number {
    const start = performance.now();
    // avoid mutatance the original array
    fn([...arr]); 
    const end = performance.now();
    return end - start;
}