import {combineReducers, configureStore} from "@reduxjs/toolkit";


import {genresReducer, movieReducer, searchReducer} from "../../slices";

const rootReducer = combineReducers ({
    movieReducer,
    genresReducer,
    searchReducer
})

const setupStore = () => configureStore({
   reducer:rootReducer
})

export {
    setupStore
}