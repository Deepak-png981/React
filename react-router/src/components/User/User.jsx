import React from 'react'
import { useParams } from 'react-router-dom'
export default function User() {
    const { userId } = useParams();
    console.log("sd", userId);
    return (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'orange' }}>
            <h1>user : {userId}</h1>
        </div>
    )
}
