import React from 'react';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import { Switch, Route } from 'react-router-dom';
import Infographic from './Infographic';
import WorkCarousel from './WorkCarousel';


const Routing = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact={true} component={Home}></Route>
                <Route path="/home" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/infographic" component={Infographic}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Route path="*" component={Error}></Route>
            </Switch>
        </>
    )
}

export default Routing;