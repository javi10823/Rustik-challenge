import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Modal from "./components/Modal";
import {
  Container,
  HeaderContainer,
  SearchBar,
  MoviesContainer,
  MovieCard,
  HeaderImage,
  CardImage,
} from "./styles";

const key = "6cd53bd1c45a1823e0dd506d78dd9b07";

const App = () => {
  const [data, setData] = useState<any>([]);
  const [filter, setFiler] = useState("");
  const [ranking, setRanking] = useState(0);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    if (filter === "") {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=${page}`
        )
        .then((res) => {
          setData(res.data);
        });
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${filter}&page=${page}`
        )
        .then((res) => {
          setData(res.data);
        });
    }
  }, [filter, page]);

  const renderMovies = useMemo(() => {
    if (data.results) {
      return data.results
        .filter(
          ({ vote_average }: any) =>
            ranking === 0 || Math.round(vote_average) === ranking
        )
        .map((item: any) => (
          <MovieCard
            onClick={setSelected.bind(null, item)}
            key={item.id}
            style={{
              border: item.poster_path ? "" : "1px solid",
            }}
          >
            {item.poster_path ? (
              <CardImage
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
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
          onChange={(a) => setFiler(a.target.value)}
        />
      </HeaderContainer>
      <p>
        <b>Filter by rating:</b>
      </p>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <button
            key={i}
            style={ranking >= i ? { backgroundColor: "yellow" } : {}}
            onClick={() => {
              ranking === i ? setRanking(0) : setRanking(i);
              setPage(1);
            }}
          >
            {i}
          </button>
        ))}
      </div>
      <MoviesContainer>{renderMovies}</MoviesContainer>
      <Pagination
        count={data.total_pages > 500 ? 500 : data.total_pages}
        onChange={(_e, p) => {
          setPage(p);
          window.scrollTo(0, 0);
        }}
      />
      {selected && (
        <Modal item={selected} onClose={setSelected.bind(null, null)} />
      )}
    </Container>
  );
};

export default App;
