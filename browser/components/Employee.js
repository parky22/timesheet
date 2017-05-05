import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      employeeId: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit() {
    axios.post('/employees', { name: this.state.input })
      .then(res => res.data)
      .then(createdEmployee => {
        this.setState({ employeeId: createdEmployee.id })
      })
  }

  render() {
    return (
      <div>
        <header className="container-fluid">
          <h1> Create Employee Account </h1>
        </header>
        <div className="container-fluid">
        {
          this.state.employeeId ?
          <h1> {`${this.state.input}, your Employee ID is ${this.state.employeeId}`} </h1>
          :
          <form id="employee-form">
            <input
              placeholder="Full Name"
              onChange={e => this.handleChange(e)}
              value={this.state.input}
              required />
            <button
              type="submit"
              className="btn btn-success"
              onClick={this.handleSubmit}
              disabled={!this.state.input}>
              Submit
            </button>
          </form>
        }
        </div>
      </div>
    )
  }
}
