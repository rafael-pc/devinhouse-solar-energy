import React from "react";

import { InputStyle, ErrorMessage, ContainerInput, Label } from "./styles";

export function Input({ icon, errorMessage, label, ...otherProps }) {
  return (
    <>
      <Label>{label}</Label>
      <ContainerInput errorMessage={errorMessage}>
        {icon}
        <InputStyle {...otherProps}></InputStyle>
      </ContainerInput>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </>
  );
}

export default Input;
