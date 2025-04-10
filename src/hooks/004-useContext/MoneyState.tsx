import { useState } from "react";
import MyContext from "./MYContext";

export default function MoneyState(props: { children: React.ReactNode }) {
    const money = 1000;
    const [counter, setCounter] = useState(0);
    const person = {
        name: "John",
        age: 20,
        city: "New York"
    }


    return (
        <MyContext.Provider value={{ money, counter, setCounter, person }}>
            {props.children}
        </MyContext.Provider>
    )
}
