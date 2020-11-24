import ProductPrice from 'pages/Catalog/components/ProductPrice'
import React from 'react'
import './styles.scss'

const Card = () =>{
    return (
        <div className="card-base product-card-admin border-radius-10">
            <div className="row">
                <div className="col-2 text-center border-right py-3">
                    <img 
                        src="https://www.istore.pt/pub/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/m/b/mbp13touch_spacegray_1_3_1_2_1_1.jpg" 
                        alt="product test" 
                        className="product-image-admin"
                        />
                </div>
                <div className="col-7 py-3">
                    <h3 className="product-card-name-admin">
                        Macbook Pro
                    </h3>
                    <ProductPrice price={2600}/>
                    <div>
                        <span className="badge badge-pill badge-secondary mr-2">Category 1</span>
                        <span className="badge badge-pill badge-secondary mr-2">Category 2</span>
                        <span className="badge badge-pill badge-secondary mr-2">Category 3</span>
                    </div>
                </div>
                <div className="col-3 pt-3 pr-5">
                <button 
                type="button" 
                className="btn btn-outline-secondary btn-block border-radius-10 mb-3 btn-edit"
                >
                    UPDATE
                </button>

                <button 
                type="button" 
                className="btn btn-outline-danger  btn-block border-radius-10"
                >
                    DELETE
                </button>
                </div>

            </div>
        </div>
    )
}

export default Card;