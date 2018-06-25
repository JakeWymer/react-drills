import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      arr: ['burger', 'hot dog', 'ice cream', 'cheese burger', 'pop corn'],
      userInput: ''
    };
    this.renderList = this.renderList.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  renderList() {
    return this.state.arr.filter((el) => el.includes(this.state.userInput)).map((el, i) => {
      return <h2>{el}</h2>
    });
  }

  handleInput(e) {
    this.setState({userInput: e.target.value});
  }

  render() {
    let list = this.renderList();
    return (
      <div className="App">
        <input onChange={this.handleInput}/>
        {list}
      </div>
    );
  }
}

export default App;
