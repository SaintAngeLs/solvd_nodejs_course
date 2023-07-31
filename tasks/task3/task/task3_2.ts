/**
 * Person interf
 */
export interface Person {
    firstName: string;
    lastName: string;

    
}

/**
 * Student interf
 */
export interface Student {
    name: string;
    grades: number[];
}

/**
 * Implement a function called `getFullName` that takes a person object with `firstName` and `lastName` properties. The function should return the person's full name in the format "FirstName LastName".
 * @param person - a person object with `firstName` and `lastName` properties
 * @returns the person's full name in the format "FirstName LastName".
 */
export function getFullName(person: Person): string 
{
    return `${person.firstName} ${person.lastName}`;
}

/**
 * Create a function called `filterUniqueWords` that takes a string of text and returns an array of unique words, sorted in alphabetical order, without using explicit loops. __Use function composition and point-free style__.
 * @param text - a string of text
 * @returns an array of unique words, sorted in alphabetical order, without using explicit loops
 */
export function filterUniqueWords(text: string): string[] 
{
    return Array.from(new Set(text.split(' '))).sort();
}

/**
 * Implement a function called `getAverageGrade` that takes an array of student objects, each containing a `name` and `grades` property. The function should return the average grade of all students, without modifying the original array or its items. Use function composition and point-free style.
 * @param students - an array of student objects, each containing a `name` and `grades` property
 * @returns the average grade of all students, without modifying the original array or its items
 */
export function getAverageGrade(students: Student[]): number 
{
    return students.flatMap(student => student.grades).reduce((a, b) => a + b, 0) / students.flatMap(student => student.grades).length;
}