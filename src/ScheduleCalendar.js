import {Component} from "react";
import React from "react";
import './ScheduleCalendar.css';


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
      <div key={i}>{d.format('DD-MMM-Y')}</div>
    )
  }

  render() {
    return (
      <div className="ScheduleCalendar">
        {this.renderDays()}
      </div>
    )
  }
}
export default ScheduleCalendar;

