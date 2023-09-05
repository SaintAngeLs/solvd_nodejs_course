import {
    Book, User, Cart, Order
} from '../../task/task9';

describe('Book class tests', () => {

    it('should initialize book objects correctly', () => {
        const bookName = "Polymorphic Objects and Dynamic Projecting Patterns";
        const bookAuthor = "Alexandrina Poida";
        const bookId = "311415926538598";
        const bookPrice = 400.99;
        const availability = 10;
    
        const book = new Book(bookName, bookAuthor, bookId, bookPrice, availability);
    
        expect(book.title).toBe(bookName);
        expect(book.author).toBe(bookAuthor);
        expect(book.ISBN).toBe(bookId);
        expect(book.price).toBe(bookPrice);
        expect(book.availability).toBe(availability);
      });

    it('should reduct the acvailability when a book is ordered', () => {
        const numerOfAvailable = 10;
        const bookName = "Polimorhic objects and dynamic projecting patterns";
        const bookAuthor = "Alexandrina Poida";
        const bookId = "311415926538598";
        const bookPrice = 400.99;
        const book = new Book(bookName, bookAuthor, bookId, bookPrice, numerOfAvailable);
        book.reduceAvailability(1);
        expect(book.availability).toBe(numerOfAvailable-1);
    })

    it('should not allow negative availability', () => {
        const book = new Book("Polymorphic Objects and Dynamic Projecting Patterns", "Alexandrina Poida", "311415926538598", 400.99, 10);
        book.reduceAvailability(11);
        expect(book.availability).not.toBeLessThan(0);
    });
})

describe('User class tests', () => {
    it('should correctly store user information', () => {
        const someUserName = "Alexandrina";
        const someuserEmail = "alexandrina@email.com";
        const someUserId = "1";
        const user = new User(someUserName, someuserEmail, someUserId);
        expect(user.name).toBe(someUserName);
        expect(user.email).toBe(someuserEmail);
        expect(user.userID).toBe(someUserId);

    });

    it('should correctly store user information', () => {
        const someUserName = "Michael";
        const someuserEmail = "michael@email.com";
        const someUserId = "2";
        const user = new User(someUserName, someuserEmail, someUserId);
        expect(user.name).toBe(someUserName);
        expect(user.email).toBe(someuserEmail);
        expect(user.userID).toBe(someUserId);
    });
 });



describe('Cart class tests', () => {
    it('should correctly add books and calculate the total price', () => {

        const numerOfAvailable = 10;
        const bookName = "Polimorhic objects and dynamic projecting patterns";
        const bookAuthor = "Alexandrina Poida";
        const bookId = "311415926538598";
        const bookPrice = 400.99;

        const book = new Book(bookName, bookAuthor, bookId, bookPrice, numerOfAvailable)

        const cart = new Cart();

        cart.addBook(book, 2);
  
        expect(cart.calculateTotalPrice()).toBe(bookPrice*2);
        expect(book.availability).toBe(numerOfAvailable - 2);
    });
  
    it('should correctly remove books from the cart', () => {
        const numerOfAvailable = 10;
        const bookName = "Polimorhic objects and dynamic projecting patterns";
        const bookAuthor = "Alexandrina Poida";
        const bookId = "311415926538598";
        const bookPrice = 400.99;

        const book = new Book(bookName, bookAuthor, bookId, bookPrice, numerOfAvailable);

        const cart = new Cart();
        cart.addBook(book, 1);
        cart.removeBook(book);
  
        expect(cart.books.length).toBe(0);
    });
});



describe('Order class tests', () => {
    it('should correctly create an order and get the total price', () => {
    
        const someUserName = "Michael";
        const someuserEmail = "michael@email.com";
        const someUserId = "2";

        const user = new User(someUserName, someuserEmail, someUserId);


        const numerOfAvailable = 10;
        const bookName = "Polimorhic objects and dynamic projecting patterns";
        const bookAuthor = "Alexandrina Poida";
        const bookId = "311415926538598";
        const bookPrice = 400.99;

        const book = new Book(bookName, bookAuthor, bookId, bookPrice, numerOfAvailable);

        const cart = new Cart();
        cart.addBook(book, 1);
  
        const order = new Order(user, cart);
  
        expect(order.getTotalPrice()).toBe(bookPrice);
    });
  });
  