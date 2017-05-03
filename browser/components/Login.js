import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1> WELCOME </h1>
        <input
          placeholder="Please Enter Employee Id"
          onChange={e => this.handleChange(e)}
          value={this.state.input} />
      </div>
    )
  }
}
