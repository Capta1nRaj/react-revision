import { useEffect, useState } from "react"

/**
 * Counter Component with Document Title Effect
 * 
 * Demonstrates useEffect for side effects (updating document title)
 * Key concepts:
 * - useEffect with dependencies
 * - Document manipulation
 * - State synchronization with DOM
 */
export default function Counter() {
  // State for counter value
  const [count, setCount] = useState(0);

  // useEffect for document title update
  // - Runs whenever count changes (dependency array)
  // - Synchronizes document title with counter state
  // - Example of side effect in React
  useEffect(() => {
    document.title = `You clicked ${count} times`
  }, [count]); // Dependency array ensures effect runs on count changes

  return (
    <div>
      <h1>{count}</h1>
      {/* Increment button */}
      <button
        style={{ marginRight: '10px' }}
        onClick={() => setCount(count + 1)}
        aria-label="Increment counter"
      >
        +
      </button>
      {/* Decrement button */}
      <button
        onClick={() => setCount(count - 1)}
        aria-label="Decrement counter"
      >
        -
      </button>
    </div>
  )
}