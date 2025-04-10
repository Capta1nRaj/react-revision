import People from "./People";

export default function PanchayatGov({ money }: { money: number }) {
    return (
        <div>
            <h1>This is Panchayat Government.</h1>
            <People money={money} />
        </div>
    )
}
