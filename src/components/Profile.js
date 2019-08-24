
import React from 'react'

import '../css/profile.css'
import '../css/animate.css'

import logo from '../svg/logo.svg'

function FormattedDate(props) {
  let day = ["Sun","Mon","Que","Wen","Thur","Fri","Sat"];
return <h2>{props.date.toLocaleDateString()}-{day[props.date.getDay()]}-{props.date.toLocaleTimeString()}.</h2>;
}
 
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date()};
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
            <Info />
         </div>
         
    </div>
  );
}

function Info() {
  return (
    <div className="detailed_info animated slideInLeft">
         <strong>个人信息</strong><br/><br/><hr/>
         <p>Caden, 男, 25岁, 身高182cm, 2017年毕业于某211院校信息与计算科学专业, 因想早点混社会, 最后发现社会水也深。现实的不如意, 更让如今菜鸟的我开始急于开发如下技能包, but在转往fullstack的路上身心疲惫, 未来将专注前端, 望早日实现财政自由:</p>
         
         <ul>
           <li>Frontend: Jquery, Vuejs, React</li>
           <li>Backend: NodeJs, Java</li>
           <li>Database: Mysql, MongoDB</li>
           <li>Linux....</li>
         </ul>
         <span className="funny_phrase">一个集智慧美貌于一身的美男子奈何没有女盆友。。</span><br/>
         <span className="funny_phrase">除了会编程, 还喜欢做饭, 打各种球, 撩妹, 目前我不会的估计就只有生孩子了。。。</span><br/><hr/>
         <span className="funny_phrase"> 忘了讲了我还喜欢吹牛~</span>
        <div className="built_tag">-------Built by React @ {new Date().getFullYear()}</div>
    </div>
  );
}



export default Profile;