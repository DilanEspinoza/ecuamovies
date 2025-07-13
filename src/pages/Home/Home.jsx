import { useContext, useState } from "react";
import { MovieContext, SearchContext } from "../../App";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { getMoviesByCategory } from "../../services/public.services";
import { useFetchAndLoad } from "../../hooks/useFetchAndLoad";
import { useAsync } from "../../hooks/useAsync";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useNavigate } from "react-router";

import { MovieCartSkeleton } from "../../components/MovieCartSkeleton/MovieCartSkeleton";

export default function Home() {
    const [searchInputMovie, setSearchInputMovie] = useState("")
    const [movies, setMovies] = useState([])



    const { setSearchContext } = useContext(SearchContext)
    const { categoryMovies, setCategoryMovies } = useContext(MovieContext)
    const { loading, callEndPoint } = useFetchAndLoad()

    const getApiData = async () => await callEndPoint(getMoviesByCategory(categoryMovies))
    const adaptMovies = (data) => setMovies(data.results)

    useAsync(getApiData, adaptMovies, () => { }, [categoryMovies])

    const navigate = useNavigate()




    const handleSubmit = (event) => {
        event.preventDefault()
        setSearchContext(searchInputMovie)
        navigate(`/movie/?search=${searchInputMovie}`)
    }

    const handleChangeOptions = (event) => {
        setCategoryMovies(event.target.value)
    }

    const handleInputChange = (event) => {
        setSearchInputMovie(event.target.value)
    }



    return (
        <div className="w-4/5 mx-auto">
            <header className="mt-30 flex justify-between  px-4">
                <div className="relative inline-block w-48">
                    <select
                        onChange={handleChangeOptions}
                        className="appearance-none w-full bg-white border border-gray-300 px-4 py-3 pr-10 text-gray-700 rounded shadow-2xl focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="popular">Popular</option>
                        <option value="now_playing">Now Playing</option>
                        <option value="top_rated">Top Rated</option>
                        <option value="upcoming">Upcoming</option>
                    </select>

                    {/* Icono personalizado */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                        <ChevronDownIcon className="w-5 h-5" />
                    </div>
                </div>


                <div>

                </div>
                <form action="" className="flex gap-3 items-center border" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search for anything" className="p-2 outline-none border-none" onChange={handleInputChange} />
                    <button className="0 p-3 cursor-pointer text-gray-500 transition hover:bg-emerald-600 hover:text-white   ">
                        <MagnifyingGlassIcon className="h-6 w-6 " />
                    </button>
                </form>
            </header>
            <main className=" flex flex-wrap gap-10 justify-between">

                {loading ? (<>
                    <MovieCartSkeleton />
                    <MovieCartSkeleton />
                    <MovieCartSkeleton />
                    <MovieCartSkeleton />
                    <MovieCartSkeleton />
                    <MovieCartSkeleton />
                    <MovieCartSkeleton />
                    <MovieCartSkeleton />
                    <MovieCartSkeleton />
                    <MovieCartSkeleton />
                    <MovieCartSkeleton />
                    <MovieCartSkeleton />
                </>) : movies.length <= 0 ? <p className="font-semibold text-lg">There are no movies to show</p> : movies.map((movie) => (
                    <MovieCard key={movie.id} movie_id={movie.id} poster_path={movie.poster_path} />
                ))
                }
            </main>
        </div>
    )
}