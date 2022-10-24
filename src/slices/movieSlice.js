import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";



import {MovieService} from "../service";

const  initialState = {
    movie: [],
    loading: false,
    error: null
}


const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (pageCount,{rejectWithValue})=> {
        try {
            const { data } = await MovieService.getAll(pageCount.page)
            return data

        }
        catch (e) {
          return  rejectWithValue(e.response.data)
        }
    }

)

const movieSlice = createSlice ({
        name: 'movieSlice',
    initialState,
    reducers:{},
    extraReducers: {
        [getAll.fulfilled]:(state, action)=> {
            console.log(action.payload, 'action.payload', typeof action.payload)
            state.movie = action.payload.results
        }
    }
    })


const {reducer:movieReducer} = movieSlice

const movieActions = {
    getAll
}

export {
    movieActions,
    movieReducer,

}