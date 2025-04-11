import UseFetch from "./useFetch";

export default function Index() {
    const { data, loading, error } = UseFetch({ url: 'https://jsonplaceholder.typicode.com/posts' });

    if (loading) { return <p>Loading...</p> }
    if (error) { return <p>Error: {error}</p> }

    return (
        <div>
            {data && <p>{JSON.stringify(data)}</p>}
        </div>
    )
}
