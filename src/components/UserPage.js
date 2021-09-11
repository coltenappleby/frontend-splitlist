import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'



function UserPage() {

    const[userInfo, setUserInfo] = useState('')
    let { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/users/${id}`)
        .then(resp => resp.json())
        .then(setUserInfo)
    }, [id])

    console.log(userInfo)


    return(
        <div className = "user-page">
            Name: {userInfo.name}

        </div>
    )

}

export default UserPage;