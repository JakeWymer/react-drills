import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      userInput: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({userInput: e.target.value});
  }

  handleClick(e) {
    let arr = this.state.tasks.slice();
    arr.push(this.state.userInput);
    this.setState({tasks: arr});
  }

  render() {

    
    return (
      <div className="App">
        <input onChange={this.handleInput}/>
        <button onClick={this.handleClick}>Add</button>
        <Todo tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
