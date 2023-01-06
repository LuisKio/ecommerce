import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom'
import { addProductCart } from '../../store/slices/cart.slice';
import './styles/productCard.css'

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { token } = useSelector(state => state.userInfo);

    const handleClickProduct = () => {
        navigate(`/products/${product.id}`);
    }

    const handleClickAddCard = (e) => {
        //DETIENE LA PROPAGACION DEL EVENTO PADRE.
        e.stopPropagation();

        const data = {
            id: product.id,
            quantity: 1
        }

        token ? dispatch(addProductCart(data)) : navigate('/login');
    }

    return (
        <article className='productCard' onClick={handleClickProduct}>
            <header className='productCard__header'>
                <img className='productCard__header-img1' src={product.productImgs[0]} alt={product.title} />
                <img className='productCard__header-img2' src={product.productImgs[1]} alt={product.title} />
            </header>
            <div className='productCard__body'>
                <h3 className='productCard__title'>{product.title}</h3>
                <h4 className='productCard__title-price'>Price</h4>
                <span className='productCard__price'>$ {product.price}</span>
                <button className='productCard__btn' onClick={handleClickAddCard}>
                    <i className='bx bxs-cart-add' ></i>
                </button>
            </div>
        </article>
    )
}

export default ProductCard