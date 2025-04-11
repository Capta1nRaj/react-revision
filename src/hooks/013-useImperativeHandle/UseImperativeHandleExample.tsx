import React, { useRef, useImperativeHandle, forwardRef } from 'react';

// Define the ref type
interface InputRef {
    focus: () => void;
    clear: () => void;
    getValue: () => string;
}

// Create a custom input component that exposes methods via ref
const CustomInput = forwardRef<InputRef, { placeholder?: string }>((props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    // Expose methods to parent component
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current?.focus();
        },
        clear: () => {
            if (inputRef.current) {
                inputRef.current.value = '';
            }
        },
        getValue: () => {
            return inputRef.current?.value || '';
        }
    }));

    return (
        <input
            ref={inputRef}
            type="text"
            placeholder={props.placeholder}
            className="p-2 border rounded"
        />
    );
});

// Parent component that uses the custom input
const UseImperativeHandleExample = () => {
    const inputRef = useRef<InputRef>(null);

    const handleFocus = () => {
        inputRef.current?.focus();
    };

    const handleClear = () => {
        inputRef.current?.clear();
    };

    const handleGetValue = () => {
        const value = inputRef.current?.getValue();
        alert(`Current value: ${value}`);
    };

    return (
        <div className="p-4 space-y-4">
            <h2 className="text-xl font-bold">useImperativeHandle Example</h2>
            <p className="text-gray-600">
                This example shows how to expose methods from a child component to its parent using useImperativeHandle.
            </p>

            <CustomInput ref={inputRef} placeholder="Type something..." />

            <div className="space-x-2">
                <button
                    onClick={handleFocus}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Focus Input
                </button>
                <button
                    onClick={handleClear}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Clear Input
                </button>
                <button
                    onClick={handleGetValue}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    Get Value
                </button>
            </div>
        </div>
    );
};

export default UseImperativeHandleExample; 