import React from "react"
import './SignIn.css'

const SignIn = ({onRouteChange}) => {
    return (
        <div id='sign-in' className='container'>
            <h2 id='sign-in-text'>Sign In</h2>
            <label>Email</label>
            <input className='input-text'></input>
            <label>Password</label>
            <input className='input-text'></input>
            <button onClick={() => onRouteChange('home')} id='sign-in-btn'>Sign in</button>
            <p onClick={() => onRouteChange('register')} id='register-link'>Register</p>   
        </div>
    )
}

export default SignIn