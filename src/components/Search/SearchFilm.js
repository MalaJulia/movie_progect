import {MovieListCard} from "../MoviasListCard/MovieListCard";

import {useSelector} from "react-redux";

const SearchFilm = () => {
    const {search} = useSelector(state => state.searchReducer)
    console.log(search, 'search')
    return(<div className={"searchFilm"}>
        {search.map(searchFilm => <MovieListCard mov={searchFilm}/>)}
    </div>)

}

export {
    SearchFilm
}