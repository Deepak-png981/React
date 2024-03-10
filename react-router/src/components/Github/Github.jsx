import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Github() {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch('https://api.github.com/users/Deepak-png981')
            .then((res) => res.json()).then(res => setData(res));
        console.log("data : ", data);
    }, [])
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: "center" }} >
                Github Followers : {data.followers}
            </div>
            <div style={{ display: 'flex', justifyContent: "center" }} >
                <img src={data.avatar_url} alt="" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <h3>Bio : {data.bio}</h3>
                <h3> Public Repository : {data.public_repos}</h3>
            </div>
        </div>
    )
}
