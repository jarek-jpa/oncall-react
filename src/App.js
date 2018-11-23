import React, { Component } from 'react';
import ScheduleCalendar from './ScheduleCalendar';
import './App.css';

let moment = require('moment');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentDate: moment() }
  }

  switchMonth(diff) {
    const newDate = moment(this.state.currentDate);
    newDate.add(diff, 'month');
    this.setState({currentDate: newDate});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />

        <div className="Calendar-navi">
          <button onClick={() => this.switchMonth(-1)}>prev</button>
        </div>

        <ScheduleCalendar year={this.state.currentDate.year()} month={this.state.currentDate.month()}/>

        <div className="Calendar-navi">
          <button onClick={() => this.switchMonth(1)}>next</button>
        </div>
      </div>
    );
  }
}

export default App;
