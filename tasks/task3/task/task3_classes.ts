export class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

export class Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

export class Student {
    name: string;
    grades: number[];

    constructor(name: string, grades: number[]) {
        this.name = name;
        this.grades = grades;
    }
}
