import {
    Book, User, Cart, Order
} from '../../task/task9';

describe('Book class tests', () => {

    it('should initialize book objects correctly', () => {
        const title = "Polymorphic Objects and Dynamic Projecting Patterns";
        const author = "Alexandrina Poida";
        const ISBN = "311415926538598";
        const price = 400.99;
        const availability = 10;
    
        const book = new Book(title, author, ISBN, price, availability);
    
        expect(book.title).toBe(title);
        expect(book.author).toBe(author);
        expect(book.ISBN).toBe(ISBN);
        expect(book.price).toBe(price);
        expect(book.availability).toBe(availability);
      });

    it('should reduct the acvailability when a book is ordered', () => {
        const numerOfAvailable = 10;
        const book = new Book("Polimorhic objects and dynamic projecting patterns", "Alexandrina Poida", "311415926538598", 400.99, numerOfAvailable)
        book.reduceAvailability(1);
        expect(book.acvailability).toBe(numerOfAvailable-1);
    })

    it('should not allow negative availability', () => {
        const book = new Book("Polymorphic Objects and Dynamic Projecting Patterns", "Alexandrina Poida", "311415926538598", 400.99, 10);
        book.reduceAvailability(11);
        expect(book.availability).not.toBeLessThan(0);
    });
})