import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { activeError, messageNormal } from "./mesageError.slice";


const defaultValues = {
    token: '',
    user: {}
}

const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState: JSON.parse(localStorage.getItem('userInfo')) ?? defaultValues,
    reducers: {
        setUserInfoGlobal: (state, action) => action.payload
    }
})

export const {setUserInfoGlobal} = userInfoSlice.actions;
export default userInfoSlice.reducer;

export const loginUserThunk = (data) => (dispatch) => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/users/login';

    axios.post(URL, data)
        .then(({data}) => {
            dispatch(setUserInfoGlobal(data.data))
            dispatch(messageNormal());
            localStorage.setItem('userInfo', JSON.stringify(data.data))
        })
        .catch(err => {
            dispatch(activeError());
        })
}

export const logOutThunk = () => (dispatch) => {
    dispatch(setUserInfoGlobal(defaultValues));
    localStorage.removeItem('userInfo');
}