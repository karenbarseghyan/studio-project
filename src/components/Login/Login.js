import React, { useState } from 'react'
import './login.css'
import { isCredentialsCorrect } from '../../utils/IsCreadentialsCorrect'

const initialState = {username:'', password:''}

const Log = () => {

    const [formData, setFormData] = useState(initialState)
    const [isHaveRights, setHaveRights] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        let isHaveRights  = isCredentialsCorrect(formData);
        setHaveRights(isHaveRights)
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    console.log(isHaveRights, 'ppppp')
    return (

        <div className="body">
            <div className="login-page">
            <div className="form">
                <h1 className="login-text">Login your Web App</h1>
                <div className="login-form">
                    {!isHaveRights && <p>Sorry, we don't recognize your credentials</p>}
                </div>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="text" name = "username" placeholder="username" onChange={handleChange} required />
                    <input type="password" name = "password" placeholder="password" onChange={handleChange} required />
                    <button>Login</button>
                </form>
               
            </div>
        </div>
        </div>
        
    )
}

export default Log
