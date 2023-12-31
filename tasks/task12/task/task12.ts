import { customHashFunction } from "./hashingFunction";


class LinkedListNode {
    key: string;
    value: any;
    next: LinkedListNode | null = null;

    constructor(key: string, value: any) 
    {
        this.key = key;
        this.value = value;
    }
}

export class LinkedList {
    head: LinkedListNode | null = null;


    /**
     * Inserts a key-value pair into the linked list.
     * If the key already exists, it updates the value.
     */
    insert(key: string, value: any) 
    {
        const newNode = new LinkedListNode(key, value);
    
        // If list is empty
        if (!this.head) 
        {
            this.head = newNode;
            return;
        }
        
        // Check if the key exists in the linked list
        let current = this.head;
        while (current) {
            if (current.key === key) 
            {
                current.value = value;  // Update the existing value
                return;
            }
            
            if (!current.next) 
            {
                current.next = newNode;  // Append new node to the end of list
                return;
            }
            
            current = current.next;
        }
    }

    /**
     * Retrieves a value associated with the given key in the linked list.
     * Returns null if the key does not exist.
     */
    get(key: string): any 
    {
        let current = this.head;
        while (current) 
        {
            if (current.key === key) return current.value;
            current = current.next;
        }
        return null;
    }

    /**
     * * Deletes a node with the given key from the linked list
     */
    delete(key: string) 
    {
        if (!this.head) return;

        if (this.head.key === key) 
        {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.key !== key) 
        {
            current = current.next;
        }

        if (current.next) current.next = current.next.next;
    }
}


// hash table class
export const TABLE_SIZE = 137;

/**
 *  An Enhanced Hash Table with dynamic resizing.
 * This table resizes itself based on the load factor, ensuring efficient operations even as data grows.
 */
export class HashTable {
    table: Array<LinkedList | null>;

    constructor() {
        this.table = new Array(TABLE_SIZE).fill(null);
    }

    /**
     *  Inserts a key-value pair into the table.
     * 
     *  
     */
    insert(key: string, value: any) {
        const idx = customHashFunction(key, TABLE_SIZE);
        if (!this.table[idx]) 
        {
            this.table[idx] = new LinkedList();
        }
        this.table[idx]!.insert(key, value);  // ! is used as we know at this point table[idx] is not null.
    }

    get(key: string): any {
        const idx = customHashFunction(key, TABLE_SIZE);
        const linkedList = this.table[idx];
        return linkedList ? linkedList.get(key) : null;
    }

    delete(key: string) {
        const idx = customHashFunction(key, TABLE_SIZE);
        const linkedList = this.table[idx];
        if (linkedList) 
        {
            linkedList.delete(key);
        }
    }
}

/**
 * Hash Table Analysis:
 * The hash table uses separate chaining as a collision resolution technique. Separate chaining
 * involves using a linked list for each slot of the hash table to hold the key-value pairs.
 * This approach makes the table more resilient to collisions but adds overhead due to the linked list.
 *
 * Performance Analysis:
 * 1. Insertion:
 *    - Best Case: O(1) - If there's no collision at the computed hash.
 *    - Worst Case: O(n) - If all keys produce the same hash and get appended to the end of the same linked list.
 *    - Average Case(amortized complexity): O(1) given a good distribution of keys.
 *
 * 2. Retrieval:
 *    - Best Case: O(1) - If the key is at the start of the linked list or no collision.
 *    - Worst Case: O(n) - If the key is at the end of a long linked list.
 *    - Avarage Case(amortized complexity): O(1) with a well-distributed hash function.
 *
 * 3. Deletion:
 *    - Best Case: O(1) - If the key is at the start of the linked list or no collision.
 *    - Worst Case: O(n) - If the key is at the end of a long linked list.
 *    - Average Case(amortized complexity): O(1) with a well-distributed hash function.
 *
 * Trade-offs:
 * - Using the separate chaining approach ensures that our hash table can handle collisions gracefully,
 *   but there's added memory overhead due to the linked list.
 * - Our hash function is more complex than simple hash functions, which might add a slight overhead
 *   but helps in producing a more uniform distribution of keys.
 * - Resizing the hash table isn't implemented. If the table grows large, performance could degrade due to long linked lists.
 */


// The BONUS section with the dynamic table available

export const INITIAL_SIZE = TABLE_SIZE;
const LOAD_FACTOR = 0.7;

export class EnhancedHashTable {
    table: Array<LinkedList | null>;
    count: number = 0;

    constructor(initialSize: number = INITIAL_SIZE) 
    {
        this.table = new Array(initialSize).fill(null);
    }

    /**
     * Inserts a key-value pair into the table.
     * If the table's load factor exceeds a threshold, it resizes itself. 
     */
    insert(key: string, value: any) 
    {
        if (this.count / this.table.length > LOAD_FACTOR) 
        {
            this.resize();
        }

        const idx = this.hash(key);
        if (!this.table[idx]) 
        {
            this.table[idx] = new LinkedList();
        }
        if (!this.table[idx]!.get(key))
        {
            this.count++;
        }
        this.table[idx]!.insert(key, value);
    }

    get(key: string): any 
    {
        const idx = this.hash(key);
        const linkedList = this.table[idx];
        return linkedList ? linkedList.get(key) : null;
    }

    delete(key: string) 
    {
        const idx = this.hash(key);
        const linkedList = this.table[idx];
        if (linkedList && linkedList.get(key) !== null) 
        {
            linkedList.delete(key);
            this.count--;
        }
    }
    /**
     * Generator function to iterate over all key-value pairs in the hash table.
     * 
     * This function leverages the generator pattern to provide a convenient way
     * to iterate through all key-value pairs stored in the hash table without
     * having to load all of them into memory at once. This can be particularly
     * useful when working with large datasets.
     */

    *entries() 
    {
        for (let i = 0; i < this.table.length; i++) 
        {
            const linkedList = this.table[i];
            if (linkedList) 
            {
                let node = linkedList.head;
                while (node) 
                {
                    yield { key: node.key, value: node.value };
                    node = node.next;
                }
            }
        }
    }

    /**
     * Some additional function overrride may be not suffisienc but in case of the modularity 
     */
    hash(key: string): number 
    {
        // Using the customHashFunction for hashing.
        return customHashFunction(key, this.table.length);
    }
    /**
     * Doubles the size of the table and rehashes all the key-value pairs.
     */
    private resize() {
        const newTable: Array<LinkedList | null> = new Array(this.table.length * 2).fill(null);
        const oldTable = this.table;
        this.table = newTable;
        this.count = 0;

        for (let linkedList of oldTable) 
        {
            if (linkedList) 
            {
                let node = linkedList.head;
                while (node) 
                {
                    this.insert(node.key, node.value);
                    node = node.next;
                }
            }
        }
    }
}
