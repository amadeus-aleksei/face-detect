import React from "react"
import './InputForm.css'

const InputForm = () => {
    return(
        <div id='input-form' className='container'>
            <h2>Input your image here to detect faces.</h2>
            <div className='container form-field'>
                <input placeholder='Insert text here...'></input>
                <button>Detect</button>
            </div>
        </div>
    )
}

export default InputForm