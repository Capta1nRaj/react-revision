import { useCallback, useState } from "react";
import Button from "./Button";

/**
 * Index Component
 * 
 * Demonstrates useCallback for memoizing functions
 * Key concepts:
 * - useCallback hook
 * - Function memoization
 * - Performance optimization
 * - Dependency management
 */
export default function Index() {
    // Counter state
    const [count, setCount] = useState<number>(0);

    // Theme state
    const [darkMode, setDarkMode] = useState<boolean>(false);

    // Without useCallback (commented out)
    // - Creates new function on every render
    // - Causes unnecessary re-renders of Button
    // const handleClick = () => { setCount(count + 1); }

    // With useCallback
    // - Memoizes the function
    // - Only recreates when count changes
    // - Prevents unnecessary re-renders of Button
    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div style={{
            backgroundColor: darkMode ? "black" : "white",
            color: darkMode ? "white" : "black",
            padding: "20px",
            borderRadius: "12px"
        }}>
            {/* Counter display */}
            <h1>{count}</h1>

            {/* Memoized button */}
            <Button onClick={handleClick} />

            {/* Theme toggle button */}
            <button
                style={{ marginLeft: "10px" }}
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle dark mode"
            >
                Toggle dark mode
            </button>
        </div>
    )
}