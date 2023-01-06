import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductCart, getAllCartProducts } from '../../store/slices/cart.slice';
import './style/cartProduct.css'

const CartProduct = ({ cartProduct }) => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    const handleDeleteProduct = () => {
        dispatch(deleteProductCart(cartProduct.id));
    }

    useEffect(() => {
        dispatch(getAllCartProducts());
    }, []);


    const imgProduct = products.filter(product => product.id === cartProduct.id);


    return (
        <article className="cartProduct__section">
            <div className="cartProduct__section-content">
                <div className="cartProduct__section-content-img">
                    <img src={imgProduct[0]?.productImgs[0]} alt={cartProduct.title} />
                </div>

                <div className="cartProduct__section-content-txt">
                    <p>{cartProduct.title} <small>Suministrados y entregados por Academlo, S.A. DE C.V. </small></p>
                </div>
            </div>

            <div className="cartProduct__section-quantity">
                <div className='productInfo__container-ct'>
                    <span>{cartProduct.productsInCart.quantity}</span>
                </div>

                <div className='productInfo__container-pr'>
                    <span className='cartProduct__price'>${(cartProduct.price * cartProduct.productsInCart.quantity).toFixed(2)}</span>
                </div>
            </div>

            <button onClick={handleDeleteProduct} className='cartProduct__section-btn'>
                <i className='bx bx-trash' ></i>
            </button>
        </article>

    )
}

export default CartProduct