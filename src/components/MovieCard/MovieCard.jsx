import { Link } from "react-router"
import placeholder from "/img-placeholder.jpg";

export const MovieCard = ({ movie_id, poster_path }) => {


    return (
        <Link to={`/movie/${movie_id}`} className=" ">
            <article className="w-56  p-4  ">
                {poster_path ?
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`Movie poster ${movie_id}`} className="hover:rounded-2xl" />
                    : <img src={placeholder} alt={`Movie poster ${movie_id}`} className="w-56 h-72  object-fill hover:rounded-2xl" />}

            </article>
        </Link>
    )
}