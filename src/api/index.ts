import axios from "axios";

export const getMovies = (page: number) =>
  axios.get(
    `${process.env.REACT_APP_API_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
  );

export const getMoviesSearch = (page: number, filter: string) =>
  axios.get(
    `${process.env.REACT_APP_API_URL}search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${filter}&page=${page}`
  );

export const getGenres = () =>
  axios.get(
    `${process.env.REACT_APP_API_URL}genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
  );
