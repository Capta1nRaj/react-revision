import React from "react";

/**
 * Button Component
 * 
 * Memoized button component that prevents unnecessary re-renders
 * Key concepts:
 * - React.memo
 * - Performance optimization
 * - Prop comparison
 */
export default React.memo(function Button({ onClick }: { onClick: () => void }) {
    // Debug log to track renders
    console.log("Button is rendered");

    return (
        <button
            onClick={onClick}
            aria-label="Click me button"
        >
            Click me
        </button>
    )
})