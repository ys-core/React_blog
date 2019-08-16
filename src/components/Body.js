import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

import '../css/body.css'
import { transform } from '@babel/core';


class Body extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentDidMount(){
        this.generateRandomColorValue()
        var timer = setInterval(()=>{
           this.generateRandomColorValue()
        },2000);
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    generateRandomColorValue(){
        for(let i = 0; i < 12; i++ ){
            let r = Math.floor(Math.random()*255);let g = Math.floor(Math.random()*255);let b = Math.floor(Math.random()*255);let a = Math.random();
            let value = 'rgba('+r+','+g+','+b+','+a+')';
            $('.sort_block > li:eq('+i+')').css("background",value)
        }
    }
    commonHandleHover(){
        $('.default_homepage').css({"color":"black","border-bottom":"0px solid tomato"})
    }
    commonHandleLeave(){
        $('.default_homepage').css({"color":"red","border-bottom":"2px solid tomato"})
    }
    render(){
        return(
           <div className="body_container">
               <div className="header_container" >
                    <div className="header">
                        <div className="category_bar">
                          <ul>
                            <li className="default_homepage"><Link to="/" style={{textDecoration:'none'}}>HOMEPAGE</Link></li>
                            <li className="common_router" onMouseOut={()=>{this.commonHandleLeave()}} onMouseEnter={()=>this.commonHandleHover()}><Link to="/center">CENTER</Link></li>
                            <li className="common_router" onMouseOut={()=>{this.commonHandleLeave()}} onMouseOver={()=>this.commonHandleHover()}><Link to="/blog">BLOG</Link></li>
                            <li className="common_router" onMouseOut={()=>{this.commonHandleLeave()}} onMouseOver={()=>this.commonHandleHover()}><Link to="/article">ARTICLE</Link></li>
                            <li className="common_router" onMouseOut={()=>{this.commonHandleLeave()}} onMouseOver={()=>this.commonHandleHover()}><Link to="/more">MORE..</Link></li>
                         </ul>
                        </div>
                    </div>
               </div>
               <div className="content_container">
                    <div className="sort_block_container">
                        <div className="sort_block">娱乐中心<li></li><li></li><li></li></div>
                        <div className="sort_block">博客园地<li></li><li></li><li></li></div>
                        <div className="sort_block">知识天地<li></li><li></li><li></li></div>
                        <div className="sort_block">吐槽站<li></li><li></li><li></li></div>
                    </div>
                    <h1>hellowrod</h1>
                    <h1>hellowrod</h1>
                    <h1>hellowrod</h1>
                    <h1>hellowrod</h1>
               </div>

           </div>
        )
    }
}

export default Body