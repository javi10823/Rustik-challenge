import React, { FC } from "react";
import {
  Background,
  ModalContainer,
  Header,
  Title,
  Poster,
  PosterImage,
  GenreContainer,
  GenreText,
  MovieDetails,
  CenterText,
  Close,
} from "./styles";
import { Movie, Genre } from "../../types";

interface Props {
  item: Movie;
  onClose: () => void;
  genres: Genre[];
}

const Modal: FC<Props> = ({ item, onClose, genres }) => (
  <Background>
    <ModalContainer>
      <Header>
        <Title>{item.title}</Title>
        <Close onClick={onClose} />
      </Header>
      <MovieDetails>
        <Poster withBorder={Boolean(item.poster_path)}>
          {item.poster_path ? (
            <PosterImage
              src={`${process.env.REACT_APP_IMAGE_URL}${item.poster_path}`}
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

export default Modal;
