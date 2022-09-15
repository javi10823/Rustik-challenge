import React, { useEffect, useMemo, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Modal from "./ui/Modal";
import {
  Container,
  HeaderContainer,
  SearchBar,
  MoviesContainer,
  MovieCard,
  HeaderImage,
  CardImage,
  Star,
  NoMovieText,
} from "./styles";
import { Genre, Movie, MovieData } from "./types";
import { getGenres, getMovies, getMoviesSearch } from "./api";
import { theme } from "./utils/theme";

let filterTimeout: NodeJS.Timeout;

const App = () => {
  const [data, setData] = useState<MovieData>();
  const [filter, setFiler] = useState("");
  const [ranking, setRanking] = useState(0);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Movie | null>(null);
  const [genresList, setGenresList] = useState<Genre[]>([]);

  useEffect(() => {
    getGenres().then(({ data: { genres } }) => {
      setGenresList(genres);
    });
  }, []);

  useEffect(() => {
    if (filter === "") {
      getMovies(page).then((res) => setData(res.data));
    } else {
      getMoviesSearch(page, filter).then((res) => setData(res.data));
    }
  }, [filter, page]);

  const onSearch = (a: { target: { value: string } }) => {
    clearTimeout(filterTimeout);
    filterTimeout = setTimeout(() => {
      setPage(1);
      setFiler(a.target.value);
    }, 500);
  };

  const renderMovies = useMemo(() => {
    if (data?.results) {
      const filteredData = data.results.filter(
        ({ vote_average }) =>
          ranking === 0 || Math.round(vote_average) === ranking
      );
      if (filteredData.length === 0) {
        return <NoMovieText>No movies found</NoMovieText>;
      }
      return filteredData.map((item) => (
        <MovieCard
          onClick={setSelected.bind(null, item)}
          key={item.id}
          withBorder={Boolean(item.poster_path)}>
          {item.poster_path ? (
            <CardImage
              src={`${process.env.REACT_APP_IMAGE_URL}${item.poster_path}`}
              alt={item.title}
            />
          ) : (
            <p>{item.title}</p>
          )}
        </MovieCard>
      ));
    }
  }, [data, ranking]);

  return (
    <Container>
      <HeaderContainer>
        <HeaderImage
          alt="header"
          src="https://es.web.img2.acsta.net/pictures/19/07/19/09/05/1888832.jpg"
        />
        <SearchBar
          type="text"
          name="name"
          placeholder="Search"
          onChange={onSearch}
        />
      </HeaderContainer>
      <p>
        <b>Filter by rating:</b>
      </p>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <Star
            key={i}
            style={ranking >= i ? { color: theme.colors.yellow } : {}}
            onClick={() => {
              ranking === i ? setRanking(0) : setRanking(i);
              setPage(1);
            }}
          />
        ))}
      </div>
      <MoviesContainer>{renderMovies}</MoviesContainer>
      <Pagination
        page={page}
        count={data?.total_pages! > 500 ? 500 : data?.total_pages}
        onChange={(_e, p) => {
          setPage(p);
          window.scrollTo(0, 0);
        }}
      />
      {selected && (
        <Modal
          item={selected}
          onClose={setSelected.bind(null, null)}
          genres={genresList}
        />
      )}
    </Container>
  );
};

export default App;
