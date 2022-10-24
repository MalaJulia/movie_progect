import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { useSearchParams} from "react-router-dom";


import { movieActions} from "../../slices";
import {MovieListCard} from "../MoviasListCard/MovieListCard";
import {Button} from "../Headers/Button";



const MoviesList = () => {


    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams ({page: '1'})

   const {movie} = useSelector(state => state.movieReducer)

    useEffect(() => {
        const page = query.get('page');
  dispatch(movieActions.getAll({page}))

    },[query])




    return (

    <>

        <div className={"movieListContainer"}>
            {movie.map(mov => <MovieListCard key={mov.id} mov={mov}/> )}

        </div>
        <Button/>
 </>
    )
}
export {MoviesList}