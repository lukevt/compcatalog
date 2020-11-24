import React, { useEffect, useState } from 'react'
import './styles.scss'
import {useHistory} from 'react-router-dom'
import Card from '../Card'
import { ProductsResponse } from 'core/types/Product'
import { makeRequest } from 'core/utils/request'
import Pagination from 'core/components/Pagination'

const List = () =>{
    const [productsResponse, setProductsResponse] = useState<ProductsResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setAcitvePage] = useState(0);
    console.log(productsResponse)
    useEffect(() => {
        const params ={
            page:activePage, 
            linesPerPage:4
        }
        setIsLoading(true);
        makeRequest({url:'/products', params})
        .then(response => setProductsResponse(response.data))
        .finally(()=>{
            setIsLoading(false);
        })

    }, [activePage])
    const history = useHistory();
    const handleCreate=()=>{
        history.push("products/create")
    }
    return (
        <div className="admin-products-list-container">
            <button className="btn btn-primary btn-lg" onClick={handleCreate}>
                Add Product
            </button>
            <div className="admin-list-container">
                {productsResponse?.content.map(product=>(  
                    <Card product={product} key={product.id}/>
                ))}
               {productsResponse &&  (
        <Pagination 
            totalPages={productsResponse?.totalPages} 
            activePage={activePage}
            onChange={page=>setAcitvePage(page)}
            />
        )}
            </div>
        </div>
    )
}

export default List;