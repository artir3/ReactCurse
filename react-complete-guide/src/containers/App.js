import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'asd', name: 'Dupek', age: 12 },
      { id: 'asds', name: 'Zgred', age: 65 },
      { id: 'asda', name: 'Mordek', age: 35 }
    ],
    somethingElse: 'nnnnnn',
    showPersons: false
  }

  render() {
    let _persons = null;

    if (this.state.showPersons) {
      _persons =
        <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
    }

    return (
      <div className={classes.App}>
        < Cockpit
          appTitle={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {_persons}
      </div>
    );
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // const person = Object.assign({}, this.state.persons[personIndex])
    const _person = { ...this.state.persons[personIndex] };
    _person.name = event.target.value;
    const _persons = [...this.state.persons];
    _persons[personIndex] = _person;

    this.setState({ persons: _persons })
  }
}

export default App;
