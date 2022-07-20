import React, { useEffect } from 'react'
import './profile.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const login = useSelector((state)=> state.login);
    const authenticate = useSelector((state)=> state.auth);
    let navigate = useNavigate();
    useEffect(() => {
        if (!login && !authenticate){
           return navigate("/login");
        }
     },[login, authenticate]);
    
    return (
        <div>
            {(login || authenticate) && 
            <div className='profileContainer'>
                <h1>Profile</h1>
                <h2>You are authorized user</h2>           
            </div> }
        </div>
    )
}

export default Profile
