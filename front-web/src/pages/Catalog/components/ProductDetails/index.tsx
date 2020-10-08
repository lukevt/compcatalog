import React from 'react'
import  './styles.scss'
import {useParams} from 'react-router-dom'

type ParamsType={
    productId: string
}
const ProductDetails = () =>{
    const {productId} = useParams<ParamsType>();
    console.log(productId)
    return (
        <div className="product-details-container">
            <div className="product-details-card card-base border-radius-20">
                <h1>Products Details</h1>
            </div> 
        </div>
    );
};

export default ProductDetails;