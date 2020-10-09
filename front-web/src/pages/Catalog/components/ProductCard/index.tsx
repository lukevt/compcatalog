import React from 'react'
import  './styles.scss'
import {ReactComponent as ProductImage} from '../../../../core/assets/images/product.svg'
import ProductPrice from '../ProductPrice'

const ProductCard =()=>(
    <div className="card-base border-radius-10 product-card">
        <ProductImage/>
        <div className="product-info">
            <h6 className="product-name">
                Desktop Computer - Intel Core i7 
            </h6>
           <ProductPrice price={"2.799,00"}/>
        </div>

    </div>
);

export default ProductCard;