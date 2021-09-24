import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Axios from 'axios'

import apiConfig from '../config/api'

const videosSlice = createSlice({
    name: 'videos',
    initialState:{
        video: null,
        status: ''
    },
    reducers:{

    },
    extraReducers:{
        
    }
})