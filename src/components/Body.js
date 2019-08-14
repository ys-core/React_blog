import React, { Component, Fragment } from 'react'

import '../css/Body.css'

class Body extends Component{
    render(){
        return(
           <div className="body_container">
               <div className="header_container" >
                    <div className="header">
                        <div className="category_bar">
                          <ul>
                            <li>HOMEPAGE</li>
                            <li>CENTER</li>
                            <li>BLOG</li>
                            <li>ARTICLE</li>
                            <li>MORE..</li>
                         </ul>
                        </div>
                    </div>
               </div>
               <div className="content_container">
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