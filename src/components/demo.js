









// import 'braft-editor/dist/index.css'
// import React,{ Component } from 'react'
// import BraftEditor from 'braft-editor'
// import '../css/demo.css'

// class Demo extends Component {
//   state = {
//     editorState: BraftEditor.createEditorState('<p>Hello <b>welcome here!</b></p>'), 
//     outputHTML: '<p></p>'
//   }
//   componentDidMount () {
//     this.isLivinig = true
//     setTimeout(this.setEditorContentAsync, 3000)
//   }
//   componentWillUnmount () {
//     this.isLivinig = false
//   }
//   handleChange = (editorState) => {
//     this.setState({
//       editorState: editorState,
//       outputHTML: editorState.toHTML()
//     })
//   }
//   setEditorContentAsync = () => {
//     this.isLivinig && this.setState({
//       editorState: BraftEditor.createEditorState('<p>你好，<b>在此处开始编辑你的内容吧!</b><p>')
//     })
//   }
//   render () {

//     const { editorState, outputHTML } = this.state
//     return (
//       <div>
//         <div className="editor-wrapper">
//           <BraftEditor
//             value={editorState}
//             onChange={this.handleChange}
//           />
//         </div>
//         <h5>输出内容</h5>
//         <div className="output-content">{outputHTML}</div>
//       </div>
//     )

//   }

// }

// export default Demo

import React from 'react'
import { Form, Input, Radio, Button } from 'antd';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import '../css/demo.css'

class editContentForm extends React.Component {
    state = {
        articleType: '',
        editorState: BraftEditor.createEditorState('<p>Hello <b>welcome here !</b></p>'), // 设置编辑器初始内容
        outputHTML: '<p></p>'
    }
    componentDidMount () {
    this.isLivinig = true
    setTimeout(this.setEditorContentAsync, 3000)
    }
    componentWillUnmount () {
    this.isLivinig = false
    }

    handleChange = (editorState) => {     // the article content you inputted.
    this.setState({
        editorState: editorState,
        outputHTML: editorState.toHTML()
    })
    }
    articleType = (e) => {
        console.log('radio checked', e.target.value)
        this.setState({
            articleType: e.target.value
        })
    }
    setEditorContentAsync = () => {
    this.isLivinig && this.setState({
        editorState: BraftEditor.createEditorState('<p>主人，<b>在此处开始编辑你的内容吧!</b><p>')
    })
    }
    handleSubmit = e => {               // last click the button to submit the article to the server database.
        e.preventDefault();
    };
  

    render() {
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      }
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      }
      const { editorState, outputHTML } = this.state
      return (
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="title"><Input placeholder="input the article title ..." style={{width:400}}/></Form.Item>
          <Form.Item label="category"> <Input placeholder="select the article type ..." value={this.state.articleType} style={{width:200}}/>
           <Radio.Group buttonStyle="outline" onChange={this.articleType} value={this.state.articleType}>
               <Radio value="CSS">CSS</Radio>
               <Radio value="Javascript">Javascript</Radio>
               <Radio value="Typescript">Typescript</Radio>
               <Radio value="React">React</Radio>
               <Radio value="Vuejs">Vuejs</Radio>
               <Radio value= "Angular">Angular</Radio>
               <Radio value="Nodejs">Nodejs</Radio>
               <Radio value="Flutter">Flutter</Radio>
               <Radio value="Database">Database</Radio>
           </Radio.Group>
          </Form.Item>
          <Form.Item label=" ">
                <BraftEditor
                    value={editorState}
                    onChange={this.handleChange}
                    height={200}
                />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}><Button type="primary" htmlType="submit"> submit this article </Button> </Form.Item>
         <h5>输出内容</h5>
          <div className="output-content">{outputHTML}</div>
        </Form>
         
      );
    }
  }
  
  const Demo = Form.create({ name: 'editContent' })(editContentForm);

export default Demo