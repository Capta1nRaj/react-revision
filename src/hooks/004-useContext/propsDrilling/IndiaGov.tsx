import StateGov from "./StateGov";

export default function IndiaGov() {
    const money = 100;
    return (
        <div>
            <h1>This is India Government.</h1>
            <StateGov money={money} />
        </div>
    )
}