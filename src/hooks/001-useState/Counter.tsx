import { useState } from "react"

export default function Counter() {

  // What is useState?
  // 1. It is a hook
  // 2. It is a function
  // 3. It is a function that returns an array
  // 4. The array contains two elements

  // Why we use useState?
  // 1. To store the state of the component
  // 2. To change the state of the component
  // 3. To use the state in the component
  const [count, setcount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button style={{ marginRight: '10px' }} onClick={() => setcount(count + 1)}>+</button>
      <button onClick={() => setcount(count - 1)}>-</button>
    </div>
  )
}