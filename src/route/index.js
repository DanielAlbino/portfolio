import Home from '../pages/Home'
import About from '../pages/About'
import Work from '../pages/Work'
import Contact from '../pages/Contact'
import {Switch, Route} from 'react-router-dom';
import React, { Component } from 'react';

class Routing extends Component {
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/work' component={Work}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
            </Switch>
        );
        }
}

export default Routing;