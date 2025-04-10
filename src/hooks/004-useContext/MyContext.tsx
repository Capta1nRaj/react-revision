import { createContext } from "react";

const MyContext = createContext({
    money: 0,
    counter: 0,
    setCounter: (counter: number) => {
        console.log(counter);
    },
    person: {
        name: "",
        age: 0,
        city: ""
    }
});

export default MyContext;
