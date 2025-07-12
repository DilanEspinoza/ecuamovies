import { BrowserRouter, Routes, Route } from "react-router"
// import Home from "./pages/Home/Home"
import MoviePage from "./pages/MoviePage/MoviePage"
import Home from "./pages/Home/Home"
import { createContext, useState } from "react"

const MovieContext = createContext()

function App() {

  const [categoryMovies, setCategoryMovies] = useState("popular")





  return (
    <MovieContext value={{ categoryMovies, setCategoryMovies }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movie/:movie_id" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </MovieContext>
  )
}

export { MovieContext }

export default App
