import { useMemo, useState } from "react";

export default function Cart() {

    const [cart] = useState<{ id: number, name: string, price: number }[]>([
        { id: 1, name: "Product 1", price: 100 },
        { id: 2, name: "Product 2", price: 200 },
        { id: 3, name: "Product 3", price: 300 },
    ]);

    const [discount, setDiscount] = useState<number>(0);

    // without useMemo
    // const totalPrice = cart.reduce((acc: number, product: { price: number; }) => {
    //     console.log("Calculating total price...");
    //     return acc + product.price
    // }, 0);

    // with useMemo
    const totalPrice = useMemo(() => {
        console.log("Calculating total price...");
        return cart.reduce((acc: number, product: { price: number; }) => acc + product.price, 0)
    }, [cart]);

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                </div>
            ))}

            <h3>Total Price: {totalPrice}</h3>

            <button onClick={() => setDiscount(discount + 0.1)}>Apply 10% Discount</button>
        </div>
    )
}
