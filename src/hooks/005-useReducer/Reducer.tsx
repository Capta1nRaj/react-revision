import { useReducer } from "react";

/**
 * Counter Reducer Function
 * 
 * Handles state updates based on action types
 * Key concepts:
 * - Reducer pattern
 * - State immutability
 * - Action handling
 * - State validation
 */
const counterReducer = (state: { count: number }, action: { type: string }) => {
    switch (action.type) {
        case "increment":
            // Increment count if less than 10
            if (state.count < 10) {
                return { count: state.count + 1 };
            }
            // Show alert and return current state if maxed out
            return alert("Count is maxed out"), state;

        case "decrement":
            // Decrement count if greater than 0
            if (state.count > 0) {
                return { count: state.count - 1 };
            }
            // Show alert and return current state if mined out
            return alert("Count is mined out"), state;

        default:
            // Return current state for unknown actions
            return state;
    }
}

/**
 * Reducer Component
 * 
 * Demonstrates useReducer for complex state management
 * Key concepts:
 * - useReducer hook
 * - State dispatch
 * - Action handling
 */
export default function Reducer() {
    // Initialize reducer with initial state
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <div>
            {/* Display current count */}
            <h1>Count: {state.count}</h1>

            {/* Increment button */}
            <button
                onClick={() => dispatch({ type: "increment" })}
                aria-label="Increment counter"
            >
                Increment
            </button>

            {/* Decrement button */}
            <button
                onClick={() => dispatch({ type: "decrement" })}
                aria-label="Decrement counter"
            >
                Decrement
            </button>
        </div>
    )
}
