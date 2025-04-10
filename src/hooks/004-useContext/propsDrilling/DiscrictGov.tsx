import BlockGov from "./BlockGov";

export default function DiscrictGov({ money }: { money: number }) {
    return (
        <div>
            <h1>This is District Government.</h1>
            <BlockGov money={money} />
        </div>
    )
}
