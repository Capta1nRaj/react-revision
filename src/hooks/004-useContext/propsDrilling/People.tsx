import MyContext from "../MYContext";
import { useContext } from "react";
export default function People() {
    const { money, counter, setCounter, person } = useContext(MyContext);
    return (
        <div>
            <h1>This is People.</h1>
            <h2>Money: {money}</h2>
            <button onClick={() => setCounter(counter + 1)}>Increase</button>
            <h2>Counter: {counter}</h2>
            <button onClick={() => setCounter(counter - 1)}>Decrease</button>
            <h2>Person: {person.name}</h2>
            <h2>Person: {person.age}</h2>
            <h2>Person: {person.city}</h2>
        </div>
    )
}
