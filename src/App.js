import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: 'Tjenare Henke'
    };
  }

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.state.string}
        </p>
        <button onClick={() => this.setState({ string: 'Ja då var det ändrat!' })}>
          Click me
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
