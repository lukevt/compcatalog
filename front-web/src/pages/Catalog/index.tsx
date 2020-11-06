import React, { useEffect, useState } from 'react'
import  './styles.scss'
import {makeRequest} from '../../core/utils/request'
import ProductCard from '../Catalog/components/ProductCard'
import ProductCardLoader from './components/Loaders/ProductCardLoader'
import {Link} from 'react-router-dom'
import {ProductsResponse} from '../../core/types/Product'
import Pagination from 'core/components/Pagination'

const Catalog =()=>{
    const [productsResponse, setProductsResponse] = useState<ProductsResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setAcitvePage] = useState(0);
    useEffect(() => {
        const params ={
            page:activePage, 
            linesPerPage:12
        }
        setIsLoading(true);
        makeRequest({url:'/products', params})
        .then(response => setProductsResponse(response.data))
        .finally(()=>{
            setIsLoading(false);
        })

    }, [activePage])
    return (
        <div className="catalog-container">
        <h1 className="catalog-title">Product Catalog</h1>
        <div className="catalog-products">
            {isLoading ? <ProductCardLoader/> : (
                productsResponse?.content.map(product=>{
                    return(
                     <Link to={`/products/${product.id}`} key={product.id}>
                         <ProductCard product={product}/>
                     </Link>
                    ) 
                 })
            )}
            
            
        </div>
        {productsResponse &&  (
        <Pagination 
            totalPages={productsResponse?.totalPages} 
            activePage={activePage}
            onChange={page=>setAcitvePage(page)}
            />
        )}
        
    </div>
    )
};

export default Catalog;