import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderImage = styled.img`
  width: 100%;
  height: 450px;
  position: absolute;
`;

export const SearchBar = styled.input`
  top: 260px;
  padding: 10px;
  width: 15%;
  position: absolute;
`;

export const MoviesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MovieCard = styled.div`
  width: 300px;
  height: 450px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props: { withBorder: boolean }) =>
    props.withBorder ? "" : "1px solid"};
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const Star = styled(AiFillStar)`
  width: 20px;
  height: 20px;
`;

export const NoMovieText = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-block: 60px;
`;
