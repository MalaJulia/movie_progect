import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import './MovieInfo.css'

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
        <div className={'movieInfo'}>
            <div>
                 <h1>{movieDetails.title}</h1>
            <hr/>
            <img className={'backdrop'} src={posterUrl}  alt="poster"/>

            <hr/>
            <div id={"details"}>Overview: {movieDetails.overview}</div>
            </div>
            <hr/>
            <div id={'property'}>
                <div id={'data'}><h5>Release date:</h5>{movieDetails.release_date} </div>
                <div><h5> Original language:</h5>{movieDetails.original_language}</div>

            <div><h5>Popularity:</h5> {movieDetails.popularity}</div>

            <div><h5>Vote average:</h5>{movieDetails.vote_average}</div>


            <div><h5>Vote count:</h5> {movieDetails.vote_count}</div>


                <div> <h5>Genre:</h5>  {genres.map(genre => {
                    return  movieDetails.genre_ids.includes(genre.id) ?  <Genre key={genre.id} genre={genre}/> : null})}
                </div>


            </div>
</div>

    )
}
export {MovieInfo}