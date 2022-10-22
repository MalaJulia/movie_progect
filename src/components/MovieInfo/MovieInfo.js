import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {Genre} from "../GenreBedge/Genre";
import {genresActions} from "../../slices";


const MovieInfo = () => {
  let location = useLocation()
    console.log(location)
    let {state: movieDetails} = location

    let posterUrl = "https://image.tmdb.org/t/p/w500/" + movieDetails.backdrop_path

    const {genres} = useSelector(state => state.genresReducer)
    const dispatch = useDispatch();
    useState(null)

    useEffect(() => {
        dispatch(genresActions.getAllGenres())
        console.log(genres, '=========')
    },[])


    return (
        <div>
            <h1>{movieDetails.title}</h1>
            <div>{movieDetails.original_language}</div>
            <div>{movieDetails.overview}</div>
            <div>{movieDetails.popularity}</div>
            <div>{movieDetails.release_date}</div>
            <div>{movieDetails.vote_average}</div>
            <div>{movieDetails.vote_count}</div>
            <img src={posterUrl}  alt="poster"/>

            <div>  {genres.map(genre => {
                return  movieDetails.genre_ids.includes(genre.id) ?  <Genre key={genre.id} genre={genre}/> : null})}
            </div>
        </div>
    )
}
export {MovieInfo}