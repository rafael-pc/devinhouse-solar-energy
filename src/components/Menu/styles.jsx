import styled from "styled-components";

export const Container = styled.div`
  /* background-color: #fff; */
  background-color: yellow;
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
  background-color: aliceblue;
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
  background-color: blue;
  .chart-pie {
    color: #A098AE;
    font-size: 20px;
  }
  &:hover .chart-pie{
    color: #fff;
  }
  h3 {
    color: #A098AE;
    font-weight: bold;
    font-size: 1.2em;
    line-height: 1.2em;
    width: 150px;
  }
  &:hover h3{
    color: #fff;
  }
  &:hover {
    background-color: #4CBC9A;
  }
  @media only screen and (max-width: 1100px) {
    /* background-color: blue; */
    text-align: center;
    .chart-pie{
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
    color: #A098AE;
    font-size: 20px;
  }
  &:hover .chart-bar{
    color: #fff;
  }
  &:hover img{
    color: #fff
  }
  h3 {
    color: #A098AE;
    font-weight: bold;
    font-size: 1.2em;
    line-height: 1.2em;
    width: 150px;
  }
  &:hover h3{
    color: #fff;
  }
  &:hover{
    background-color: #4CBC9A;
    color: #fff;
  }
  @media only screen and (max-width: 1100px) {
    /* background-color: blue; */
    text-align: center;
    .chart-bar{
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
  .cog{
    color: #A098AE;
    font-size: 20px;
  }
  &:hover .cog{
    color: #fff;
  }
  h3 {
    color: #A098AE;
    font-weight: bold;
    font-size: 1.2em;
    line-height: 1.2em;
    width: 150px;
  }
  &:hover h3{
    color: #fff;
  }
  &:hover {
    background-color: #4CBC9A;
    color: #fff;
  }
  @media only screen and (max-width: 1100px) {
    /* background-color: blue; */
    text-align: center;
    .cog{
        display: none;      
    }
  }
`;
