import {useEffect, useState} from "react";
import {movieActions} from "../../slices";
import {MovieListCard} from "../MoviasListCard/MovieListCard";
import {genresReducer,genresActions} from "../../slices";
import {useDispatch, useSelector} from "react-redux";
import {Genre} from "./Genre";
import {useParams} from "react-router-dom";

// const Genres = () => {
//
//     console.log(genres)
//     return (
//         <div>
//      {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
//         </div>
//
//          )
// }
// export {Genres}
