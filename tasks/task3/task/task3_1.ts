/**
 * Product interface
 */
export interface Product {
    price: number;
    
  }
  
/**
 * Implement a pure function called `calculateDiscountedPrice` that takes an array of products and a discount percentage as arguments. The function should return a new array of products with discounted prices based on the given percentage, without modifying the original products.
 * @param products - the array of products 
 * @param discount - the array of the discounts
 * @returns a new array of products with discounted prices based on the given percentage, without modifying the original products!
 */
export function calculateDiscountedPrice(products: Product[], discount:number): Product[]
{
    return products.map(product => (
        {
            ...product, 
            price: product.price * (1 - discount/100)
        }));
}
/**
 * Create a pure function called `calculateTotalPrice` that takes an array of products as an argument. The function should return the total price of all products, without modifying the original array or its items.
 * @param products - array of products
 * @returns the total price of all products, without modifying the original array or its items.
 */
export function calculateTotalPrice(products: Product[]): number
{
    return products.reduce((total, product) => total + product.price, 0);
}