import { useLayoutEffect, useState } from "react"

export default function ChangeBG() {

    const [color, setColor] = useState('')

    useLayoutEffect(() => {
        document.body.style.backgroundColor = color
    }, [color])

    return (
        <div>
            <h1>Change Background Color</h1>
            <button style={{ marginRight: '10px' }} onClick={() => setColor('red')}>Red</button>
            <button style={{ marginRight: '10px' }} onClick={() => setColor('blue')}>Blue</button>
            <button onClick={() => setColor('green')}>Green</button>
        </div>
    )
}