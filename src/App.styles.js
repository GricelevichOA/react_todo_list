import styled from "styled-components";

export const AppContainer = styled.div`
  width: 60%;
  margin: 20px auto;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AppHeader = styled.h1`
  font-size: 2rem;
  color: #fff;
  background-color: #000000;

  margin-bottom: 20px;
`;
