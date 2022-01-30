import styled from "styled-components";

export const HeaderStyle = styled.div`
  height: 85px;
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 40px;
  background-color: #fff;

  h1 {
    font-size: 1.5em;
    color: #374557;
    font-weight: bolder;
    font-family: Arial, Helvetica, sans-serif;
  }

  @media only screen and (max-width: 600px) {
    justify-content: center;
    padding-left: 0;
    font-size: 0.9em;
  }
`;
