import { useMemo, useState } from "react";

/**
 * Cart Component
 * 
 * Demonstrates useMemo for performance optimization
 * Key concepts:
 * - Memoization
 * - Performance optimization
 * - Expensive calculations
 */
export default function Cart() {
    // Static cart data
    // - Array of products with id, name, and price
    // - Using TypeScript interface for type safety
    const [cart] = useState<{ id: number, name: string, price: number }[]>([
        { id: 1, name: "Product 1", price: 100 },
        { id: 2, name: "Product 2", price: 200 },
        { id: 3, name: "Product 3", price: 300 },
    ]);

    // Discount state
    // - Controls discount percentage
    // - Updates trigger re-renders
    const [discount, setDiscount] = useState<number>(0);

    // Without useMemo (commented out)
    // - Recalculates on every render
    // - Performance impact on large datasets
    // const totalPrice = cart.reduce((acc: number, product: { price: number; }) => {
    //     console.log("Calculating total price...");
    //     return acc + product.price
    // }, 0);

    // With useMemo
    // - Memoizes the calculation result
    // - Only recalculates when cart changes
    // - Improves performance by avoiding unnecessary calculations
    const totalPrice = useMemo(() => {
        console.log("Calculating total price...");
        return cart.reduce((acc: number, product: { price: number; }) => acc + product.price, 0)
    }, [cart]);

    return (
        <div>
            <h2>Shopping Cart</h2>

            {/* Product list */}
            {cart.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                </div>
            ))}

            {/* Total price display */}
            <h3>Total Price: {totalPrice}</h3>

            {/* Discount button */}
            <button
                onClick={() => setDiscount(discount + 0.1)}
                aria-label="Apply 10% discount"
            >
                Apply 10% Discount
            </button>
        </div>
    )
}
