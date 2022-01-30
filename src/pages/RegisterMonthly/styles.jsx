import styled from "styled-components";
// import LogoImage from "../../images/Logo.png";

export const Container = styled.div`
  /* background-color: green; */
  display: flex;
  width: 100vw;
  height: 100vh;
`;


export const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    width: 80%;
    height: 100vh;

    background-color: #fafafa;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 30%;
    padding-left: 80px;
    margin-top: 50px;
    label{
      /* display: block; */
      margin-top: 10px;
        padding: 15px;
        font-weight: bold;
        font-size: 1.2em;
      /* background-color: greenyellow; */
    }

   
    /* background-color: greenyellow; */
`;

export const Input = styled.input`
  
  padding: 5px;
  border-radius: 5px;
  width: 90%;
  height: 50px;
  margin-top: 10px;
  background-color: #fff;
  border: 1px solid #6e6e6e;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 1px;
  }

  /* @media only screen and (max-width: 400px) {
    .envelope-icon {
      display: none;
    }
  } */
`;

export const Submit = styled.input`
  background-color: #4C5DF1;
  display: block;
  color: #fff;
  border: none;
  width: 150px;
  padding: 15px;
  margin-top: 80px;
 
  font-weight: bold;
  border-radius: 15px;

`;

export const Select = styled.select`
 
 padding: 5px;
  border-radius: 5px;
  width: 90%;
  height: 50px;
  margin-top: 10px;
  background-color: #fff;
  border: 1px solid #6e6e6e;
  font-size: 1em;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 1px;
  }

  


`;
