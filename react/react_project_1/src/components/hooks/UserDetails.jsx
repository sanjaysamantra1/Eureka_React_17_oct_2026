import { useEffect, useState } from 'react'

export default function UserDetails() {
    const [count, setCount] = useState(0);
    const [userId, setUserId] = useState(1);

    const incrementCount = () => setCount(count + 1);
    const incrementUserId = () => setUserId(userId + 1);

    const fetchUserData = async () => { // Initial Render + everytime userid changes
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        let finalApiResponse = await response.json();
        console.log(finalApiResponse)
    }

    useEffect(() => {
        fetchUserData();
    }, [userId]);

    return <>
        <h3 className="text-center">Fetch User Details when user Id Changes</h3>

        <div>Count:{count}</div>
        <button className="btn btn-primary" onClick={incrementCount}>Increment Count</button>
        <hr />

        <div>userId:{userId}</div>
        <button className="btn btn-primary" onClick={incrementUserId}>Increment userId</button>
    </>
}
