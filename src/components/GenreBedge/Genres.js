import {useEffect} from "react";
import {movieActions} from "../../slices";
import {MovieListCard} from "../MoviasListCard/MovieListCard";
import {genresReducer,genresActions} from "../../slices";
import {useDispatch, useSelector} from "react-redux";
import {Genre} from "./Genre";

const Genres = () => {
    const{genres} = useSelector(state => state.genresReducer)
    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(genresActions.getAllGenres())

    },[])

    console.log(genres)
    return (
        <div>
     {genres.map(genre => <Genre key={genre.id} genre={genre}/> )
         //TODO Genres вызов функции в муви


        </div>

    )
}
export {Genres}