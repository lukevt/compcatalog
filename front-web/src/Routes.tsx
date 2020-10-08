import React from 'react'
import {BrowserRouter, Switch,  Route} from 'react-router-dom'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Admin from './pages/Admin'
import Navbar from './core/components/Navbar'
import ProductDetails from './pages/Catalog/components/ProductDetails'

const Routes =()=>(
    <BrowserRouter>
    <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/products" component={Catalog}/>
            <Route path="/admin" component={Admin}/>
            <Route path="/products/:productId" component={ProductDetails}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;