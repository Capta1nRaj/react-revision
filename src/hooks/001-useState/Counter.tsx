import { useState } from "react"

/**
 * Counter Component
 * 
 * This component demonstrates the basic usage of useState hook in React.
 * It implements a simple counter with increment and decrement functionality.
 * 
 * Key Concepts:
 * 1. useState is a React Hook that lets you add state to functional components
 * 2. It returns an array with two elements:
 *    - Current state value
 *    - Function to update the state
 * 3. The initial state is set to 0 in this example
 * 
 * Best Practices:
 * 1. Always use destructuring to get state and setter function
 * 2. Use meaningful names for state variables
 * 3. Consider using functional updates when new state depends on previous state
 * 
 * Common Use Cases:
 * 1. Form inputs
 * 2. Toggle states
 * 3. Counters
 * 4. Any component-level state management
 */
export default function Counter() {
  // useState Hook
  // - Takes initial state as argument (0 in this case)
  // - Returns array with [currentState, setStateFunction]
  // - setStateFunction can be used to update the state
  const [count, setCount] = useState(0);

  // Event Handlers
  // - Direct state update: setCount(count + 1)
  // - For complex updates, use functional form: setCount(prev => prev + 1)
  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);

  return (
    <div>
      {/* Display current count */}
      <h1>{count}</h1>

      {/* Increment button */}
      <button
        style={{ marginRight: '10px' }}
        onClick={increment}
        aria-label="Increment counter"
      >
        +
      </button>

      {/* Decrement button */}
      <button
        onClick={decrement}
        aria-label="Decrement counter"
      >
        -
      </button>
    </div>
  )
}