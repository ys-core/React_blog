import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'    //router


import './css/index.css';
import App from './App';
import Profile from './components/profile'
import Administrator from './components/administrator'
import EditArticle from './components/editArticle'
import Notfound from './components/notfound'
import Test from './components/Test'

import { Provider } from 'react-redux'
import { createStore } from 'redux'


import * as serviceWorker from './serviceWorker';


const routings = (

        <Router  basename="/blog">
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route exact path="/more" component={Profile}></Route>
                <Route exact path="/administrator" component={Administrator}></Route>
                <Route exact path="/article" component={EditArticle}></Route>
                <Route eaact path="/test" component={Test}></Route>
                <Route component={Notfound}></Route>
            </Switch>
        </Router>

)

ReactDOM.render( routings, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
