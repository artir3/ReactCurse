import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {
  state = {
    users: [
      { name: 'Domek' },
      { name: 'Tytus' },
      { name: 'Romek' }
    ]
  }

  render() {
    const style = {
      textAlign: 'center',
      border: '1px solid #eee',
      padding: '20px',
      backgroundColor: 'rgba(155, 137, 115, 0.377)'
    }

    return (
      <div style={style}>
        <UserInput
          changed={this.inputChangeHandler}
          name={this.state.users[1].name} />

        <UserOutput click={this.onClickEventHandler.bind(this, 'Coo?!')}
          name={this.state.users[0].name} />
        <UserOutput name={this.state.users[1].name} />
        <UserOutput name={this.state.users[2].name}
          click={() => this.onClickEventHandler('Nie ma mnie!')} />
      </div>
    )
  }

  inputChangeHandler = (event) => {
    this.setState({
      users: [
        { name: event.target.value },
        { name: event.target.value },
        { name: event.target.value }
      ]
    })
  }

  onClickEventHandler = (_name) => {
    this.setState({
      users: [
        { name: 'Domek' },
        { name: _name },
        { name: 'Romek' }
      ]
    })
  }
}

export default App;