import styled from "styled-components";
// import LogoImage from "../../images/Logo.png";

export const Container = styled.div`
  background-color: #fafafa;
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
    /* background-color: greenyellow; */

    h3{
      /* text-align: center; */
      margin-left: 50px;
      padding: 20px;
      font-size: 1.3em;
      font-weight: bold;
      margin-top: 50px;
    }
    label{
        margin-top: 20px;
        padding: 15px;
        font-weight: bold;
        /* background-color: #7373ff; */
    }
`;

export const Form = styled.form`

    width: 50%;
    padding: 20px;
    margin-left: 50px;
 
`;

export const Checkbox = styled.input`
  margin-top: 40px;

`;

export const Submit = styled.button`
  background-color: #4C5DF1;
  display: block;
  color: #fff;
  border: none;
  width: 150px;
  padding: 15px;
  margin-top: 80px;
 
  font-weight: bold;
  border-radius: 15px;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */

`;

