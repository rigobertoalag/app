import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Axios from 'axios'

import apiConfig from '../config/api'

export const loadVideos = createAsyncThunk('videos/load', async (page=1, thunkAPI) => {
    let token;
    try {
        token = thunkAPI.getState().user.user.jwtToken;
    } catch {
        return Promise.reject('No hay token');
    }

    if (!token) return Promise.reject('No hay token');

    const response = await Axios.get(`${apiConfig.domain}/videos?page=${page}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data;
})

export const getVideo = createAsyncThunk('videos/get', async(videoId, thunkAPI)=>{
    let token
    try{
        token =thunkAPI.getState().user.user.jwtToken
    }catch{
        return Promise.reject('No hay token')
    }

    if(!token) return Promise.reject('No hay token')

    const response = await Axios.get(`${apiConfig.domain}/videos/${videoId}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data
})

export const createVideo = createAsyncThunk('videos/create', async (videoData, thunkAPI) => {
    let token
    try {
        token = thunkAPI.getState().user.user.jwtToken
    } catch {
        return Promise.reject('No hay token')
    }

    if (!token) return Promise.reject('No hay token')

    const response = await Axios.post(`${apiConfig.domain}/videos`, videoData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data
})

const videosSlice = createSlice({
    name: 'videos',
    initialState: {
        status: 'nothing_to_show',
        data: {
            nextPage: 1,
            total: 1,
            videos: [],
        },
        currentVideo: null
    },
    reducers: {},
    extraReducers: {
        [loadVideos.fulfilled]: (state, action) => {
            let { currentPage, nextPage, prevPage, total } = action.payload;
            state.status = 'success'
            state.data = {
                currentPage,
                nextPage,
                prevPage,
                total,
                videos: state.data.videos.concat(action.payload.videos)
            }
        },
        [getVideo.fulfilled]: (state, action)=>{
            state.status = 'success'
            state.currentVideo = action.payload
        }
    }
})

export default videosSlice.reducer