import React from "react"
import './InputForm.css'

const InputForm = () => {
    return(
        <div id='input-form' className='container'>
            <h2>Detects the presence of human faces and 
                envelops them with a bounding box.</h2>
            <div className='container form-field'>
                <input placeholder='Insert text here...'></input>
                <button>Detect</button>
            </div>
        </div>
    )
}

export default InputForm