# React Hooks - Comprehensive Guide

## 1. What are React Hooks?

- Hooks are functions that let you "hook into" React state and lifecycle features from function components
- Introduced in React 16.8 to allow using state and other React features without writing classes
- Rules of Hooks:
  - Only call hooks at the top level (not inside loops, conditions, or nested functions)
  - Only call hooks from React function components or custom hooks
  - Hooks must be called in the same order on every render

## 2. useState

- A hook that lets you add state to functional components
- Syntax: `const [state, setState] = useState(initialValue)`
- Returns a stateful value and a function to update it
- The setState function can take a function as an argument for state updates based on previous state
- Example:

```javascript
const [count, setCount] = useState(0);
setCount(prevCount => prevCount + 1);
```

## 3. Why use useState?

- Enables state management in functional components
- Provides a simpler and more predictable way to handle state
- Replaces the need for class components and this.setState
- Makes state management more maintainable and testable
- Allows for better code organization and reusability

## 4. useEffect

- A hook for handling side effects in functional components
- Replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount
- Syntax: `useEffect(() => { effect }, [dependencies])`
- Runs after every render by default
- Can be controlled with a dependency array
- Cleanup function can be returned to handle component unmounting
- Example:

```javascript
useEffect(() => {
  // Effect code
  return () => {
    // Cleanup code
  };
}, [dependency]);
```

## 5. useLayoutEffect

- Similar to useEffect but runs synchronously after all DOM mutations
- Use when you need to read layout from the DOM and re-render
- Runs before browser paint
- Useful for:
  - Measuring DOM elements
  - Animations
  - Synchronous DOM mutations
- Example:

```javascript
useLayoutEffect(() => {
  // DOM measurements or mutations
}, [dependencies]);
```

## 6. useLayoutEffect vs useState

- useLayoutEffect is not a replacement for useState
- They serve different purposes:
  - useState: Manages component state
  - useLayoutEffect: Handles DOM mutations and measurements
- Use useLayoutEffect when you need to:
  - Measure DOM elements
  - Perform synchronous DOM updates
  - Ensure DOM updates happen before paint

## 7. Props Drilling

- The process of passing props through multiple levels of components
- Can lead to:
  - Complex component hierarchies
  - Hard-to-maintain code
  - Unnecessary re-renders
- Solutions:
  - Context API
  - State management libraries (Redux, Zustand)
  - Component composition

## 8. useContext

- A hook for accessing React Context
- Avoids prop drilling
- Syntax: `const value = useContext(MyContext)`
- Components re-render when context value changes
- Example:

```javascript
const ThemeContext = createContext('light');
const theme = useContext(ThemeContext);
```

## 9. useReducer

- Alternative to useState for complex state logic
- Syntax: `const [state, dispatch] = useReducer(reducer, initialState)`
- Better for:
  - Complex state logic
  - Multiple sub-values
  - State updates that depend on previous state
- Example:

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
dispatch({ type: 'INCREMENT' });
```

## 10. useCallback

- Memoizes callback functions
- Prevents unnecessary re-renders
- Syntax: `const memoizedCallback = useCallback(callback, dependencies)`
- Useful for:
  - Optimizing child components that rely on reference equality
  - Preventing unnecessary re-renders
- Example:

```javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

## 11. useTransition

- New in React 19
- Helps manage UI transitions and loading states
- Syntax: `const [isPending, startTransition] = useTransition()`
- Use cases:
  - Smooth UI updates
  - Loading states
  - Concurrent rendering
- Example:

```javascript
const [isPending, startTransition] = useTransition();
startTransition(() => {
  setState(newState);
});
```

## 12. useRef

- Creates a mutable ref object
- Persists between renders
- Can hold any mutable value
- Common uses:
  - Accessing DOM elements
  - Storing previous values
  - Keeping mutable values that don't trigger re-renders
- Example:

```javascript
const inputRef = useRef(null);
inputRef.current.focus();
```

## 13. useId

- Generates unique IDs that are stable across server and client
- Useful for:
  - Accessibility attributes
  - Form labels
  - Unique keys in lists
- Example:

```javascript
const id = useId();
<label htmlFor={id}>Label</label>
<input id={id} type="text" />
```

## 14. Custom Hooks

- Functions that use other hooks
- Follow the naming convention: useSomething
- Enable logic reuse between components
- Can combine multiple hooks
- Example:

```javascript
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  return { count, increment, decrement };
}
```

## Best Practices

1. Keep hooks at the top level
2. Use meaningful names for custom hooks
3. Extract complex logic into custom hooks
4. Use appropriate hooks for specific use cases
5. Consider performance implications
6. Follow React's rules of hooks
7. Document custom hooks thoroughly
