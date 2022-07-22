import React from "react"
import './Logo.css'
import vision from './vision.png'

const Logo = () => {
    return(
        <div id='logo' className='container'>
            <img src={vision} alt='logo'/>
        </div>
    )
}

export default Logo