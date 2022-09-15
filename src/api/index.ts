import axios from "axios";

const apiUrl = "https://api.themoviedb.org/3/";

const key = "6cd53bd1c45a1823e0dd506d78dd9b07";

export const getMovies = (page: number) =>
  axios.get(`${apiUrl}movie/popular?api_key=${key}&page=${page}`);

export const getMoviesSearch = (page: number, filter: string) =>
  axios.get(
    `${apiUrl}search/movie?api_key=${key}&language=en-US&query=${filter}&page=${page}`
  );
