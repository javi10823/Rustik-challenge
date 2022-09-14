import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.28);
  height: 100%;
  width: 100%;
`;

export const ModalContainer = styled.div`
  padding: 20px;
  background-color: white;
  width: 40%;
`;

export const Close = styled.div`
  display: flex;
  justify-content: end;
`;

export const CloseIcon = styled.p`
  margin: 0px;
`;

export const Title = styled.p`
  text-align: center;
  font-weight: bold;
  margin-block: 10px;
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
