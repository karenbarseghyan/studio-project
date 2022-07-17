import React, { useState } from 'react'
import './login.css'

const initialState = {username:'', password:''}

const Log = () => {

    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    return (
        <div className="body">
            <div className="login-page">
                <div className="form">
                    <h1 className="login-text">Login your Web App</h1>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input type="text" name="username" placeholder="username" onChange={handleChange} />
                        <input type="password" name="password" placeholder="password" onChange={handleChange} />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Log
