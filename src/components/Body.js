import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'


import '../css/body.css'

import store from '../redux/redux.js'


import { Pagination, Typography, Col, Row} from 'antd'
import 'antd/dist/antd.css'
const { Text, Title, Paragraph } = Typography


class ContentTemplate extends Component{
    constructor(props){
        super(props)
    }
    render(){
        
    return(
        <div style={{border:'2px solid white', marginBottom:'2rem'}} href={`/article/${this.props.content.key}?username=yongsongLee`}>
            <Link to={`/article/${this.props.content.key}?username=yongsongLee`}>
                <Row> 
                <Col span={18} offset={2}>
                    <Title level={3}>{this.props.content.title}</Title>
                    <Text type="secondary" className="article_property" style={{"marginLeft":"2em","marginBottom":"2em","fontSize":"12px"}} >{this.props.content.editTime}</Text>
                    <Text type="secondary" className="article_property" style={{"marginLeft":"2em","marginBottom":"2em","fontSize":"12px"}} >{this.props.content.category}</Text><br/>
                    <Paragraph ellipsis={{ rows:3, expandable: true }} style={{"textIndent":"2em","lineHeight":"28px"}}>{this.props.content.content}</Paragraph>
                </Col>
                </Row>
            </Link>
        </div>
    )
    }
}

class Body extends Component{
    constructor(props){
        super(props)
        let obtain_last_page = window.sessionStorage.getItem("last_view_page") // obtain previous pagination index from seesion storage when return back to hoempage
        this.state = { 
            article_num: 200,        //  pagination
            currenetPage: JSON.parse(obtain_last_page) || 1
        }
    }
    componentDidMount(){
        console.log(store.getState())
        window.addEventListener('scroll', this.handleScrollEvent.bind(this))
        this.generateRandomColorValue()
        
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScrollEvent.bind(this))
        let session_storage = window.sessionStorage   // just for that still be the previous homepage status when return back to homepage not the Page 1, so save the page index in SessionStorage for later useage before leaving homepage.
        session_storage.setItem("last_view_page",this.state.currenetPage);
    }
    handleScrollEvent(event){
        // 滚动的高度
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false) || window.pageYOffset || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        // 视窗高度
        // const clientHeight = (event.srcElement && event.srcElement.documentElement.clientHeight) || document.body.clientHeight;
        // 页面高度
        // const scrollHeight = (event.srcElement && event.srcElement.documentElement.scrollHeight) || document.body.scrollHeight;
        // 距离页面底部的高度
        // const height = scrollHeight - scrollTop - clientHeight;
        // 判断距离页面底部的高度
        // console.log(scrollTop,clientHeight,scrollHeight,height)
        if(scrollTop < 20 && this.refs.home_header){
            this.refs.home_header.style.display = 'block'
        }
        else{
            if(this.refs.home_header){
                this.refs.home_header.style.display = 'none'
            }
        }
    }
    generateRandomColorValue(){
        for(let i = 0; i < 12; i++ ){
            let r = Math.floor(Math.random()*255);let g = Math.floor(Math.random()*255);let b = Math.floor(Math.random()*255);let a = Math.random();
            let value = 'rgba('+r+','+g+','+b+','+a+')';
            $('.sort_block > li:eq('+i+')').css("background",value)
        }
    }
    pageChange(page){
        // reset the content which should be displayed after the page index changed.
        this.setState({
            currenetPage: page,
        })
    }
    commonHandleHover(){
        $('.default_homepage').css({"color":"black","border-bottom":"0px solid tomato"})
    }
    commonHandleLeave(){
        $('.default_homepage').css({"color":"red","border-bottom":"2px solid tomato"})
    }
    render(){
        const co ={
            title: "Nodejs Configuration",
            key: '2019_128',
            editTime: "24/08/2019",
            category: 'JavaScript',
            content: "学校源于1902年创建的三江师范学堂，历经国立中央大学、南京大学等发展时期；1952年由原南京大学、复旦大学、武汉大学、浙江大学、江南大学的有关系科组建南京工学院（现东南大学）食品工业系，1958年该系整建制东迁无锡，建立无锡轻工业学院，1995年更名为无锡轻工大学；2001年1月，经教育部批准，无锡轻工大学、江南学院、无锡教育学院合并组建江南大学；2003年，东华大学无锡校区并入江南大学。Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team."
        }
        return(
           <div className="body_container">
               <div className="header_container animated slideInDown" ref="home_header" >
                    <div className="header">
                        <div className="category_bar">
                          <ul>
                            <li className="default_homepage"><Link to="/" style={{textDecoration:'none'}}>HOMEPAGE</Link></li>
                            <li className="common_router" onMouseOut={()=>{this.commonHandleLeave()}} onMouseEnter={()=>this.commonHandleHover()}><Link to="/test" style={{textDecoration:'none'}}>CENTER</Link></li>
                            <li className="common_router" onMouseOut={()=>{this.commonHandleLeave()}} onMouseOver={()=>this.commonHandleHover()}><Link to="/blog" style={{textDecoration:'none'}}>BLOG</Link></li>
                            <li className="common_router" onMouseOut={()=>{this.commonHandleLeave()}} onMouseOver={()=>this.commonHandleHover()}><Link to="/article" style={{textDecoration:'none'}}>ARTICLE</Link></li>
                            <li className="common_router" onMouseOut={()=>{this.commonHandleLeave()}} onMouseOver={()=>this.commonHandleHover()}><Link to="/notes" style={{textDecoration:'none'}}>NOTES</Link></li>
                            <li className="common_router" onMouseOut={()=>{this.commonHandleLeave()}} onMouseOver={()=>this.commonHandleHover()}><Link to="/administrator" style={{textDecoration:'none'}}>MORE..</Link></li>
                         </ul>
                        </div>
                    </div>
               </div>
               <div className="content_container animated bounceInUp">
                    {/* <div className="sort_block_container">
                        <div className="sort_block">娱乐中心<li></li><li></li><li></li></div>
                        <div className="sort_block">博客园地<li></li><li></li><li></li></div>
                        <div className="sort_block">知识天地<li></li><li></li><li></li></div>
                        <div className="sort_block">吐槽站<li></li><li></li><li></li></div>
                    </div> */}

                    <ContentTemplate content={co} />
                    <ContentTemplate content={co} />
                    <ContentTemplate content={co} />
                    <ContentTemplate content={co} />
                    <ContentTemplate content={co} />
                    <ContentTemplate content={co} />
                    <ContentTemplate content={co} />
                    <ContentTemplate content={co} />
                    <ContentTemplate content={co} />
                    <ContentTemplate content={co} />
                    <ContentTemplate content={co} />
                    <ContentTemplate content={co} />
                    <ContentTemplate content={co} />
                    <ContentTemplate content={co} />
                    <ContentTemplate content={co} />
                    <ContentTemplate content={co} />
                    <ContentTemplate content={co} />
                    <ContentTemplate content={co} />
                    <ContentTemplate content={co} />
                    <ContentTemplate content={co} />
                    <ContentTemplate content={co} />
                    
               </div>
               <Pagination size="small" current={this.state.currenetPage} onChange={this.pageChange.bind(this)} total={this.state.article_num} showQuickJumper />
               
           </div>
        )
    }
}

export default Body