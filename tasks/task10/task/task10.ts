// Funny-Dummy Databases :/
export const booksDB: Book[] = [];
export const usersDB: User[] = [];


/**
 * Class representing an individual Book.
 * It contains properties like title, author, ISBN, price, and availability.
 */

export class Book {
    //TODO: constructor and reduceAvailability method 

    constructor(public title: string, 
                public author: string, 
                public ISBN: string, 
                public price: number, 
                public availability: number) {}

    /**
     * Method to reduce availability when a book is ordered
     * @param quantity the quantity of the books
     */
    reduceAvailability(quantity: number) {
        
        this.availability = this.availability - quantity >= 0 ? this.availability - quantity : 0;

    
    }
}

// TODO: fictionBook and nonFiction book classes: extensional classes of the Book

/**
 * Fiction book extentional class of the Book Cass adding the genre field to the initializing list in the constructor
 */
export class FictionBook extends Book {
    constructor(title: string, author: string, ISBN: string, price: number, availability: number, public genre : string)
    {
        super(title, author, ISBN, price, availability);
    }
}

/**
 * NonFuctionBook extentional class of the Book main class adding the value of the subject of the Book to the parameters of the initializing list
 */
export class NonFictionBook extends Book {
    constructor(title: string, author: string, ISBN: string, price: number, availability: number, public subject : string)
    {
        super(title, author, ISBN, price, availability);
    }
}

// TODO: Searching for the book method
/**
 * Search for books by title, author, or genre.
 * Returns a maximum of 10 results.
 * @param query the search term
 */
export function searchBooks(query: string): Book[] {

    const normalizedQuery = query.toLowerCase();

    return booksDB.filter(book => book.title.toLowerCase().includes(normalizedQuery)  ||
                                  book.author.toLowerCase().includes(normalizedQuery) ||
                                  (book as FictionBook).genre?.toLowerCase().includes(normalizedQuery) ||
                                  (book as NonFictionBook).subject?.toLowerCase().includes(normalizedQuery));
}




/**
 * Class representing a User.
 * It contains properties like name, email, and a unique user ID.
 */
export class User {
    //TODO: constructor

    constructor(public name: string, 
                public email: string, 
                public userID: string) {}
}

  
/**
 * Class representing a shopping Cart.
 * It has methods to add books, remove books, and calculate the total price.
*/
export class Cart {
    // TODO: addBook, removeBook, calculateTotalPrice


    books: Array<{ book: Book, quantity: number }> = []; 


    /**
     * Method to add books to the cart
     * @param book the book to be added
     * @param quantity 
     */
    addBook(book: Book, quantity: number) {
        this.books.push({ book, quantity });
        book.reduceAvailability(quantity);
    }
    

    /**
     * Method to remove books from the cart
     * @param book the baook to be removed from the cart
     */
    removeBook(book: Book) {

        const index = this.books.findIndex((b) => b.book === book);

        // if only the index is abailable
        if (index !== -1) {
            this.books.splice(index, 1);
        }
       
    }

    // TODO:

    discountCode?: string;

    applyDiscount(code: string) {
        this.discountCode = code;
    }

       /**
     * Method to calculate the total price of the cart
     * @returns 
     */
    calculateTotalPrice(): number {
        let total = this.books.reduce((acc, curr) => acc + curr.book.price * curr.quantity, 0);
        
        if (this.discountCode === 'FunkcjaHOLOMORFICZNA') {
            total *= 0.9;
        }
        
        return total;
    }

    

  
}

  
/**
 * Class representing an Order.
 * It includes information about the user, books ordered, and the total price.
 */
export class Order {
    // TODO: constructor and getTotalPrice method

    isPaid: boolean;

    constructor(public user: User, public cart: Cart) {
        this.isPaid = false;
    }

    /**
     * Method to get the total price of the order
     * @returns 
     */
    getTotalPrice(): number {
        return this.cart.calculateTotalPrice();;
    }

    // TODO: isPaid implementation
    
    completeOrder(): boolean {
        const totalPrice = this.getTotalPrice();
        this.isPaid = Payment.processPayment(this.user, totalPrice);
        return this.isPaid;
    }
}


/**
 * Payment handling class
 */
export class Payment {
    // TODO: assume that the payment is always sucessfull

    static processPayment(user: User, amount: number): boolean {
        // some webhooks-stripe-paypasll mechanizm is like a one line string here :)))))))
        return true;
    }
}
