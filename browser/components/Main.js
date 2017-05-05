import React from 'react';
import { Link } from 'react-router';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      initialActive: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ initialActive: !this.state.initialActive });
  }

  render() {
    return (
      <div id="main" className="col-xs-12">
        <h1 className="text-center"> Broadway Auto Parts Timesheet </h1>
        <ul className="nav nav-tabs">
          <li
            role="presentation"
            className={this.state.initialActive ? 'active' : ''}
            onClick={this.handleClick}>
            <Link to="/timesheet">Submit Time</Link>
          </li>
          <li
            role="presentation"
            className={this.state.initialActive ? '' : 'active'}
            onClick={this.handleClick}>
            <Link to="/employee">Create Account</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
