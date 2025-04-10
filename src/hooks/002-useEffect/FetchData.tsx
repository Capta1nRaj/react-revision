import { useEffect, useState } from 'react'

export default function FetchData() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const response = async () => {
            setLoading(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            console.log(data)
            setData(data)
            setLoading(false)
        }
        response()
    }, []);

    return (
        <div>
            {loading ? <h1>Loading...</h1> :
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item: { id: string, title: string, body: string }) => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    )
}
