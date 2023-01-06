import React, { useState } from 'react'
import { changeDateFormat } from '../../utils/date'
import ProductPurchase from './ProductPurchase'
import './style/purchaseCard.css'

const PurchaseCard = ({ purchase }) => {
    return (
        <article className='purchaseCard'>
            <div className="purchaseCard__header">
                <div className="purchaseCard__header-title">
                    <h2 className='purchaseCard__date'>{changeDateFormat(purchase.createdAt)}</h2>
                </div>

                <div className="purchaseCard__header-content">
                    <span>Quantity</span>
                    <span>Price</span>
                </div>
            </div>

            <section className="purchaseCard__list">
                {
                    purchase.cart.products.map(product => <ProductPurchase key={product.id} product={product} />)
                }
            </section>

        </article>
    )
}

export default PurchaseCard