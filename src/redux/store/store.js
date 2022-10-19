import {combineReducers, configureStore} from "@reduxjs/toolkit";


import {genresReducer, movieReducer} from "../../slices";

const rootReducer = combineReducers ({
    movieReducer,
    genresReducer
})

const setupStore = () => configureStore({
   reducer:rootReducer
})

export {
    setupStore
}