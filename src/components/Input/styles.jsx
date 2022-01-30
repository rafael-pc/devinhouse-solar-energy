import styled from "styled-components";

// export const Container = styled.div`

// `;

export const InputStyle = styled.input`
  flex: 1 0;
  font-size: 1.2em;
  background-color: transparent;
  padding-left: 5px;
  border: 0;

  &:focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 1em;
  padding: 5px;
`;

export const Label = styled.div`
  padding: 17px;
  font-weight: bold;
  font-size: 1.1em;
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid ${(errorMessage) => (errorMessage ? "#dc3545" : "#000")};
  border-radius: 5px;
  width: 90%;
  height: 50px;
  margin-top: 10px;
  background-color: #fff;
  border: 1px solid #6e6e6e;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 1px;
  }
  .icon {
    width: 70px;
    height: 30px;
    color: #a8a8a8;
  }
  @media only screen and (max-width: 400px) {
    .envelope-icon {
      display: none;
    }
  }
`;
