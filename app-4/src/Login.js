import React, {Component} from 'react';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleClick(e) {
    alert(`Username:${this.state.username} Password:${this.state.password}`);
  }

  render() {
    return(
      <div>
        <input name="username" onChange={this.handleInput}/>
        <input name="password" onChange={this.handleInput}/>
        <button onClick={this.handleClick}>Login</button>
      </div>
    );
  }
}

export default Login;