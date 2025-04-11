import { useState } from "react";
import MyContext from "./MyContext";

/**
 * MoneyState Component
 * 
 * Context Provider component that manages and provides state to children
 * Key concepts:
 * - Context Provider pattern
 * - State management
 * - Component composition
 */
export default function MoneyState(props: { children: React.ReactNode }) {
    // Static money value
    const money = 1000;

    // Counter state with useState
    const [counter, setCounter] = useState(0);

    // Person object with static data
    const person = {
        name: "John",
        age: 20,
        city: "New York"
    }

    // Context Provider
    // - Wraps children with context
    // - Provides all state values
    // - Enables state sharing across component tree
    return (
        <MyContext.Provider value={{ money, counter, setCounter, person }}>
            {props.children}
        </MyContext.Provider>
    )
}
