import { Link } from "react-router"

export const MovieCard = ({ movie_id, poster_path }) => {
    return (
        <Link to={`/movie/${movie_id}`}>
            <article className="w-56  p-4 ">
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
            </article>
        </Link>
    )
}