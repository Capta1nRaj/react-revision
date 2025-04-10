import PanchayatGov from "./PanchayatGov";

export default function BlockGov({ money }: { money: number }) {
    return (
        <div>
            <h1>This is Block Government.</h1>
            <PanchayatGov money={money} />
        </div>
    )
}
