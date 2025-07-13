import axios from "axios";

import { loadAbort } from "../utils/load-abort.utils";
import { options } from "../utils/axios-options.utils";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

export const getMoviesByCategory = (category = "popular") => {
	const controller = loadAbort();
	const config = {
		...options, // headers y method
		signal: controller.signal,
	};
	return {
		call: axios.get(
			`${VITE_BASE_URL}/movie/${category}?language=en-US&page=1`,
			config
		),
		controller,
	};
};

export const getSingleMovie = (movie_id) => {
	const controller = loadAbort();
	const config = {
		...options, // headers y method
		signal: controller.signal,
	};
	return {
		call: axios.request(
			`${VITE_BASE_URL}/movie/${movie_id}?language=en-US`,
			config
		),
		controller,
	};
};

export const getSearchMovies = (query) => {
	const controller = loadAbort();
	const config = {
		...options, // headers y method
		signal: controller.signal,
		params: { query },
	};
	return {
		call: axios.get(
			`${VITE_BASE_URL}/search/movie?include_adult=false&language=en-US&page=1`,
			config
		),
		controller,
	};
};

/* 
export const getSimilarMovies = (movie_id) => {
	const controller = loadAbort();
	return {
		call: axios.get(
			`${VITE_BASE_URL}/movie/${movie_id}/similar?language=en-US&page=1`,
			{ signal: controller.signal }
		),
		controller,
	};
};
 */
