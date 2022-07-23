import React from "react"
import './Register.css'

const Register = ({onRouteChange}) => {
    return (
        <div id='sign-in' className='container'>
            <h2 id='sign-in-text'>Register</h2>
            <label>Name</label>
            <input className="input-text"></input>
            <label>Email</label>
            <input className='input-text'></input>
            <label>Password</label>
            <input className='input-text'></input>
            <button onClick={() => onRouteChange('home')} id='register-btn'>Register Now</button>  
        </div>
    )
}

export default Register
