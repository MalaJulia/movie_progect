import {Genres} from "../GenreBedge/Genres";

const MovieListCard = ({mov}) => {
    const {title, } = mov
    return (
        <div>
<div>{title}</div>
            <Genres/>
        </div>
    )
}
export {MovieListCard}