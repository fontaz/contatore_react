import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    counter: 0
  }

  render() {
    return (
      <div class="sas">
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={() => this.setState({counter: this.state.counter + 1})}>
          Aumenta
        </button>
        <button onClick={() => this.setState({counter: this.state.counter - 1})}>
          Diminuisci
        </button>
      </div>
    );
  }
}

export default App;
