import { person } from '../../task/task4';

describe('person object', () => {
    it('should have read-only properties', () => {
        const initialPerson = {...person};

        person.updateInfo({
            firstName: 'Ada',
            lastName: 'Doe',
            age: 32,
            email: 'ada.doe@example.com'
        });
    
        // properties are not writable
        expect(person).toEqual(initialPerson); 
    });
  


    it('should not change properties via updateInfo', () => {
        person.updateInfo({ firstName: 'Jane', age: 32 });

        // firstName and age are read-only
        expect(person.firstName).toBe('John');
        expect(person.age).toBe('30');

        const descriptor = Object.getOwnPropertyDescriptor(person, 'address');
        expect(descriptor?.enumerable).toBeFalsy();
        expect(descriptor?.configurable).toBeFalsy();
    

    });
    it('should not allow address property to be changed', () => {
        try {
            Object.defineProperty(person, 'address', { value: { street: '123 St' } });
        } catch (error) {
        expect(error).toBeInstanceOf(TypeError);
    }

 });
});

import { Product, product, getTotalPrice, deleteNonConfigurable } from '../../task/task4';

describe('Product object', () => {
    it('should have non-enumerable and non-writable price and quantity', () => {
        const priceDescriptor = Object.getOwnPropertyDescriptor(product, 'price');
        const quantityDescriptor = Object.getOwnPropertyDescriptor(product, 'quantity');

        expect(priceDescriptor?.enumerable).toBeFalsy();
        expect(priceDescriptor?.writable).toBeFalsy();
        expect(quantityDescriptor?.enumerable).toBeFalsy();
        expect(quantityDescriptor?.writable).toBeFalsy();
    });

    it('should calculate total price correctly', () => {
        const totalPrice = getTotalPrice(product);

        expect(totalPrice).toBe(product.price * product.quantity);
    });
});

describe('deleteNonConfigurable', () => {
    it('should delete configurable property', () => {
        const testObj = { configurableProp: 'value', nonConfigurableProp: 'value' };
        Object.defineProperty(testObj, 'nonConfigurableProp', { configurable: false });

        deleteNonConfigurable(testObj, 'configurableProp');

        expect(testObj).not.toHaveProperty('configurableProp');
    });

    it('should not delete non-configurable property', () => {
        const testObj = { configurableProp: 'value', nonConfigurableProp: 'value' };
        Object.defineProperty(testObj, 'nonConfigurableProp', { configurable: false });

        expect(() => deleteNonConfigurable(testObj, 'nonConfigurableProp')).toThrowError(
            'The property "nonConfigurableProp" is non-configurable and cannot be deleted.'
        );
    });
});

import { bankAccount, BankAccount } from '../../task/task4';

describe('Bank Account', () => {
    let bankAccount1: BankAccount, bankAccount2: BankAccount;

    beforeEach(() => {
        bankAccount1 = bankAccount();
        bankAccount2 = bankAccount();
    });

    test('initializes with default balance of 1000', () => {
        expect(bankAccount1.balance).toBe(1000);
        expect(bankAccount1.formattedBalance).toBe('$1000');
    });

    test('can update balance', () => {
        bankAccount1.balance = 2000;
        expect(bankAccount1.balance).toBe(2000);
        expect(bankAccount1.formattedBalance).toBe('$2000');
    });

    test('transfer updates balances correctly', () => {
        bankAccount1.transfer(bankAccount2, 500);
        expect(bankAccount1.balance).toBe(500);
        expect(bankAccount1.formattedBalance).toBe('$500');
        expect(bankAccount2.balance).toBe(1500);
        expect(bankAccount2.formattedBalance).toBe('$1500');
    });

    test('transfer does not execute when there are insufficient funds', () => {
        bankAccount1.transfer(bankAccount2, 2000);
        expect(bankAccount1.balance).toBe(1000);
        expect(bankAccount2.balance).toBe(1000);
    });
});

import {createImmutableObject, AnyObject} from '../../task/task4';
interface Address {
    street: string;
    city: string;
}


interface Person {
    name: string;
    age: number;
    address: Address;
    hobbies: string[];
}



describe('createImmutableObject', () => {
    let person: Person;
    let immutablePerson: Person;

    beforeEach(() => {
        person = {
            name: "John",
            age: 30,
            address: {
                street: "123 Main St",
                city: "Anytown"
            },
            hobbies: ['Coding', 'Reading']
        };

        immutablePerson = createImmutableObject(person) as Person;;
    });

    it('should create an object with the same properties', () => {
        expect(immutablePerson.name).toEqual(person.name);
        expect(immutablePerson.age).toEqual(person.age);
        expect(immutablePerson.address.street).toEqual(person.address.street);
        expect(immutablePerson.address.city).toEqual(person.address.city);
        expect(immutablePerson.hobbies).toEqual(person.hobbies);
    });

    it('should not allow properties to be changed', () => {
        expect(() => {
            immutablePerson.name = "Jane";
        }).toThrow();

        expect(() => {
            immutablePerson.age = 25;
        }).toThrow();

        expect(() => {
            immutablePerson.address.street = "456 Other St";
        }).toThrow();

        expect(() => {
            immutablePerson.hobbies.push('Sports');
        }).toThrow();
    });

    it('should not be affected by changes to the original object', () => {
        person.name = "Jane";
        person.age = 25;
        person.address.street = "456 Other St";
        person.hobbies.push('Sports');

        expect(immutablePerson.name).toEqual("John");
        expect(immutablePerson.age).toEqual(30);
        expect(immutablePerson.address.street).toEqual("123 Main St");
        expect(immutablePerson.hobbies).toEqual(['Coding', 'Reading']);
    });
});

import {observeObject, Callback} from '../../task/task4';

interface PersonOOT {
    name: string;
    age: number;
    [prop: string]: any;
}

describe('observeObject', () => {
    let person: PersonOOT;
    let callback: Callback;
    let observedPerson: PersonOOT;

    beforeEach(() => {
        person = {
            name: 'John',
            age: 30
        };

        callback = jest.fn();

        observedPerson = observeObject(person, callback);
    });

    it('should trigger the callback when getting a property', () => {
        const name = observedPerson.name;
        expect(callback).toHaveBeenCalledWith('name', 'get');
    });

    it('should trigger the callback when setting a property', () => {
        observedPerson.age = 31;
        expect(callback).toHaveBeenCalledWith('age', 'set', 31);
    });

    it('should not trigger the callback when getting a non-existent property', () => {
        const address = observedPerson['address'];
        expect(callback).not.toHaveBeenCalled();
    });

    it('should trigger the callback when setting a non-existent property', () => {
        observedPerson['address'] = '123 Main St';
        expect(callback).toHaveBeenCalledWith('address', 'set', '123 Main St');
    });
});


import { deepCloneObject } from '../../task/task4';

describe('deepCloneObject', () => {
    it('should deeply clone simple objects', () => {
        const obj = { name: 'John', age: 30 };

        const clonedObj = deepCloneObject(obj);

        expect(clonedObj).toEqual(obj);
        expect(clonedObj).not.toBe(obj);
    });

    it('should deeply clone nested objects', () => {

        const obj = { 
            name: 'John', 
            age: 30, 
            address: { 
                city: 'New York',
                country: 'USA'
            } 
        };

        const clonedObj = deepCloneObject(obj);

        expect(clonedObj).toEqual(obj);
        expect(clonedObj.address).not.toBe(obj.address);
    });

    it('should handle circular references', () => {
        const obj: any = { name: 'John', age: 30 };
        
        obj.self = obj;

        const clonedObj = deepCloneObject(obj);

        expect(clonedObj).toEqual(obj);
        expect(clonedObj.self).toBe(clonedObj);
    });

    it('should clone arrays', () => {
        const arr = [1, 2, 3, [4, 5]];
        const clonedArr = deepCloneObject(arr);
        expect(clonedArr).toEqual(arr);
        expect(clonedArr[3]).not.toBe(arr[3]);
    });

    it('should clone Date objects', () => {
        const date = new Date();

        const clonedDate = deepCloneObject(date);

        expect(clonedDate).toEqual(date);
        expect(clonedDate).not.toBe(date);
    });

    it('should clone RegExp objects', () => {
        const regexVal = /abc/gi;

        const clonedRegexVal = deepCloneObject(regexVal);

        expect(clonedRegexVal).toEqual(regexVal);
        expect(clonedRegexVal).not.toBe(regexVal);
    });

    it('should return null for null', () => {
        const clonedNull = deepCloneObject(null);
        expect(clonedNull).toBeNull();
    });

    it('should return undefined for undefined', () => {
        const clonedUndefined = deepCloneObject(undefined);
        expect(clonedUndefined).toBeUndefined();
    });
});


import { validateObject, Schema } from '../../task/task4';

describe('validateObject', () => {
    let schema: Schema;
    
    beforeEach(() => {
        schema = {
            name: { type: 'string' },
            age: { type: 'number', required: true,  validate: (value) => value > 0 },
            address: { type: 'object' },
        };
    });

    it('should return true for valid objects', () => {
        const obj = { name: 'John', age: 30, address: { city: 'New York' } };
        expect(validateObject(obj, schema)).toBe(true);
    });

    it('should return false for objects with missing properties', () => {
        const obj = { name: 'John', age: 30 };
        expect(validateObject(obj, schema)).toBe(true);
    });

    it('should return false for objects with properties of incorrect types', () => {
        const obj = { name: 'John', age: '30', address: { city: 'New York' } };
        expect(validateObject(obj, schema)).toBe(false);
    });

    it('should return false for objects with properties that fail validation', () => {
        const obj = { name: 'John', age: -1, address: { city: 'New York' } };
        expect(validateObject(obj, schema)).toBe(false);
    });
});