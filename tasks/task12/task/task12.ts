import { customHashFunction } from "./hashingFunction";


class LinkedListNode {
    key: string;
    value: any;
    next: LinkedListNode | null = null;

    constructor(key: string, value: any) {
        this.key = key;
        this.value = value;
    }
}

export class LinkedList {
    head: LinkedListNode | null = null;

    insert(key: string, value: any) {
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

    get(key: string): any {
        let current = this.head;
        while (current) 
        {
            if (current.key === key) return current.value;
            current = current.next;
        }
        return null;
    }

    delete(key: string) {
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

export class HashTable {
    table: Array<LinkedList | null>;

    constructor() {
        this.table = new Array(TABLE_SIZE).fill(null);
    }

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
