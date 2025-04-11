import { useLayoutEffect, useState } from "react"

/**
 * ChangeBG Component
 * 
 * Demonstrates useLayoutEffect for synchronous DOM updates
 * Key concepts:
 * - useLayoutEffect vs useEffect
 * - Synchronous DOM mutations
 * - Preventing visual flicker
 */
export default function ChangeBG() {
    // State for background color
    const [color, setColor] = useState('')

    // useLayoutEffect for immediate DOM updates
    // - Runs synchronously after DOM mutations
    // - Prevents visual flicker during color changes
    // - Better for visual updates than useEffect
    useLayoutEffect(() => {
        document.body.style.backgroundColor = color
    }, [color]) // Dependency array ensures effect runs on color changes

    return (
        <div>
            <h1>Change Background Color</h1>
            {/* Color change buttons */}
            <button
                style={{ marginRight: '10px' }}
                onClick={() => setColor('red')}
                aria-label="Change to red"
            >
                Red
            </button>
            <button
                style={{ marginRight: '10px' }}
                onClick={() => setColor('blue')}
                aria-label="Change to blue"
            >
                Blue
            </button>
            <button
                onClick={() => setColor('green')}
                aria-label="Change to green"
            >
                Green
            </button>
        </div>
    )
}