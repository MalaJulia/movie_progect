import {MovieService} from "../../service";

const GenreBedge = () => {
    const genre = MovieService.genre_ids
    return (
        <div>
            console.log(genre)
        </div>
    )
}
export {GenreBedge}