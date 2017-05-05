import React from 'react';
import axios from 'axios';

export default class Timesheet extends React.Component {
  constructor() {
    super();
    this.state = {
      idInput: '',
      timeIn: '',
      timeOut: '',
      comments: '',
      timeInId: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, inputType) {
    const newTime = new Date();
    switch (inputType) {
      case 'idInput':
        this.setState({ idInput: e.target.value });
        break;
      case 'timeIn':
        this.setState({ timeIn: newTime.toString() });
        break;
      case 'timeOut':
        this.setState({ timeOut: newTime.toString() });
        break;
      case 'comments':
        this.setState({ comments: e.target.value });
        break;
      default:
        return;
    }
  }

  handleSubmit() {
    const employeeId = this.state.idInput;
    // If a timeIn hasn't been submitted, create a timeIn
    if (this.state.timeInId === 0) {
      axios.post(`/times/${employeeId}`, {timeIn: this.state.timeIn})
        .then(res => res.data)
        .then(postedTimeIn => {
          this.setState({ timeInId: postedTimeIn.id })
        });
    } else { // Else, update the current timeIn with timeOut
      axios.put(`/times/${this.state.timeInId}`, { timeOut: this.state.timeOut })
      .then(res => res.data)
      .then((updatedTime) => {
        // reset timeInId to 0 so that a new timeIn can be submitted
        this.setState({timeInId: 0})
      })
    }
  }

  render() {
    return (
      <div>
        <header className="container-fluid">
          <h1>Timesheet</h1>
        </header>
        <div id="content" className="container-fluid">
          <form id="timesheet">
            <div className="form-group">
              <div className="col-xs-10">
                <input
                  placeholder="Employee Id"
                  className="form-control"
                  type="text"
                  onChange={e => this.handleChange(e, 'idInput')}
                  value={this.state.input}
                  required
                />
              </div>
              <div className="col-xs-10">
                <button
                  className="form-control"
                  onClick={e => this.handleChange(e, 'timeIn')}>
                  Time IN
                </button>
                {
                  this.state.timeIn ?
                    <div><h1>{this.state.timeIn.toString()}</h1></div> :
                    null
                }
              </div>
              <div className="col-xs-10">
                <button
                  className="form-control"
                  onClick={e => this.handleChange(e, 'timeOut')}
                  value={this.state.input}>
                  Time OUT
                </button>
                {
                  this.state.timeOut ?
                    <div><h1>{this.state.timeOut.toString()}</h1></div>
                    :
                    null
                }
              </div>
              <div className="col-xs-10">
                <textarea
                  placeholder="Comments"
                  className="form-control"
                  type="text"
                  onChange={e => this.handleChange(e, 'comments')}
                  value={this.state.input}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={!this.state.idInput}
                  onClick={this.handleSubmit}>
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
