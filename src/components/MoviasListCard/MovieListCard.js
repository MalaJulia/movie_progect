import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import './MovieListCard.css'

import { StarRating } from "../StarsRating";

import {Genre} from "../GenreBedge/Genre";
import {genresActions} from "../../slices";


const MovieListCard = ({mov}) => {
    const {title,overview, poster_path,vote_average,genre_ids, id } = mov
    console.log(poster_path)

    let postUrl = "https://image.tmdb.org/t/p/w500/" + poster_path
    console.log(postUrl)

    const {genres} = useSelector(state => state.genresReducer)

    const dispatch = useDispatch();

    // const {id}=useParams()

    useState(null)
    useEffect(() => {
        dispatch(genresActions.getAllGenres())
        console.log(genres, '==')
    },[])

    return (

        <div className={'container'}>
            <Link to={'/movie/'+id} state={{...mov}}>  <h2>{title}</h2> </Link>
            <p className={'overview'}>{overview}</p>
            <img src={postUrl}  alt="poster" className={'poster'}/>
            <StarRating  className={'star'} rating={vote_average}/>

<div>
    {genres.map(genre => {
    return  genre_ids.includes(genre.id) ?  <Genre key={genre.id} genre={genre}/> : null})}
</div>

        </div>
      )

}
export {MovieListCard}