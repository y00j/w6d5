import React from 'react';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      time: new Date()
    };
    setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    console.log(typeof new Date());
    this.setState( {time: new Date()} );
  }
  render(){

    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    let seconds = this.state.time.getSeconds();
    let minutes = this.state.time.getMinutes();
    let hours = this.state.time.getHours();
    let ampm = hours > 12 ? "pm" : "am";

    let month = this.state.time.getMonth();
    let day = this.state.time.getDate();
    let year = this.state.time.getFullYear();

    hours >= 12 ? hours = hours - 12: hours;

    return (
      <div className="clock">
        <h1> HAMMER TIME! </h1>
        <h2>{hours}:{minutes}:{seconds} {ampm}</h2>
        <h3>{months[month]} {day} {year}</h3>
      </div>
    );
  }
}


export default Clock;
