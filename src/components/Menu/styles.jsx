import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  width: 20vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  .link {
    list-style: none;
    text-decoration: none;
  }
  /* .cont {
    color: #fff;
    border-radius: 10px;
    background-color: #4cbc9a;
  }
  .cont h3{
    color: #fff;
  
  } */
  .cont2 {
    color: #fff;
    border-radius: 10px;
    background-color: #4cbc9a;
  }
  .cont2 h3 {
    color: #fff;
  }

  @media only screen and (max-width: 1100px) {
    /* background-color: blue; */
    text-align: center;
    width: 30vw;
  }
`;

export const Logo = styled.img`
  width: 209px;
  height: 209px;
  margin-bottom: 20px;
`;

export const Dashboard = styled.div`
  /* width: 90%; */
  height: 40px;
  margin-bottom: 20px;
  display: flex;
  /* justify-content: left; */
  align-items: center;
  gap: 30px;
  padding: 35px;
  border-radius: 10px;
  .chart-pie {
    color: #a098ae;
    font-size: 20px;
  }

  &:hover .chart-pie {
    color: #fff;
  }
  h3 {
    color: #a098ae;
    font-weight: bold;
    font-size: 1.2em;
    line-height: 1.2em;
    width: 150px;
  }
  &:hover h3 {
    color: #fff;
  }
  &:hover {
    background-color: #4cbc9a;
  }
  @media only screen and (max-width: 1100px) {
    /* background-color: blue; */
    text-align: center;
    .chart-pie {
      display: none;
    }
  }
`;

export const Units = styled.div`
  /* width: 90%; */
  height: 40px;
  margin-bottom: 20px;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 30px;
  padding: 35px;
  border-radius: 10px;
  .chart-bar {
    color: #a098ae;
    font-size: 20px;
  }
  &:hover .chart-bar {
    color: #fff;
  }
  &:hover img {
    color: #fff;
  }
  h3 {
    color: #a098ae;
    font-weight: bold;
    font-size: 1.2em;
    line-height: 1.2em;
    width: 150px;
  }
  &:hover h3 {
    color: #fff;
  }
  &:hover {
    background-color: #4cbc9a;
    color: #fff;
  }
  @media only screen and (max-width: 1100px) {
    /* background-color: blue; */
    text-align: center;
    .chart-bar {
      display: none;
    }
  }
`;

export const Register = styled.div`
  /* width: 90%; */
  height: 40px;
  /* background-color: bisque; */
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 30px;
  padding: 35px;
  border-radius: 10px;
  .cog {
    color: #a098ae;
    font-size: 20px;
  }
  &:hover .cog {
    color: #fff;
  }
  h3 {
    color: #a098ae;
    font-weight: bold;
    font-size: 1.2em;
    line-height: 1.2em;
    width: 150px;
  }
  &:hover h3 {
    color: #fff;
  }
  &:hover {
    background-color: #4cbc9a;
    color: #fff;
  }
  @media only screen and (max-width: 1100px) {
    /* background-color: blue; */
    text-align: center;
    .cog {
      display: none;
    }
  }
`;
