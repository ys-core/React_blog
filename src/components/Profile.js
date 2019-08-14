
import React from 'react'

import '../css/Profile.css'

import logo from '../logo.svg'

function FormattedDate(props) {
  return <h2>{props.date.toLocaleDateString()}-{props.date.toLocaleTimeString()}.</h2>;
}
 
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
 
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
 
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
 
  tick() {
    this.setState({
      date: new Date()
    });
  }
 
  render() {
    return (
      <div>
        <img src={logo} className="logo" alt="src" />
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}
 
function Profile() {
  return (
    <div className="profile_container">
      <div className="profile">
         <Clock />
      </div>

    </div>
  );
}


export default Profile;