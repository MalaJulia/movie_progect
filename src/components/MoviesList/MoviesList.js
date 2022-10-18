import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


import { movieActions} from "../../slices";
import { MovieService } from "../../service"
import {MovieListCard} from "../MoviasListCard/MovieListCard";

const MoviesList = () => {
    const dispatch = useDispatch();

   const { movie } = useSelector(state => state.movieReducer)

    useEffect(() => {
        MovieService.getAll().then(({data}) => {
            dispatch(movieActions.getAll(data?.results))
        })
    },[])

    return (
        <div>
            {movie.map(mov => <MovieListCard key={mov.id} mov={mov}/> )}
        </div>
    )
}
export {MoviesList}