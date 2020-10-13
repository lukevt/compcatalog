import React, { useEffect, useState } from 'react'
import  './styles.scss'
import {makeRequest} from '../../core/utils/request'
import ProductCard from '../Catalog/components/ProductCard'
import {Link} from 'react-router-dom'
import {ProductsResponse} from '../../core/types/Product'

const Catalog =()=>{
    const [productsResponse, setProductsResponse] = useState<ProductsResponse>();
    console.log(productsResponse)
    useEffect(() => {
        const params ={
            page:0,
            linesPerPage:12
        }
        makeRequest({url:'/products', params})
        .then(response => setProductsResponse(response.data))

    }, [])
    return (
        <div className="catalog-container">
        <h1 className="catalog-title">Product Catalog</h1>
        <div className="catalog-products">
            {productsResponse?.content.map(product=>{
               return(
                <Link to={`/products/${product.id}`} key={product.id}>
                    <ProductCard product={product}/>
                </Link>
               ) 
            })}
            
        </div>
    </div>
    )
};

export default Catalog;