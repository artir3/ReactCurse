import React from 'react';
import UserOutputCss from './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className='UserOutput' onClick={props.click}>
            <p>
                <label>Nazwa: </label>
                {props.name}
            </p>
        </div>
    )
}

export default userOutput;