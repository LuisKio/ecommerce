import React from 'react'
import './style/productPurchase.css';

const ProductPurchase = ({ product }) => {
    return (
        <article className='productPurchase'>
            <div className="productPurhcase__title">
                <h4>{product.title}</h4>
            </div>

            <div className="productPurchase__content">
                <h4 className='productPurchase__quantity'>{product.quantity}</h4>
                <h4 className='productPurchase__price'>$ {(product.price * product.productsInCart.quantity).toFixed(2)}</h4>
            </div>

        </article>
    )
}

export default ProductPurchase