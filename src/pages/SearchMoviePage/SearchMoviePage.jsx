import { useState } from "react";
import { useSearchParams } from "react-router";
import { getSearchMovies } from "../../services/public.services";
import { useFetchAndLoad } from "../../hooks/useFetchAndLoad";
import { useAsync } from "../../hooks/useAsync";
import { Header } from "../../components/Header/Header";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { MovieCardSkeleton } from "../../components/MovieCardSkeleton/MovieCardSkeleton";

export default function SearchMoviePage() {


    const [searchParams] = useSearchParams();
    const query = searchParams.get('search');


    const [movies, setMovies] = useState([])

    const { loading, callEndPoint } = useFetchAndLoad()

    const getApiData = async () => await callEndPoint(getSearchMovies(query))
    const adaptMovies = (data) => setMovies(data.results)

    useAsync(getApiData, adaptMovies, () => { }, [query])


    return (
        <div className="w-3/4 mx-auto">

            <Header />

            <main className="w-4/5 mx-auto flex flex-wrap gap-10 justify-between">

                {loading ? (<>
                    <MovieCardSkeleton />
                    <MovieCardSkeleton />
                    <MovieCardSkeleton />
                    <MovieCardSkeleton />
                    <MovieCardSkeleton />
                    <MovieCardSkeleton />
                    <MovieCardSkeleton />
                    <MovieCardSkeleton />
                    <MovieCardSkeleton />
                    <MovieCardSkeleton />
                    <MovieCardSkeleton />
                    <MovieCardSkeleton />
                </>) : movies.length <= 0 ? <p className="font-semibold text-lg">There are no movies to show</p> : movies.map((movie) => (
                    <MovieCard key={movie.id} movie_id={movie.id} poster_path={movie.poster_path} />
                ))
                }
            </main>
        </div>
    )
}