import React, { useEffect, useState, useCallback } from 'react'
import './styles.scss'
import {useHistory} from 'react-router-dom'
import Card from '../Card'
import { ProductsResponse } from 'core/types/Product'
import { makePrivateRequest, makeRequest } from 'core/utils/request'
import Pagination from 'core/components/Pagination'
import { toast } from 'react-toastify'

const List = () =>{
    const [productsResponse, setProductsResponse] = useState<ProductsResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setAcitvePage] = useState(0);
    const getProducts = useCallback(()=>{
        const params ={
            page:activePage, 
            linesPerPage:4,
            direction:'DESC',
            orderBy:'id'
        }
        setIsLoading(true);
        makeRequest({url:'/products', params})
        .then(response => setProductsResponse(response.data))
        .finally(()=>{
            setIsLoading(false);
        })
    }, [activePage]);
    useEffect(() => {
        getProducts();

    }, [getProducts])
    const history = useHistory();
    const handleCreate=()=>{
        history.push("products/create")
    }

    const onRemove = (productId:number)=>{
        const confirm = window.confirm('Are you sure yoy wish to delete the item!')
        if(confirm){
            makePrivateRequest({url:`/products/${productId}`, method:'DELETE'})
        .then(()=>{
            toast.info('Product sucessfully deleted!')
            getProducts()
        })
        .catch(()=>{
            toast.error('Error deleting the product!')
            
        })
        }  
    }
    return (
        <div className="admin-products-list-container">
            <button className="btn btn-primary btn-lg" onClick={handleCreate}>
                Add Product
            </button>
            <div className="admin-list-container">
                {productsResponse?.content.map(product=>(  
                    <Card product={product} key={product.id} onRemove={onRemove}/>
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