import React from 'react';
import UserImportCss from './UserInput.css';

const userInput = (props) => {
    return (
        <div className='UserInput'>
            <label>Proszę wpisać nazwę: </label>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default userInput;