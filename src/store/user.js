import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from 'axios'
import apiConfig from '../config/api'

export const signUp = createAsyncThunk('user/signUp', async ({credentials}) =>{
    const response = await Axios.post(`${apiConfig.domain}/users`,{
        user: credentials
    })
    console.log(response)

    return response.data.user
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        status: '',
    },
    reducers: {
        signIn: (state, action) => {
            state.user = action.payload
        },
        logOut: (state) => {
            state.user = null
        }
    },
    extraReducers:{
        [signUp.pending]: (state, action) =>{
            state.status = 'loading'
        },
        [signUp.fulfilled]: (state, action) =>{
            state.user = action.payload
            state.status = 'success'
        },
        [signUp.rejected]: (state, action) =>{
            state.status = 'failed'
        }
    }
})

export const { signIn, logOut } = userSlice.actions

export default userSlice.reducer