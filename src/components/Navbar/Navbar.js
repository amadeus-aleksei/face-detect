import React from 'react'
import './Navbar.css'

const Navbar = ({onRouteChange, isSignedIn}) => {
        if (isSignedIn) {
            return (
                <nav id='top-nav' className='container'>
                    <ul>
                        <li onClick={() => onRouteChange('signout')}>Sign Out</li>
                    </ul>
                </nav>
            ) 
        }
        else {
            return (
                <nav id='top-nav' className='container'>
                    <ul>
                        <li onClick={() => onRouteChange('signin')}>Sign In</li>
                        <li onClick={() => onRouteChange('register')}>Register</li>
                    </ul>
                </nav>
            )
        }
        
    
}

export default Navbar