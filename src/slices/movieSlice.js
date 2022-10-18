import {createSlice} from "@reduxjs/toolkit";

const  initialState = {
    movie: [],
    currentMovie: null,
    loading: false,
    error: null
}

const movieSlice = createSlice ({
        name: 'movieSlice',
    initialState,
    reducers:{
            getAll:(state, action) => {
                state.movie = action.payload
            }
    }
    })

const {reducer:movieReducer, actions:{getAll}}=movieSlice

const movieActions = {getAll}

export {
    movieActions,
    movieReducer
}