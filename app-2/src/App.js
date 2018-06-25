import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      arr: ['burger', 'hot dog', 'soda', 'popcorn']
    }
  }

  render() {
    let arr = this.state.arr.map((el, i) => {
      return <h2 key={i}>{el}</h2>
    });

    return (
      <div className="App">
        {arr}
      </div>
    );
  }
}

export default App;
