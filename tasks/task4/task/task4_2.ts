/**
 * Task 2: Object Property Enumeration and Deletion


Create a new object called product with the following properties and 
values:name: "Laptop"

price: 1000

quantity: 5
Use property descriptors to make the price and quantity properties non-enumerable and non-writable.

Implement a function called getTotalPrice that takes the product object as an argument and returns the total price (calculated as price * quantity). Ensure that the function accesses the non-enumerable properties directly using the Object.getOwnPropertyDescriptor method.


Implement a function called deleteNonConfigurable that takes an object and a property name as arguments. The function should delete the specified property from the object if it exists. If the property is non-configurable, throw an error with an appropriate message.
 */

export type Product = {
    [key: string]: string | number;
    name: string,
    price: number,
    quantity: number
};
  
export let product: Product = {
    name: "Laptop",
    price: 1000,
    quantity: 5
};
  
Object.defineProperty(product, "price", { enumerable: false, 
                                            writable: false });
Object.defineProperty(product, "quantity", { enumerable: false, 
                                               writable: false });
  
export function getTotalPrice(product: Product) 
{
    const priceDescriptor = Object.getOwnPropertyDescriptor(product, 'price') as {value: number};
    const quantityDescriptor = Object.getOwnPropertyDescriptor(product, 'quantity')  as {value: number};

    return priceDescriptor?.value! * quantityDescriptor?.value!;
}

export function deleteNonConfigurable(obj: {[key: string]: any}, propName: string) 
{
    if (!obj.hasOwnProperty(propName)) 
    {
        return;
    }

    let descriptor = Object.getOwnPropertyDescriptor(obj, propName);

    if (!descriptor?.configurable) 
    {
        throw new Error(`The property "${propName}" is non-configurable and cannot be deleted.`);
    } 

    delete obj[propName];
}
