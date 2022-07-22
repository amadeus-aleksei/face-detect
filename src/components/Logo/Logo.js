import React from "react"
import './Logo.css'
import noir from './noir.png'

const Logo = () => {
    return(
        <div id='logo' className='container'>
            <img src={noir} alt='logo'/>
        </div>
    )
}

export default Logo