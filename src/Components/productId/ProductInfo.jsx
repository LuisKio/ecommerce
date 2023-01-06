import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProductCart } from '../../store/slices/cart.slice';
import './styles/productInfo.css';

const positionImg = ['first', 'second', 'third'];

const ProductInfo = ({ product }) => {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const [currentImg, setcurrentImg] = useState(0);
    const { token } = useSelector(state => state.userInfo);

    const handlePlus = () => {
        setQuantity(quantity + 1);
    }

    const handleMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleClickUpdate = () => {
        const data = {
            id: product.id,
            quantity: quantity
        }

        token ? dispatch(addProductCart(data)) : navigate('/login');
    }

    const handleClickLeft = () => {
        if(currentImg >= 1) { 
            setcurrentImg(currentImg-1)
        }else{
            setcurrentImg(2);
        }
    }

    const handleClickRight = () => {
        if(currentImg <= 1) { 
            setcurrentImg(currentImg+1)
        }else{
            setcurrentImg(0);
        }
    }


    return (
        <article className='productInfo'>
            <div className='productInfo__slider'>
                <div className={`productInfo__slider-container ${positionImg[currentImg]}`}>
                    <img src={product?.productImgs[0]} alt={product?.title} />
                    <img src={product?.productImgs[1]} alt={product?.title} />
                    <img src={product?.productImgs[2]} alt={product?.title} />
                </div>
                <i className='productInfo__slider-arrowLeft bx bx-chevron-left' onClick={handleClickLeft}></i>
                <i className='productInfo__slider-arrowRight bx bx-chevron-right' onClick={handleClickRight}></i>
            </div>
            <div className='producctInfo__info'>
                <h2 className='productInfo__title'>{product?.title}</h2>
                <p className='productInfo__description'>{product?.description}</p>
                <footer className='productInfo__footer'>
                    <div className='productInfo__container-price'>
                        <h3 className='productInfo__price-title'>Price</h3>
                        <span className='productInfo__price'>$ {product?.price}</span>
                    </div>
                    <div className='productInfo__container-quantity'>
                        <h3 className='productInfo__quantity-title'>Quantity</h3>
                        <div className='productInfo__container-counter'>
                            <div className='productInfo__minus' onClick={handleMinus}>-</div>
                            <div className='productInfo__counter' >{quantity}</div>
                            <div className='productInfo__plus' onClick={handlePlus}>+</div>
                        </div>
                    </div>
                    <button onClick={handleClickUpdate} className='productInfo__btn'>Add to cart <i className='bx bxs-cart' ></i></button>
                </footer>
            </div>

        </article>
    )
}

export default ProductInfo