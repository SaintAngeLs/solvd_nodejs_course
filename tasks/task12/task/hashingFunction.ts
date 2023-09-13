const BIG_PRIME_1 = 15485863;  
const BIG_PRIME_2 = 32452843; 
const BIG_PRIME_3 = 49979687;

class HashHelper {
    static combineHashAndChar(hash: number, charValue: number): number {
        return (hash * BIG_PRIME_1) ^ (charValue + BIG_PRIME_2);
    }

    static bitManipulate(hash: number, charValue: number): number {
        return (hash << 5) + hash + (charValue >>> 3);
    }

    static charHashing(charValue: number, hash: number): number {
        return (charValue * BIG_PRIME_3) + (hash << 3);
    }

    static getPositive(hash: number): number {
        return Math.abs(hash);
    }
}

export function customHashFunction(key: string, tableSize: number): number {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
        let charValue = key.charCodeAt(i);
        hash = HashHelper.combineHashAndChar(hash, charValue);
        hash = HashHelper.bitManipulate(hash, charValue);
        hash ^= HashHelper.charHashing(charValue, hash);
        hash = HashHelper.getPositive(hash);
    }

    return hash % tableSize;
}


/**
 * Custom Hash Function:
 *
 * Our custom hash function makes use of three prime numbers, which help in distributing
 * hash values more uniformly over the table. This should, in theory, reduce the number of
 * collisions and improve performance.
 *
 * The hash function is constructed using three helper functions, each performing different
 * mathematical and bitwise operations on the input. Combining these techniques aims to provide
 * a robust and fairly unpredictable hashing mechanism.
 *

 */