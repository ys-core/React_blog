
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'

import '../css/administrator.css'

class Administrator extends Component {
    
    componentDidMount(){
        this.generateRandomColorValue()
        var timer = setInterval(()=>{
           this.generateRandomColorValue()
        },2000);
    }
    generateRandomColorValue(){
        for(let i = 0; i < 4; i++ ){
            let r = Math.floor(Math.random()*255);let g = Math.floor(Math.random()*255);let b = Math.floor(Math.random()*255);
            let value = 'rgba('+r+','+g+','+b+')';
            $('.circle_bombing > li:eq('+i+')').css("background",value)
        }
    }
    render(){
        console.log(this.props)
        return(
            <Fragment>
                <h1>Administrator Center</h1>
                <Link to="/"><span className="return_btn">返回</span></Link>
                <div className="login_panel">
                      <div className="signin">
                        <Input autoFocus="true" type="string" placeholder="username or email" fullWidth></Input><br/><br/><br/>
                        <Input placeholder="password" type="password" fullWidth></Input><br/><br/><br/><br/>
                        <Button color="secondary" fullWidth variant="contained">Sign In</Button><br/><br/>
                        <Link to="/administrator/find_password" style={{textDecoration:'none'}}><span className="forget_password">forget password ?</span></Link>
                      </div>
                      <div className="circle_bombing"><li>hello</li><li></li><li></li><li>hello</li></div>
                </div>
            </Fragment>
        )
    }
}

export default Administrator