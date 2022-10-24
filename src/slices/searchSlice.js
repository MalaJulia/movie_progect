import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";



import { searchService} from "../service";

const  initialState = {
    search: [],
    loading: false,
    error: null
}


const getSearchFilms = createAsyncThunk(
    'searchSlice/getAll',
    async (searchSlice,{rejectWithValue})=> {
        try {
            const { data } = await searchService.searchFilms(searchSlice.film)
            return data

        }
        catch (e) {
            return  rejectWithValue(e.response.data)
        }
    }

)

const searchSlice = createSlice ({
    name: 'searchSlice',
    initialState,
    reducers:{},
    extraReducers: {
        [getSearchFilms.fulfilled]:(state, action)=> {
            console.log(action.payload, 'action.payload', typeof action.payload)
            state.search = action.payload.results
        }
    }
})



const {reducer:searchReducer} = searchSlice

const searchActions = {
    getSearchFilms
}

export {
    searchActions,
    searchReducer
}