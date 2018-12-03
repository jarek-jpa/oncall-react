import {Component} from "react";
import React from "react";

import './ScheduleCalendar.css';
import ScheduleDay from './ScheduleDay';


let moment = require('moment');

class ScheduleCalendar extends Component {
  constructor(props) {
    super(props);
  }

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
    const currentMonth = moment([this.props.year, this.props.month, 1]);
    return this.buildDays(currentMonth.year(), currentMonth.month()).map((d,i) =>
      <div key={i}>
        <ScheduleDay day={d} people={this.props.people} rota={this.props.rota} w={this.props.rota[d.format()]} rotaChanged={this.props.rotaChanged}/>
      </div>
    )
  }

  render() {
    return (
      <div className="ScheduleCalendar">
        <form>
        {this.renderDays()}
        </form>
      </div>
    )
  }
}
export default ScheduleCalendar;

