import React from "react";

export default React.memo(function Button({ onClick }: { onClick: () => void }) {
    console.log("Button is rendered");
    return (
        <button onClick={onClick}>Click me</button>
    )
})