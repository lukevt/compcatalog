import React from 'react'
import {BrowserRouter, Switch,  Route, Redirect} from 'react-router-dom'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Admin from './pages/Admin'
import Navbar from './core/components/Navbar'
import ProductDetails from './pages/Catalog/components/ProductDetails'
import Auth from './pages/Auth'

const Routes =()=>(
    <BrowserRouter>
    <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/products" component={Catalog}/>
            <Redirect from="/admin/auth" to="/admin/auth/login" exact/>
            <Route to="/admin/auth">
                <Auth/>
            </Route>
            <Redirect from="/admin" to="/admin/products" exact/>
            <Route path="/admin">
                <Admin/>
            </Route>
            <Route path="/products/:productId" component={ProductDetails}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;