import styled from "styled-components";

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 81%;
  margin: 0 auto;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  gap: 30px;
  margin: 0 auto;
  margin-top: 30px;

  .card1:hover {
    color: #3751ff;
    border: 1px solid #3751ff;
    cursor: pointer;
  }
  .card2:hover {
    color: #3751ff;
    border: 1px solid #3751ff;
    cursor: pointer;
  }
  .card3:hover {
    color: #3751ff;
    border: 1px solid #3751ff;
    cursor: pointer;
  }
  .card4:hover {
    color: #3751ff;
    border: 1px solid #3751ff;
    cursor: pointer;
  }

  div {
    border-radius: 8px;
    padding: 20px;
    flex-basis: 250px;
    border: 1px solid #d3d3d3;
    height: 140px;
    font-weight: bolder;
    color: #424242;
    background-color: #fff;
    
  }
  h3 {
    font-size: 1.1em;
    padding: 8px;
  }
  span {
    font-size: 3.5em;
  }

  
  @media only screen and (max-width: 1600px) {
    div{
      flex-basis: 200px;
    }
  }
`;
