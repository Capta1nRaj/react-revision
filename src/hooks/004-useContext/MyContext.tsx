import { createContext } from "react";

/**
 * MyContext Component
 * 
 * Creates a React Context for sharing state across components
 * Key concepts:
 * - Context creation
 * - Default values
 * - TypeScript interfaces
 * - State sharing pattern
 */

// Create context with default values
// - Provides initial structure for the context
// - Includes money, counter, and person data
// - Defines types for all context values
const MyContext = createContext({
    // Numeric state values
    money: 0,
    counter: 0,

    // Function for updating counter
    setCounter: (counter: number) => {
        console.log(counter);
    },

    // Complex object structure
    person: {
        name: "",
        age: 0,
        city: ""
    }
});

export default MyContext;
