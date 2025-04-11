import { useEffect, useState } from 'react'

/**
 * FetchData Component
 * 
 * Demonstrates useEffect for data fetching with loading states
 * Key concepts:
 * - useEffect for side effects (API calls)
 * - Loading state management
 * - Clean data fetching pattern
 */
export default function FetchData() {
    // State management
    // - loading: tracks API request status
    // - data: stores fetched posts
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    // useEffect for data fetching
    // - Empty dependency array [] means it runs once on mount
    // - Async function inside useEffect for clean data fetching
    // - Proper loading state management
    useEffect(() => {
        const response = async () => {
            setLoading(true) // Start loading
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            console.log(data) // Debug log
            setData(data) // Update state with fetched data
            setLoading(false) // End loading
        }
        response()
    }, []); // Empty dependency array = run once on mount

    // Conditional rendering based on loading state
    return (
        <div>
            {loading ? <h1>Loading...</h1> : // Show loading indicator
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map through fetched data and render table rows */}
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
