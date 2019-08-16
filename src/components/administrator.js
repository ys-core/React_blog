
import React, { Component, Fragment } from 'react'
import $ from 'jquery'
import '../css/administrator.css'
class Administrator extends Component {
    constructor(props){
        super(props);

    }
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
                <div className="login_panel">
                      <div className="circle_bombing"><li></li><li></li><li></li><li></li></div>
                      <div className="signin"></div>
                      <div className="signup"></div>
                </div>
            </Fragment>
        )
    }
}

export default Administrator