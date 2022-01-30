import styled from "styled-components";

export const ContainerChart = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 60%;
  height: 55%;
  background-color: #fff;

  .line {
    border: 1px solid #d3d3d3;
    border-radius: 8px;
  }

  @media only screen and (max-width: 1600px) {
    width: 50%;
    height: 40%;
  }
  @media only screen and (max-width: 950px) {
    width: 60%;
    height: 35%;
    padding-bottom: 15px;
  }
`;
