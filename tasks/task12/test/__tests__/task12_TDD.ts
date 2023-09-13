/**
 * 
 * Test inserting multiple key-value pairs.
 * Test replacing an existing key's value.
 * Test retrieving values from a largely populated table.
 * Test deleting values from a largely populated table.
 * Test for edge cases such as empty strings.
 * Test for long strings to check for potential hash distribution issues.
 */

import { customHashFunction } from "../../task/hashingFunction";
import { EnhancedHashTable, HashTable, INITIAL_SIZE, TABLE_SIZE } from "../../task/task12";

describe('HashTable', () => {

    let hashTable: HashTable;

    beforeEach(() => {
        hashTable = new HashTable();
    });

    test('inserts multiple values and retrieves them', () => {
        hashTable.insert('name1', 'Jan');
        hashTable.insert('name2', 'Naj');
        hashTable.insert('name3', 'Ajn');

        expect(hashTable.get('name1')).toBe('Jan');
        expect(hashTable.get('name2')).toBe('Naj');
        expect(hashTable.get('name3')).toBe('Ajn');
    });

    test('replaces a key\'s value', () => {
        hashTable.insert('name', 'Jan');
        expect(hashTable.get('name')).toBe('Jan');

        hashTable.insert('name', 'Naj');
        expect(hashTable.get('name')).toBe('Naj');
    });

    test('handles large data gracefully', () => {
        for (let i = 0; i < 1000; i++) {
            hashTable.insert(`key${i}`, `value${i}`);
        }

        expect(hashTable.get('key500')).toBe('value500');
        expect(hashTable.get('key999')).toBe('value999');
    });

    test('deletes values from a largely populated table', () => {
        for (let i = 0; i < 1000; i++) {
            hashTable.insert(`key${i}`, `value${i}`);
        }

        hashTable.delete('key500');
        hashTable.delete('key600');

        expect(hashTable.get('key500')).toBeNull();
        expect(hashTable.get('key600')).toBeNull();
    });

    test('handles empty strings', () => {
        hashTable.insert('', 'Jan');
        expect(hashTable.get('')).toBe('Jan');
    });

    test('handles long strings and ensures unique hash values', () => {
        const longStr1 = 'a'.repeat(1000);
        const longStr2 = 'b'.repeat(1000);

        hashTable.insert(longStr1, 'val1');
        hashTable.insert(longStr2, 'val2');

        expect(hashTable.get(longStr1)).toBe('val1');
        expect(hashTable.get(longStr2)).toBe('val2');

        expect(customHashFunction(longStr1, TABLE_SIZE)).not.toBe(customHashFunction(longStr2, TABLE_SIZE));
    });


});


// Additional function fotr the hashing table with the resizing
describe('EnhancedHashTable', () => {
    let hashTable: EnhancedHashTable;

    beforeEach(() => {
        hashTable = new EnhancedHashTable();
    });

    test('should insert and retrieve a value', () => {
        hashTable.insert('key1', 'value1');
        expect(hashTable.get('key1')).toBe('value1');
    });

    test('should handle collisions and resize when needed', () => {
        const size = INITIAL_SIZE;
        for (let i = 0; i < size; i++) {
            hashTable.insert(`key${i}`, `value${i}`);
        }

        // Trigger resizing
        hashTable.insert('extraKey', 'extraValue');

        expect(hashTable.get('extraKey')).toBe('extraValue');
    });

    test('should iterate over entries', () => {
        hashTable.insert('key1', 'value1');
        hashTable.insert('key2', 'value2');
        const entries = [...hashTable.entries()];

        expect(entries).toEqual([
            { key: 'key1', value: 'value1' },
            { key: 'key2', value: 'value2' }
        ]);
    });
});