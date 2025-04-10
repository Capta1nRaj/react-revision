import { useEffect, useState } from "react"

export default function Counter() {

  const [count, setcount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button style={{ marginRight: '10px' }} onClick={() => setcount(count + 1)}>+</button>
      <button onClick={() => setcount(count - 1)}>-</button>
    </div>
  )
}