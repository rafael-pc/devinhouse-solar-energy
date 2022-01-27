import React from "react";

import { InputStyle, ErrorMessage, ContainerInput } from "./styles";

export function Input({ icon, errorMessage, ...otherProps }) {
  return (
    <>
      <ContainerInput
      errorMessage={errorMessage}
      >
        {icon}

        <InputStyle {...otherProps}></InputStyle>
      </ContainerInput>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </>
  );
}

export default Input;
