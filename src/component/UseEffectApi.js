import React, { useEffect, useState } from 'react'

import Loading from './Loading'
import UserData from './UserData'


const UseEffectApi = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try {
            const response = await fetch('https://api.github.com/users')
            setLoading(false);
            setUsers(await response.json());
        }
        catch (error) {
            setLoading(false);
            console.log("My Error is :-" + error)
        }


        // console.log(data)
    }

    useEffect(() => {
        getUsers();
    }, [])

    if (loading) {
        return <Loading />
    }


    return (
        <>
            <UserData users={users} />
        </>
    )
}

export default UseEffectApi
