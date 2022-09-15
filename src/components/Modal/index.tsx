import React, { FC, useEffect, useState } from "react";
import {
  Background,
  ModalContainer,
  Close,
  CloseIcon,
  Title,
  Poster,
  PosterImage,
  GenreContainer,
  GenreText,
  MovieDetails,
  CenterText,
} from "./styles";
import { Movie, Genre } from "../../types";
import { getGenres } from "../../api";

interface Props {
  item: Movie;
  onClose: () => void;
}

const Modal: FC<Props> = ({ item, onClose }) => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    getGenres().then((res) => {
      setGenres(res.data.genres);
    });
  }, []);

  return (
    <Background>
      <ModalContainer>
        <Close>
          <CloseIcon onClick={onClose}>X</CloseIcon>
        </Close>
        <Title>{item.title}</Title>
        <MovieDetails>
          <Poster
            style={{
              border: item.poster_path ? "" : "1px solid",
            }}
          >
            {item.poster_path ? (
              <PosterImage
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt="poster"
              />
            ) : (
              <CenterText>No Image</CenterText>
            )}
          </Poster>
          <div>
            <p>
              <b>Original title:</b> {item.original_title}
            </p>
            <p>
              <b>Lang:</b> {item.original_language}
            </p>
            <p>
              <b>Released:</b> {item.release_date}
            </p>
            <p>
              <b>Public:</b> {item.adult ? "Adults" : "Everyone"}
            </p>
            <p>
              <b>Rating:</b> {item.vote_average}
            </p>
            <p>
              <b>Votes Qty:</b> {item.vote_count}
            </p>
            <p>
              <b>Genres:</b>
            </p>
            {item.genre_ids.map((genre) => (
              <GenreContainer>
                <GenreText>
                  {genres.find(({ id }) => id === genre)?.name}
                </GenreText>
              </GenreContainer>
            ))}
          </div>
        </MovieDetails>
        <p>
          <b>Overview</b>
        </p>
        <p>{item.overview} </p>
      </ModalContainer>
    </Background>
  );
};
export default Modal;
