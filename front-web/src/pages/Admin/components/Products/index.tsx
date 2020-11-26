import React from 'react'
import {Route, Switch } from 'react-router-dom'
import List from './List'
import Form from './Form'

const Products = () =>{
    return (
        <div className="admin-products-container">
            {/* <Link to="/admin/products" className="mr-5">List Products</Link>
            <Link to="/admin/products/create" className="mr-5"> Create Product</Link>
            <Link to="/admin/products/:productId" className="mr-5"> Update Product</Link> */}
            <Switch>
                <Route path="/admin/products" exact>
                    <List/>
                </Route>
                <Route path="/admin/products/:productId">
                    <Form/>
                </Route>
            </Switch>
        </div>
    )
}

export default Products;