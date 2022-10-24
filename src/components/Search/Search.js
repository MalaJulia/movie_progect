import {useState} from "react";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";


import {searchActions} from "../../slices";


const Search = () => {
    const {register, handleSubmit, reset} = useForm();
    const navigate = useNavigate();
    // const {search} = useSelector(state => state.searchReducer)

    let location = useLocation()
    console.log(location)

    const submit = (searchDetails)=>{
        dispatch(searchActions.getSearchFilms(searchDetails)).then(() => {
            navigate("/search");
        })
        console.log(searchDetails)
    }
    const dispatch = useDispatch();


    useState(null)

    return (
        <>
            <div>
                <form onSubmit={handleSubmit(submit)}>
                            <input type='text' {...register("film")}/>
                             <button disabled={!register}>Search</button>
                         </form>
            </div>
        </>
    )}

export {
    Search
}