import { createSlice } from "@reduxjs/toolkit"

const normalMessage = {
    msgError: false
}

const errorMessage = {
    msgError: true
}

const mesageErrorSlice = createSlice({
    name: 'mesageError',
    initialState: normalMessage,
    reducers: {
        setMesageErrorGlobal: (state, action) => action.payload
    }
})

export const {setMesageErrorGlobal} = mesageErrorSlice.actions;
export default mesageErrorSlice.reducer;

export const messageNormal = () => (dispatch) => {
    dispatch(setMesageErrorGlobal(normalMessage));
}

export const activeError = () => (dispatch) => {
    dispatch(setMesageErrorGlobal(errorMessage));
}