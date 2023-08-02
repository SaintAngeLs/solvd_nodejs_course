/**
 * Task 1: Object Property Manipulation
 * 
Create an object called person with the following properties and values:firstName: "John"

lastName: "Doe"

age: 30

email: "john.doe@example.com"

Use property descriptors to make all properties of the person object read-only and non-writable, so their values cannot be changed directly.


Implement a method called updateInfo on the person object that takes a new info object as an argument. The info object should contain updated values for any of the properties (e.g., { firstName: "Jane", age: 32 }). Ensure that this method adheres to the read-only property descriptor set earlier.


Create a new property called address on the person object with an initial value of an empty object. Make this property non-enumerable and non-configurable.

 */


export type PersonInfo = {
    [key: string]: string | number | undefined;
    firstName?: string;
    lastName: string;
    age?: number;
    email?: string;
}

export let person: {[key: string]: any} & {updatedInfo?: (info: PersonInfo) => void} = {
    firstName: "John",
    lastName: "Joe",
    age: "30",
    email: "john.doe@example.com",

    updateInfo: function(newInfo: PersonInfo)
    {
        for(let key in newInfo)
        {
            if (this.hasOwnProperty(key) && !Object.getOwnPropertyDescriptor(this, key)?.writable) 
            {
                continue;
            }
            this[key] = newInfo[key];
        }
    }
}

Object.defineProperty(person, "firstName", {writable: false});
Object.defineProperty(person, "lastName", { writable: false });
Object.defineProperty(person, "age", { writable: false });
Object.defineProperty(person, "email", { writable: false });

/**
 * 
 * @param newInfo  person object that takes a new info object
 */


Object.defineProperty(person, "address", {
    value: {},
    enumerable: false,
    configurable: false
});

