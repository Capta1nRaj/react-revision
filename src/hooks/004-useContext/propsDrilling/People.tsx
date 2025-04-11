import MyContext from "../MyContext";
import { useContext } from "react";

/**
 * People Component
 * 
 * Demonstrates context consumption and state management
 * Key concepts:
 * - useContext hook
 * - Context consumption
 * - State updates
 */
export default function People() {
    // Consume context values
    // - Destructure needed values from context
    // - Access to money, counter, and person data
    const { money, counter, setCounter, person } = useContext(MyContext);

    return (
        <div>
            <h1>This is People.</h1>

            {/* Display money value */}
            <h2>Money: {money}</h2>

            {/* Counter controls */}
            <button onClick={() => setCounter(counter + 1)}>Increase</button>
            <h2>Counter: {counter}</h2>
            <button onClick={() => setCounter(counter - 1)}>Decrease</button>

            {/* Display person information */}
            <h2>Person: {person.name}</h2>
            <h2>Person: {person.age}</h2>
            <h2>Person: {person.city}</h2>
        </div>
    )
}
