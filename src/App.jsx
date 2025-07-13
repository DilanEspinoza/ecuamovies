import { BrowserRouter, Routes, Route } from "react-router"
// import Home from "./pages/Home/Home"
import MoviePage from "./pages/MoviePage/MoviePage"
import Home from "./pages/Home/Home"
import { createContext, useState } from "react"
import SearchMoviePage from "./pages/SearchMoviePage/SearchMoviePage"

const SearchContext = createContext()
const MovieContext = createContext()

function App() {

  const [searchContext, setSearchContext] = useState("")
  const [categoryMovies, setCategoryMovies] = useState("popular")





  return (
    <SearchContext.Provider value={{ searchContext, setSearchContext }}>
      <MovieContext value={{ categoryMovies, setCategoryMovies }}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/movie/:movie_id" element={<MoviePage />} />
            <Route path="/movie" element={<SearchMoviePage />} />
          </Routes>
        </BrowserRouter>
      </MovieContext>
    </SearchContext.Provider>
  )
}

export { SearchContext, MovieContext }

export default App
