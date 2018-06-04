import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asd', name: 'Dupek', age: 12 },
      { id: 'asds', name: 'Zgred', age: 65 },
      { id: 'asda', name: 'Mordek', age: 35 }
    ],
    somethingElse: 'nnnnnn',
    showPersons: true
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let personss = null;
    if (this.state.showPersons) {
      personss = (
        <div>
          {/* taka wersja fore */}
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>
          Testowy program
        </h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Show persons
        </button>
        {personss}
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
