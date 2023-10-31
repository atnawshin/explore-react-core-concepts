import { useEffect, useState } from "react"

export default function Users() {
    // state
    const [users, setUsers] = useState([]);

    // const abc = () => {}
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    return (
        <div>
            {/* loading data */}
            <h3>Users: {users.length}</h3>
        </div>
    )
}


/* 
1. declare a state to hold the data
2. useEffect with call back and dependency array
3. use fetch to load data
4. set loaded data to the state
*/