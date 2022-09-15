import styled from "styled-components";
import { theme } from "../../utils/theme";
import { AiFillCloseCircle } from "react-icons/ai";

export const Background = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.background};
  height: 100%;
  width: 100%;
`;

export const ModalContainer = styled.div`
  padding: 20px;
  background-color: ${theme.colors.white};
  width: 40%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  flex-grow: 1;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

export const Poster = styled.div`
  width: 330px;
  height: 480px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PosterImage = styled.img`
  width: 330px;
  height: 480px;
  margin-right: 20px;
`;

export const MovieDetails = styled.div`
  display: flex;
  flex-direction: row;
`;

export const GenreContainer = styled.div`
  display: flex;
  margin-bottom: 3px;
  margin-left: 10px;
`;

export const GenreText = styled.p`
  background-color: ${theme.colors.blue};
  margin: 0px;
  padding: 5px;
  border-radius: 5px;
  color: ${theme.colors.white};
`;

export const CenterText = styled.p`
  text-align: center;
`;

export const Close = styled(AiFillCloseCircle)`
  width: 27px;
  height: 27px;
`;
