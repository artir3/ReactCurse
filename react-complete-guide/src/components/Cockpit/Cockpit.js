import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    let btnClass = null;
    let assignedClasses = [];

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit} >
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}> To działa? </p>
            <button className={btnClass}
                onClick={props.clicked}>
                Toggle persons</button>
        </div>
    );
}

export default cockpit;