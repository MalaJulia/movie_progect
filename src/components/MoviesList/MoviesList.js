import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { useSearchParams} from "react-router-dom";


import { movieActions} from "../../slices";
import {MovieListCard} from "../MoviasListCard/MovieListCard";



const MoviesList = () => {


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
    return (
        <div>
            {/*TODO: сделать чтоб не переходило на -1 стр и более 500*/}
            <button onClick={prevPage}>Prev page</button>
            <button onClick={nextPage}>Next page</button>
            <hr/>
            {movie.map(mov => <MovieListCard key={mov.id} mov={mov}/> )}

        </div>

    )
}
export {MoviesList}