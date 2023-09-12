import {
    Book, User, Cart, Order, searchBooks, Payment, booksDB, usersDB, NonFictionBook, FictionBook 
} from '../../task/task10';

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


// BONUS TESTS:


  
describe('Extended Features', () => {

    beforeEach(() => {
        // Clear the database and repopulate it before each test
        booksDB.length = 0;
        usersDB.length = 0;

        const bookName = "Polymorphic Objects and Dynamic Projecting Patterns";
        const bookAuthor = "Alexandrina Poida";
        const bookId = "311415926538598";
        const bookPrice = 400.99;
        const availability = 10;

        const book1 = new Book(bookName, bookAuthor, bookId, bookPrice, availability);

        const bookName2 = "Unordered subspaces of differencial systems solutions";
        const bookAuthor2 = "Andrii Voznesenskyi";
        const bookId2 = "895835629514113";
        const bookPrice2 = 300.99;
        const availability2 = 10;

        const book2= new Book(bookName2, bookAuthor2, bookId2, bookPrice2, availability2);

        booksDB.push(book1);

        booksDB.push(book2);


        const someUserName = "Michael";
        const someuserEmail = "michael@email.com";
        const someUserId = "2";
        const user = new User(someUserName, someuserEmail, someUserId);

        usersDB.push(user);
    });

    it('should search books correctly', () => {
        const searchResults = searchBooks("differencial");
        expect(searchResults.length).toBe(1);
        expect(searchResults[0].title).toBe("Unordered subspaces of differencial systems solutions");
    });

    it('should apply discount correctly', () => {
        const cart = new Cart();
        cart.addBook(booksDB[0], 1);
        cart.applyDiscount('FunkcjaHOLOMORFICZNA');
        expect(cart.calculateTotalPrice()).toBeCloseTo(400.99 * 0.9);
    });

    it('should handle payment correctly', () => {
        const user = new User("Pawel Keller", "keller@email.com", "3");
        const cart = new Cart();
        cart.addBook(booksDB[0], 1);
        const order = new Order(user, cart);
        
        const paymentStatus = Payment.processPayment(user, cart.calculateTotalPrice());
        
        expect(paymentStatus).toBe(true);
    });

    it('should complete order correctly', () => {
        const user = new User("Keller Pawel", "keller@email.com", "3");
        const cart = new Cart();
        cart.addBook(booksDB[0], 1);
        const order = new Order(user, cart);
        
        const isOrderComplete = order.completeOrder();
        
        expect(isOrderComplete).toBe(true);
        expect(order.isPaid).toBe(true);
    });
});

// TODO: Polymorphism demonstration tests

describe('Polymorphism of the Book Class:', () => {
    it('Should treat the Fiction and NonFiction books uniformely in time they are added to the cart', () => {
        const bookName = "Polymorphic Objects and Dynamic Projecting Patterns";
        const bookAuthor = "Alexandrina Poida";
        const bookId = "311415926538598";
        const bookPrice = 400.99;
        const availability = 10;

        const nonFictionBook = new NonFictionBook(bookName, bookAuthor, bookId, bookPrice, availability, "Science");

        const fictionBook = new FictionBook("My favourite sputnik", "Haruki Murakami", "54321", 300, 5, "Novel");
        
        const cart = new Cart();

        const expectedCalculatedPrice = bookPrice + 300;

        cart.addBook(fictionBook, 1);
        cart.addBook(nonFictionBook, 1);
        
        expect(cart.books.length).toBe(2);
        expect(cart.calculateTotalPrice()).toBe(expectedCalculatedPrice);
    });

    it('should allow search function on the derived from the inherrit class properties', () => {
        const bookName = "Polymorphic Objects and Dynamic Projecting Patterns";
        const bookAuthor = "Jan Kowalski";
        const bookId = "311415926538598";
        const bookPrice = 400.99;
        const availability = 10;

        const nonFictionBook = new NonFictionBook(bookName, bookAuthor, bookId, bookPrice, availability, "Science");

        const fictionBook = new FictionBook("My favourite sputnik", "Haruki Murakami", "54321", 300, 5, "Novel");

        booksDB.length = 0;
        usersDB.length = 0;
        
        booksDB.push(fictionBook);
        booksDB.push(nonFictionBook);

        const searchResults = searchBooks("Science");

        expect(searchResults.length).toBe(1);
        expect(searchResults[0].title).toBe("Polymorphic Objects and Dynamic Projecting Patterns");
    });

});