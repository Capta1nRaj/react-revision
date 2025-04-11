import React, { useState, useDebugValue } from 'react';

// Custom hook that uses useDebugValue
function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    // This will be visible in React DevTools
    useDebugValue(count > 5 ? 'High' : 'Low', (value) => {
        return `Count is ${value}`;
    });

    const increment = () => setCount(c => c + 1);
    const decrement = () => setCount(c => c - 1);

    return { count, increment, decrement };
}

const UseDebugValueExample = () => {
    const { count, increment, decrement } = useCounter(0);

    return (
        <div className="p-4 space-y-4">
            <h2 className="text-xl font-bold">useDebugValue Example</h2>
            <p className="text-gray-600">
                This example demonstrates how useDebugValue can help debug custom hooks in React DevTools.
                Open your browser's DevTools and look for the custom hook label.
            </p>

            <div className="flex items-center space-x-4">
                <button
                    onClick={decrement}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Decrement
                </button>
                <span className="text-2xl font-bold">{count}</span>
                <button
                    onClick={increment}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    Increment
                </button>
            </div>

            <p className="text-sm text-gray-500">
                Note: Open React DevTools to see the debug value change when count exceeds 5
            </p>
        </div>
    );
};

export default UseDebugValueExample; 