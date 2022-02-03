import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;

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

  .apelido {
    width: 50%;
  }

  h3 {
    margin-left: 50px;
    padding: 30px;
    font-size: 1.3em;
    font-weight: bold;
  }
  label {
    padding: 10px;
    font-weight: bold;
  }
  p{
    color: #dc3545;
  }

  @media only screen and (max-width: 600px) {
    width: 100vw;
    h3 {
      margin-left: 0;
      padding: 20px;
      text-align: center;
      font-size: 1.1em;
    }
    label {
      padding: 0;
    }
  }
`;

export const Form = styled.form`
  width: 50%;
  padding: 20px;
  margin-left: 50px;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0;
    width: 90%;
  }
`;

export const Checkbox = styled.input`
  margin-top: 15px;
  margin-right: 10px;
`;

export const Submit = styled.button`
  display: block;
  border: none;
  width: 150px;
  padding: 15px;
  margin-top: 50px;
  margin-bottom: 20px;
  font-weight: bold;
  border-radius: 15px;
  color: #fff;
  background-color: #4c5df1;
  cursor: pointer;
`;
