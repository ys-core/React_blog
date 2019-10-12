import React, { Component } from 'react'

import '../css/articleContent.css'

class ArticleContent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>{this.props.match.params.index}
              <p>{this.props.location.search}</p>
            </div>
        )
    }

}

export default ArticleContent