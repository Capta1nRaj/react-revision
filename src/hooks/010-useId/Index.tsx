import { useId } from "react";

export default function Index() {
    const id = useId();
    const id2 = useId();
    return (
        <div>
            <h1>This is useId Hook</h1>
            <p>ID: {id}</p>
            <input id={id2} type="text" />
        </div>
    )
}
