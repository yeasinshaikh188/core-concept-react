import { useEffect, useState } from 'react'
import './friends.css'
import Friend  from './Friend';

export default function Fri(){

    const [friends, setFriends] = useState([]);
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])

    return (
        <div>
            <h1>Friends : {friends.length} </h1>

           
            </div>
        
    )
}