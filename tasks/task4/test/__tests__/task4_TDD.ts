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
  
  });

  it('should not change properties via updateInfo', () => {
    person.updateInfo({ firstName: 'Jane', age: 32 });

    // firstName and age should not change, they're read-only
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