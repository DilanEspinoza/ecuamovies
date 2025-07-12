import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from '@heroicons/react/20/solid' // O usa un SVG inline
import { useContext } from "react";
import { MovieContext } from "../../App";
export const Header = () => {
    const { setCategoryMovies } = useContext(MovieContext)


    const handleSubmit = (event) => {
        event.preventDefault()

    }

    const handleChangeOptions = (event) => {
        setCategoryMovies(event.target.value)
    }


    return (
        <header className="w-4/5 mx-auto mt-30 flex justify-between  px-4">
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
                <input type="text" placeholder="Search for anything" className="p-2 outline-none border-none" />
                <button className="0 p-3 cursor-pointer text-gray-500 transition hover:bg-emerald-600 hover:text-white   ">
                    <MagnifyingGlassIcon className="h-6 w-6 " />
                </button>
            </form>
        </header>
    )
}