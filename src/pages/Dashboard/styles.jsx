import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 80vw;
  height: 100vh;
  background-color: #fafafa;

  @media only screen and (max-width: 600px) {
    width: 100vw;
  }
`;
