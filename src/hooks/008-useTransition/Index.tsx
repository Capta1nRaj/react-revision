import { useState, useTransition } from "react";

export default function Index() {
    const [search, setSearch] = useState<string>("");
    const [isPending, startTransition] = useTransition();

    const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
        startTransition(async () => {
            setSearch(e.target.value);
        });
    }

    return (
        <div>
            <h1> This is useTransition Hook</h1>
            <input type="text" value={search} onChange={handleSearch} />
            {isPending && <div>Loading...</div>}
            {search.length > 0 && <div>Search results for: {search}</div>}

        </div>
    )
}
