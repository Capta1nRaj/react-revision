import { useCallback, useState } from "react";
import Button from "./Button";

export default function Index() {

    const [count, setCount] = useState<number>(0);
    const [darkMode, setDarkMode] = useState<boolean>(false);

    // without useCallback
    // const handleClick = () => { setCount(count + 1); }

    // with useCallback
    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div style={{ backgroundColor: darkMode ? "black" : "white", color: darkMode ? "white" : "black", padding: "20px", borderRadius: "12px" }}>
            <h1>{count}</h1>
            <Button onClick={handleClick} />
            <button style={{ marginLeft: "10px" }} onClick={() => setDarkMode(!darkMode)}>Toggle dark mode</button>
        </div>
    )
}