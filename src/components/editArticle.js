
import React, { Component } from 'react'
import { Layout, Input, Menu, Icon, Radio } from 'antd'
import '../css/editArticle.css'

import BraftEditor from 'braft-editor'   // editor for react
import 'braft-editor/dist/index.css'

const { Sider, Content } = Layout

const { SubMenu } = Menu


class EditArticle extends Component{
    constructor(props){
        super(props);
        this.state=({
            editorState: null,
        })
    }
    editorState(){

    }
    handleEditorChange(){

    }
    submitContent(){

    }
    render(){
        return(
            <Layout>
                <Sider className="article_sider" width="22%" theme="light">
                    <Menu onClick={this.handleClick} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}  mode="inline" >
                        <SubMenu key="sub1"  title={ <span> <Icon type="mail" /><span>CREATE ARTICLE</span> </span>}>
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span> <Icon type="appstore" /><span>Navigation Two</span> </span>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub3"title={<span><Icon type="setting" /><span>Navigation Three</span></span>} >
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content className="article_content">
                  <div className="editor_warpper"><BraftEditor value={()=>this.editorState} onChange={()=>this.handleEditorChange} onSave={()=>this.submitContent} /></div>
                </Content>
            </Layout>
           
        )
    }
}

export default EditArticle