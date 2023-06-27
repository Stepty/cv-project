import React, { useState } from 'react'
import './styles/Input.css'
export default function Input( {id, info, setInfo, placeholder} ) {
    const [ display, setDisplay ] = useState('Form');

    const handleSubmit = (e) => {
        e.preventDefault();
        const { target } = e;
        const { inputName } = target;
        const { placeholder, value } = inputName;

        setInfo(
            {   
                ...info,
                [placeholder]: value
            }
        )
        setDisplay('Info');
    }
    const handleClick = () => {
        setDisplay('Form');
        setInfo({...info, [info]: ''})
    }
    if (info[placeholder] === '') {
        setInfo({...info, [info]: 'Click to add'})
        // info[placeholder] = 'Click to add';
    }

    if (display === 'Info') {
        return (
            <form id={id}>
                <p onClick={handleClick}>{info[placeholder]}</p>
            </form>
        )
    }
    else {
  return (
    <form id={id} onSubmit={handleSubmit}>
        {/* <p>{info[placeholder]}</p> */}
        <input type="text" name="inputName" placeholder={placeholder} ></input>
    </form> 
  )
}
}

