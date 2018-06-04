import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}> My name is {props.name} and i have {props.age}</p>
            <p> {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
    //  return <p>  nr {Math.floor(Math.random() * 30 )}? </p>   
};

export default person;