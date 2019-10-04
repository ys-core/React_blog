
import React, { Component } from 'react'
import { Result, Button } from 'antd'

export default class CommitWarning extends Component{
    constructor(props){
        super(props)

    }
    render(){
      return(
        <Result
            status="warning"
            title="There are some problems with your operation, please return back to check the content format."
            extra={
            <Button type="primary" key="console">
                Go Back
            </Button>
            }
        />
      )
    }
}