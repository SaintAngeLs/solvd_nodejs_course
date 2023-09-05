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
        this.availability -= quantity;
    }
}

/**
 * Class representing a User.
 * It contains properties like name, email, and a unique user ID.
 */
export class User {
    //TODO: constructor and reduceAvailability method

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
        
    }
    

    /**
     * Method to remove books from the cart
     * @param book the baook to be removed from the cart
     */
    removeBook(book: Book) {
       
    }

       /**
     * Method to calculate the total price of the cart
     * @returns 
     */
    calculateTotalPrice(): number {
       return 0;
    }
}

  
/**
 * Class representing an Order.
 * It includes information about the user, books ordered, and the total price.
 */
export class Order {
    // TODO: constructor and getTotalPrice method

    constructor(public user: User, public cart: Cart) {}

    /**
     * Method to get the total price of the order
     * @returns 
     */
    getTotalPrice(): number {
        return 0;
    }
 
}
