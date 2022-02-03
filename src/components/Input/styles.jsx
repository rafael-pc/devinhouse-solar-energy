import styled from "styled-components";

export const InputStyle = styled.input`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid ${(props) => (props.errorMessage ? "#dc3545" : "#6e6e6e")};
  border-radius: 5px;
  width: 90%;
  height: 50px;
  margin-top: 10px;
  background-color: #fff;

  &:hover {
    box-shadow: ${(props) => (props.errorMessage ? "#dc3545" : "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 1px")};
  }

  .icon {
    width: 70px;
    height: 30px;
    color: #a8a8a8;
  }

  @media only screen and (max-width: 600px) {
    height: 35px;
  }
  @media only screen and (max-width: 400px) {
    .envelope-icon {
      display: none;
    }
  }
`;

export const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 0.9em;
  padding: 5px;
`;

export const Label = styled.div`
  margin-top: 10px;
  font-weight: bold;
  font-size: 1.1em;

  @media only screen and (max-width: 600px) {
    font-size: 1em;
    padding: 5px;
  }
`;