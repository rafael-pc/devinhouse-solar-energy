import styled from "styled-components";

export const Container = styled.div`
  width: 20vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: #fff;

  .link {
    list-style: none;
    text-decoration: none;
  }

  @media only screen and (max-width: 1100px) {
    text-align: center;
    width: 30vw;
  }
  @media only screen and (max-width: 600px) {
    width: 100vw;
  }
`;

export const Logo = styled.img`
  width: 209px;
  height: 209px;
  margin-bottom: 20px;
`;

export const Dashboard = styled.div`
  height: 40px;
  margin-bottom: 20px;
  display: flex;
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
    text-align: center;
    .chart-pie {
      display: none;
    }
  }
  @media only screen and (max-width: 600px) {
    margin-bottom: 0;
  }
`;

export const Units = styled.div`
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
    text-align: center;
    .chart-bar {
      display: none;
    }
  }
`;

export const Register = styled.div`
  height: 40px;
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
    text-align: center;
    .cog {
      display: none;
    }
  }
`;
