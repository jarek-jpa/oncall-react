import {Component} from "react";
import React from "react";

class ScheduleDay extends Component {
  constructor(props) {
    super(props);
    this.state = { whosOnRota: null };
    this.handleChangeWho = this.handleChangeWho.bind(this);
  }

  handleChangeWho(event) {
    let personId = event.target.value;
    // this.setState({ whosOnRota: personId});
    this.props.rotaChanged(this.props.day, personId);
  }

  render() {
    console.log('rendering day: ' + this.props.day.format());
    console.log('render who: ' + this.props.w);
    return (
      <span>
        <span>{this.props.day.format('DD-MMM-Y')}</span>
        /* TODO: WTF - this is shit that only '' means no value, which in turn means - take default*/
        <select value={this.props.w ? this.props.w : ''} onChange={this.handleChangeWho}>
          {this.props.people.map(person =>
            <option key={person.id} value={person.id}>{person.name}</option>
          )}
        </select>
      </span>
    );
  }

}

export default ScheduleDay;