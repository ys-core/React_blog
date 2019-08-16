

import React from 'react'
import  {BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../App'

const MyRoutes = () => {
    <BrowserRouter>
       <Switch>
           <Route exact path="/home" component={Home}></Route>
       </Switch>
    </BrowserRouter>
}

export default MyRoutes