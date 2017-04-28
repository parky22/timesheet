import React from 'react';
import axios from 'axios';

export default class Timesheet extends React.Component {
  constructor() {
    super();
    this.state = {
      idInput: '',
      timeIn: '',
      timeOut: '',
      comments: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, inputType) {
    switch (inputType) {
      case 'idInput':
        this.setState({ idInput: e.target.value });
        break;
      case 'timeIn':
        this.setState({ timeIn: e.target.value });
        break;
      case 'timeOut':
        this.setState({ timeOut: e.target.value });
        break;
      case 'comments':
        this.setState({ comments: e.target.value });
        break;
      default:

    }
  }

  handleSubmit() {
    const employeeId = this.state.idInput;
    const submitInfo = {
      timeIn: this.state.timeIn,
      timeOut: this.state.timeOut
    }
    axios.post(`/employees/${employeeId}`, submitInfo)
      .then(res => res.data)
  }

  render() {
    return (
      <div>
        <header className='container-fluid'>
          <h1>Timesheet</h1>
        </header>
        <div id='content' className='container-fluid'>
          <form id='timesheet' onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="col-xs-2 control-label">Employee Id (required): </label>
              <div className="col-xs-10">
                <input
                  className="form-control"
                  type="text"
                  onChange={(e) => this.handleChange(e, 'idInput')}
                  value={this.state.input}
                  required
                />
              </div>
              <label className="col-xs-2 control-label">Punched IN Time: </label>
              <div className="col-xs-10">
                <input
                  className="form-control"
                  type="text"
                  onChange={(e) => this.handleChange(e, 'timeIn')}
                  value={this.state.input}
                  required
                />
              </div>
              <label className="col-xs-2 control-label">Punched OUT Time: </label>
              <div className="col-xs-10">
                <input
                  className="form-control"
                  type="text"
                  onChange={(e) => this.handleChange(e, 'timeOut')}
                  value={this.state.input}
                  required
                />
              </div>
              <label className="col-xs-2 control-label">Comments: </label>
              <div className="col-xs-10">
                <textarea
                  className="form-control"
                  type="text"
                  onChange={(e) => this.handleChange(e, 'comments')}
                  value={this.state.input}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={!this.state.input}>
                  Submit
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
