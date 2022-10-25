import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {movieActions} from "../../slices";

import './Button.css'

const Button= () => {
    const [prev, setPrev] = useState (null)
    const [next, setNext] = useState(null)

    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams ({page: '1'})

    const {movie} = useSelector(state => state.movieReducer)

    useEffect(() => {
        const page = query.get('page');
        dispatch(movieActions.getAll({page}))

    },[query])


    const  prevPage = () => {
        setQuery(value=>({page:value.get('page')-1}))

    }

    const  nextPage = () => {
        setQuery(value=>({page:+value.get('page')+1}))

    }
    //TODO доробити щоб сторінки не заходили за межі
return (
    <div className={'button'}>

    <button disabled={query.get('page') === "1"} className={'click'} onClick={prevPage}>Prev</button>
    <button disabled={query.get('page') === "500"}className={'click'} onClick={nextPage}>Next</button>
    </div>
)
}
export {
    Button
}