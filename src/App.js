import React, { Component } from 'react';
import './App.css';
let moment = require('moment');

class App extends Component {
  buildDays(year, month) {
    const firstOf = moment([year, month, 1]);
    const days = [];
    let current = moment(firstOf);
    // TODO: refactor to generators
    while (current.isSame(firstOf, 'month')) {
      days.push(moment(current));
      current.add(1, 'day');
    }

    return days;
  }

  renderDays() {
    const now = moment();
    return this.buildDays(now.year(), now.month()).map((d,i) =>
      <div key={i}>{d.format('DD-MMM-Y')}</div>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.renderDays()}

        </header>
      </div>
    );
  }
}

export default App;
