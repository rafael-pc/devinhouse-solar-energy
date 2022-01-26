import styled from "styled-components";


export const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    width: 81%;
    height: 100vh;
   
    /* background-color: greenyellow; */
`;

// export const Header = styled.div`
//   /* background-color: #fff; */
//   background-color: red;
//   height: 85px;
//   /* width: 1554px; */
//   /* width: 80.9vw; */
//   width: 100%;
//   display: flex;
//   justify-content: left;
//   align-items: center;
//   padding-left: 40px;

//   h1 {
//     font-size: 1.5em;
//     color: #374557;
//     /* font-weight: bolder; */
//     font-weight: bolder;
//     font-family: Arial, Helvetica, sans-serif;
//   }
// `;

export const Cards = styled.div`
  background-color: red;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  /* width: 1400px; */
  gap: 30px;
  margin: 0 auto;
  margin-top: 30px;
  
  div {
      border-radius: 8px;
      padding: 20px;
      flex-basis: 250px;
      border: 1px solid #d3d3d3;
      /* width: 200px; */
      color: #A098AE;
      height: 140px;
      font-weight: bolder;
      /* background-color: #fff; */
      background-color: aquamarine;
  }
  h3{
      font-size: 1.1em;
      padding: 8px;
  }
  span{
    font-size: 3.5em;
    background-color: yellow;
    /* margin-top: 50px; */
  }
`;

// export const UnitsValues = styled.div`
//     font-size: 1em;
//     width: 20px;
//     height: 20px;
//     background-color: azure;
// `