import {Genres} from "../GenreBedge/Genres";
import { StarRating } from "../StarsRating";
import {Genre} from "../GenreBedge/Genre";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {genresActions} from "../../slices";
import {Link} from "react-router-dom";
import {MovieService} from "../../service";

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
        console.log(genres, '=========')
    },[])


    return (

        <div>

            <Link to={'/movie/'+id}>details</Link>
       <h2>{title}</h2>
            <p>{overview}</p>
            <img src={postUrl}  alt="poster"/>
            <StarRating rating={vote_average}/>

<div>  {genres.map(genre => {

         return  genre_ids.includes(genre.id) ?  <Genre key={genre.id} genre={genre}/> : null})}</div>

            {/*<div> <Genre/></div>*/}

        </div>
    )

}
export {MovieListCard}