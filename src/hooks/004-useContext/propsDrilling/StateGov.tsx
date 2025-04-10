import DiscrictGov from "./DiscrictGov";

export default function StateGov({ money }: { money: number }) {
    return (
        <div>
            <h1>This is State Government.</h1>
            <DiscrictGov money={money} />
        </div>
    )
}
