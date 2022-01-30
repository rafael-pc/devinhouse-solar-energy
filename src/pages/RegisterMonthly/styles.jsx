import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100vh;
  background-color: #fafafa;

  @media only screen and (max-width: 600px) {
    width: 100vw;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding-left: 80px;
  margin-top: 50px;

  .date {
    width: 90%;
  }

  label {
    margin-top: 10px;
    padding: 5px;
    font-weight: bold;
    font-size: 1.2em;
  }

  @media only screen and (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0;
    width: 40%;
  }
  @media only screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0;
    width: 60%;
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0;
    width: 70%;
    padding-left: 30px;

    label {
      font-size: 1em;
    }
  }
`;

export const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  width: 90%;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid #6e6e6e;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 1px;
  }

  @media only screen and (max-width: 600px) {
    height: 40px;
  }
`;

export const Submit = styled.input`
  display: block;
  border: none;
  width: 150px;
  padding: 15px;
  margin-top: 80px;
  margin-bottom: 30px;
  font-weight: bold;
  border-radius: 15px;
  color: #fff;
  background-color: #4c5df1;
`;

export const Select = styled.select`
  padding: 5px;
  border-radius: 5px;
  width: 90%;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid #6e6e6e;
  font-size: 1em;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 1px;
  }

  @media only screen and (max-width: 600px) {
    height: 40px;
  }
`;
