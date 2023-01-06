import { configureStore } from "@reduxjs/toolkit";
import products from './slices/products.slice';
import userInfo from './slices/userInfo.slice';
import cart from './slices/cart.slice';
import mesageError from './slices/mesageError.slice';

export default configureStore({
    reducer: {
        products,
        userInfo,
        cart,
        mesageError
    }
});