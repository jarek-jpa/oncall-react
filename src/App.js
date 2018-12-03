import React, { Component } from 'react';
import ScheduleCalendar from './ScheduleCalendar';
import './App.css';

let moment = require('moment');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment(),
      people: [
        {id: 1, name: 'Jarek'},
        {id: 2, name: 'Tomek'}
      ],
      rota: {'2018-12-31T00:00:00+01:00': 2}
    };
    this.rotaChanged = this.rotaChanged.bind(this);
  }

  switchMonth(diff) {
    const newDate = moment(this.state.currentDate);
    newDate.add(diff, 'month');
    this.setState({currentDate: newDate});
  }

  rotaChanged(d, person) {
    this.setState(state => {
      // TODO: wtf simplify
      let rotaDayObj = {};
      rotaDayObj[d.format()]=person;
      console.log('rotaDay: ' + JSON.stringify(rotaDayObj));

      let newRota = Object.assign({}, state.rota, rotaDayObj);
      console.log('newRota: ' + JSON.stringify(newRota));
      return { rota: newRota }
    });
    console.log('set state: ' + JSON.stringify(this.state));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />

        <div className="Calendar-navi">
          <button onClick={() => this.switchMonth(-1)}>prev</button>
        </div>

        <ScheduleCalendar year={this.state.currentDate.year()}
                          month={this.state.currentDate.month()}
                          rota={this.state.rota}
                          people={this.state.people}
                          rotaChanged={this.rotaChanged}/>

        <div className="Calendar-navi">
          <button onClick={() => this.switchMonth(1)}>next</button>
        </div>
      </div>
    );
  }
}

export default App;
