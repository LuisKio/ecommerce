import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProductsGlobal: (state, action) => action.payload
    }
})

export const {setProductsGlobal} = productSlice.actions
export default productSlice.reducer;

export const getAllProducts = () => (dispatch) => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/products';

    axios.get(URL)
        .then(({data}) => {
            dispatch(setProductsGlobal(data.data.products));
        })
        .catch(err => {
            console.log(err);
        })
}