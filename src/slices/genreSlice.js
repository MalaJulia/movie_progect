import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";



import {genreService, MovieService} from "../service";

const  initialState = {
    genres: [],
    loading: false,
    error: null
}


const getAllGenres = createAsyncThunk(
    'genresSlice/getAll',
    async (_,{rejectWithValue})=> {
        try {
            const { data } = await genreService.getAll()
            return data

        }
        catch (e) {
            return  rejectWithValue(e.response.data)
        }
    }

)

const genreSlice = createSlice ({
    name: 'genreSlice',
    initialState,
    reducers:{
        // getAll:(state, action) => {
        //     state.movie = action.payload
        // }
    },
    extraReducers: {
        [getAllGenres.fulfilled]:(state, action)=> {
            console.log(action.payload, 'action.payload', typeof action.payload)
            state.genres = action.payload.results
        }
    }
})



const {reducer:genresReducer} = genreSlice

const genresActions = {
    getAllGenres
}

export {
    genresActions,
    genresReducer
}