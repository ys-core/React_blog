// import React from 'react';

// import Input from '@material-ui/core/Input';
// import Button from '@material-ui/core/Button'

// function Test() {
//   return (
//     <div>
//         <Input autoFocus="true" type="string" placeholder="username or email" fullWidth></Input><br/><br/>
//         <Input placeholder="password" type="password" fullWidth></Input><br/><br/><br/>
//         <Button color="primary" fullWidth variant="outlined">Submit</Button>
//     </div>
//   );
// }

// export default Test


import React, { Component } from 'react'
import { DatePicker, Button,Icon, Col, Row } from 'antd'

import { Typography, Affix } from 'antd';
import 'antd/dist/antd.css'
const { Text, Title, Paragraph } = Typography;





class Demo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      top: 100,
      bottom: 500,
    };
  }

  render() {
    return (
      <div>
        <Affix offsetTop={this.state.top}>
          <Button
            type="primary"
            onClick={() => {
              this.setState({
                top: this.state.top + 10,
              });
            }}
          >
            Affix top
          </Button>
        </Affix>
        <br />
        <Affix offsetBottom={this.state.bottom}>
          <Button
            type="primary"
            onClick={() => {
              this.setState({
                bottom: this.state.bottom + 10,
              });
            }}
          >
            Affix bottom
          </Button>
        </Affix>
      </div>
    );
  }
}



class ContentTemplate extends Component{
 render(){
  return(
    <Row>
      <Col span={14} offset={5}>
        <Title level={3}>{this.props.content.title}</Title>
        <Text type="secondary" >{this.props.content.editTime}</Text><br/>
        <Paragraph ellipsis={{ rows:3, expandable: true }}>{this.props.content.content}</Paragraph>
      </Col>
    </Row>
  )
 }
}

class Test extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const co ={
      title: "Nodejs Configuration",
      editTime: "24/08/2019",
      content: "学校源于1902年创建的三江师范学堂，历经国立中央大学、南京大学等发展时期；1952年由原南京大学、复旦大学、武汉大学、浙江大学、江南大学的有关系科组建南京工学院（现东南大学）食品工业系，1958年该系整建制东迁无锡，建立无锡轻工业学院，1995年更名为无锡轻工大学；2001年1月，经教育部批准，无锡轻工大学、江南学院、无锡教育学院合并组建江南大学；2003年，东华大学无锡校区并入江南大学。Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team."
    }
   return(
    <div className="animated slideInUp">
        <ContentTemplate content={co} />
        <ContentTemplate content={co} />
        <ContentTemplate content={co} />
        <ContentTemplate content={co} />
        <ContentTemplate content={co} />
        <Demo />
    </div>
   )
     
  };
}



export default Test




 
