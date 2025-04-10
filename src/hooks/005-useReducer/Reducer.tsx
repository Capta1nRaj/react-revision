import { useReducer } from "react";

const counterReducer = (state: { count: number }, action: { type: string }) => {
    switch (action.type) {
        case "increment":
            if (state.count < 10) { return { count: state.count + 1 }; }
            return alert("Count is maxed out"), state;
        case "decrement":
            if (state.count > 0) { return { count: state.count - 1 }; }
            return alert("Count is mined out"), state;
        default:
            return state;
    }
}

export default function Reducer() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
        </div>
    )
}
