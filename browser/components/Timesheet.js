import React from 'react';

export default class Timesheet extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({input: e.target.value});
  }

  handleSubmit() {
    console.log('Not sure what to do yet');
  }

  render() {
    return (
      <div>
        <header class='container-fluid'>
          <h1>Timesheet</h1>
        </header>
        <div id='content' class='container-fluid'>
          <form id='timesheet' onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="col-xs-2 control-label">Employee Id (required): </label>
              <div className="col-xs-10">
                <input
                  className="form-control"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.input}
                />
              </div>
              <label className="col-xs-2 control-label">Punched IN Time: </label>
              <div className="col-xs-10">
                <input
                  className="form-control"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.input}
                />
              </div>
              <label className="col-xs-2 control-label">Punched OUT Time: </label>
              <div className="col-xs-10">
                <input
                  className="form-control"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.input}
                />
              </div>
              <label className="col-xs-2 control-label">Comments: </label>
              <div className="col-xs-10">
                <textarea
                  className="form-control"
                  type="text"
                  onChange={this.handleChange}
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
