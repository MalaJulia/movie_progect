
const MovieListCard = ({mov}) => {
    const {title,overview, poster_path } = mov
    console.log(poster_path)
    let postUrl = "https://image.tmdb.org/t/p/w500/" + poster_path
    console.log(postUrl)
    return (
        <div>
<h2>{title}</h2>
        <p>{overview}</p>
            <img src={postUrl}  alt="poster"/>
        </div>
    )
}
export {MovieListCard}