import { useContext, useState } from "react";
import { getMoviesByCategory } from "../../services/public.services";
import { useFetchAndLoad } from "../../hooks/useFetchAndLoad";
import { useAsync } from "../../hooks/useAsync";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { Header } from "../../components/Header/Header";
import { MovieContext } from "../../App";
// import { LoadinSniper } from "../../components/LoadinSniper/LoadinSniper";

export default function Home() {
    const [movies, setMovies] = useState([])
    const { categoryMovies } = useContext(MovieContext)

    const { callEndPoint } = useFetchAndLoad()

    const getApiData = async () => await callEndPoint(getMoviesByCategory(categoryMovies))
    const adaptMovies = (data) => setMovies(data.results)

    useAsync(getApiData, adaptMovies, () => { }, [categoryMovies])

    return (
        <>
            <Header />

            <main className="w-4/5 mx-auto flex flex-wrap gap-10 justify-between">

                {movies && movies.map((movie) => (
                    <MovieCard key={movie.id} movie_id={movie.id} poster_path={movie.poster_path} />
                ))
                }
            </main>
        </>
    )
}