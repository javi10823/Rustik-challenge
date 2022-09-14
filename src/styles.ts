import styled from "styled-components";

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
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;
