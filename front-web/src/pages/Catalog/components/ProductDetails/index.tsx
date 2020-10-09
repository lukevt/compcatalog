import React from 'react'
import  './styles.scss'
import {Link, useParams} from 'react-router-dom'
import {ReactComponent as ArrowIcon } from '../../../../core/assets/images/arrow.svg'
import {ReactComponent as ProductImage } from '../../../../core/assets/images/product.svg'
import ProductPrice from '../ProductPrice'

type ParamsType={
    productId: string
}
const ProductDetails = () =>{
    const {productId} = useParams<ParamsType>();
    console.log(productId)
    return (
        <div className="product-details-container">
            <div className="card-base border-radius-20 product-details">
                <Link to="/products" className="product-details-goback">
                    <ArrowIcon className="icon-goback"/>
                    <h1 className="text-goback">Go Back</h1>
                </Link>
                <div className="row">
                    <div className="col-6 pr-5">
                        <div className="product-details-card text-center">
                        <ProductImage className="product-details-image"/>
                        </div>
                        <h1 className="products-details-name">Desktop Computer -Intel Core i7</h1>
                        <ProductPrice price="3.799,00"/>
                        
                    </div>
                    <div className="col-6 product-details-card">
                        <h1 className="product-description-title">product description</h1>
                        <p className="product-description-text">
                        Be a multi-tasking master with the ability to display four simultaneous applications on the screen. 
                        Is the screen getting crowded? Create virtual desktops to get more space and work with the items you want. 
                        In addition, all notifications and key settings are brought together on a single, easily accessible screen.
                        </p>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default ProductDetails;