import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import {
  Background,
  ModalContainer,
  Close,
  CloseIcon,
  Title,
  Poster,
  PosterImage,
} from "./styles";

interface Props {
  item: any;
  onClose: () => void;
}

const key = "6cd53bd1c45a1823e0dd506d78dd9b07";

const Modal: FC<Props> = ({ item, onClose }) => {
  const [genres, setGenres] = useState<any>([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`)
      .then((res) => {
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
        <div style={{ display: "flex", flexDirection: "row" }}>
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
              <p style={{ textAlign: "center" }}>No Image</p>
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
            {item.genre_ids.map((genre: any) => (
              <div
                style={{
                  display: "flex",
                  marginBottom: 3,
                  marginLeft: 10,
                }}
              >
                <p
                  style={{
                    backgroundColor: "blue",
                    margin: 0,
                    padding: 5,
                    borderRadius: 5,
                    color: "white",
                  }}
                >
                  {genres.find(({ id }: any) => id === genre)?.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <p>
          <b>Overview</b>
        </p>
        <p>{item.overview} </p>
      </ModalContainer>
    </Background>
  );
};
export default Modal;
