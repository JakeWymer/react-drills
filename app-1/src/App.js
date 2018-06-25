import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: ''
    }

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({userInput: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.handleInput}/>
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

export default App;
