import React from 'react'
import {BrowserRouter, Switch,  Route} from 'react-router-dom'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Admin from './pages/Admin'
import Navbar from './core/components/Navbar'

const Routes =()=>(
    <BrowserRouter>
    <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/catalog" component={Catalog}/>
            <Route path="/admin" component={Admin}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;