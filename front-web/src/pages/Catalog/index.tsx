import React from 'react'
import  './styles.scss'
import ProductCard from '../Catalog/components/ProductCard'
import {Link} from 'react-router-dom'

const Catalog =()=>(
    <div className="catalog-container">
        <h1 className="catalog-title">Product Catalog</h1>
        <div className="catalog-products">
            <Link to="/products/1"><ProductCard/></Link>
            <Link to="/products/2"><ProductCard/></Link>
            <Link to="/products/3"><ProductCard/></Link>
            <Link to="/products/4"><ProductCard/></Link>
            <Link to="/products/5"><ProductCard/></Link>
            <Link to="/products/6"><ProductCard/></Link>
            <Link to="/products/7"><ProductCard/></Link>
            <Link to="/products/8"><ProductCard/></Link>
            <Link to="/products/9"><ProductCard/></Link>
        </div>
    </div>
);

export default Catalog;