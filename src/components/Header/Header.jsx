import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router"
import { SearchContext } from "../../App"

export const Header = () => {

    const [searchInputMovie, setSearchInputMovie] = useState("")

    const { setSearchContext } = useContext(SearchContext)

    const navigate = useNavigate()

    const handleChange = (event) => {
        setSearchInputMovie(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setSearchContext(searchInputMovie)
        navigate(`/movie/?search=${searchInputMovie}`)

    }

    return (
        <header className="my-10 flex justify-between">
            <Link to="/" className="text-3xl">Home</Link>
            <form action="" className="flex gap-3 items-center border " onSubmit={handleSubmit}>
                <input type="text" placeholder="Search for anything" className="p-2 outline-none border-none" onChange={handleChange} />
                <button className="0 p-3 cursor-pointer text-gray-500 transition hover:bg-emerald-600 hover:text-white" type="submit">
                    <MagnifyingGlassIcon className="h-6 w-6 " />
                </button>
            </form>
        </header>
    )
}