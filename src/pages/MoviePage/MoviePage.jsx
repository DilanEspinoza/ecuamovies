import { useEffect, useState } from "react"
import { useAsync } from "../../hooks/useAsync"
import { useFetchAndLoad } from "../../hooks/useFetchAndLoad"
import { getSingleMovie } from "../../services/public.services"
import { Link, useParams } from "react-router"
import { MovieDetails } from "../../components/MovieDetails/MovieDetails"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { loadAbort } from "../../utils/load-abort.utils";
import { options } from "../../utils/axios-options.utils";

import axios from "axios"
import { MovieCard } from "../../components/MovieCard/MovieCard"

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

export default function MoviePage() {
    const [movie, setMovie] = useState([])
    const [similarMovies, setSimilarMovies] = useState([])



    const params = useParams()
    const movie_id = params?.movie_id

    const { callEndPoint } = useFetchAndLoad()

    const getApiData = async () => await callEndPoint(getSingleMovie(movie_id))
    const adaptMovie = (data) => setMovie(data)

    useAsync(getApiData, adaptMovie, () => { }, [movie_id])



    useEffect(() => {
        const getSimilarMovies = async () => {
            const controller = loadAbort();
            try {
                let res = await axios.get(`${VITE_BASE_URL}/movie/${movie_id}/similar?language=en-US&page=1`, options, { signal: controller.signal })
                setSimilarMovies(res.data.results)

            } catch (error) {
                console.console.error();
                (error)
            }


        }



        getSimilarMovies()
    }, [movie_id])



    console.log(similarMovies)
    const handleSubmit = (event) => {
        event.prenventDefault()

    }

    return (
        <main className="w-3/4 mx-auto">
            <header className="my-10 flex justify-between">
                <Link to="/" className="text-3xl">Home</Link>
                <form action="" className="flex gap-3 items-center border " onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search for anything" className="p-2 outline-none border-none" />
                    <button className="0 p-3 cursor-pointer text-gray-500 transition hover:bg-emerald-600 hover:text-white   ">
                        <MagnifyingGlassIcon className="h-6 w-6 " />
                    </button>
                </form>
            </header>

            {movie.length <= 0 ? ""
                : <MovieDetails
                    key={movie.id}
                    title={movie.original_title}
                    overview={movie.overview}
                    poster_path={movie.poster_path}
                    vote_average={movie.vote_average}
                    release_date={movie.release_date}
                    genre={movie.genres[0].name}
                    production_companies={movie.production_companies}
                />
            }

            <div className="mt-6">
                <h2 className="text-2xl font-semibold">Others recommend</h2>
                <main className="w-4/5 mx-auto flex flex-wrap gap-10 justify-between">

                    {similarMovies.length <= 0 ? "" : similarMovies.map((similar_movie) => (
                        <MovieCard key={similar_movie.id} movie_id={similar_movie.id} poster_path={similar_movie.poster_path} />
                    ))
                    }
                </main>
            </div>
        </main>

    );
};

