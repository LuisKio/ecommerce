import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../Components/cart/CartProduct'
import { getAllCartProducts, purchaseCart } from '../store/slices/cart.slice';
import './styles/cart.css'

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handlePurchaseCart = () => {
    const data = {
      "street": "Green St. 1456",
      "colony": "Southwest",
      "zipCode": 12345,
      "city": "USA",
      "references": "Some references"
    }

    dispatch(purchaseCart(data));
  }

  useEffect(() => {
    dispatch(getAllCartProducts());
  }, [])


  return (
    <main className='cart'>
      <section className='cart__list'>

        {
          !cart.length ? (
            <div className='cartEmpty'>
              <div className="cartEmpty__img">
                <img src='./img/logo.png' alt="" />
              </div>
              <h3>Not found products is cart</h3>
            </div>
          ) : <>
            <section className='cartProduct'>
              <header className="cartProduct__header">
                <div className="cartProduct__header-product">
                  <span>Product</span>
                </div>
                <div className="cartProduct__header-quantity">
                  <span>Quantity</span>
                  <span>Price</span>
                </div>
              </header>

              {
                cart.map(cartProduct => <CartProduct key={cartProduct.id} cartProduct={cartProduct} />)
              }
            </section>

            <div className="cart__btn-container">
              <button onClick={handlePurchaseCart} className='cart__btn'>Purchase cart</button>
            </div>
          </>
        }

      </section>
    </main >
  )
}

export default Cart