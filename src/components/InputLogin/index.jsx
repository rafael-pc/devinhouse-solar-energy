import React from "react";
import { InputStyle, ErrorMessage, ContainerInput, Label } from "./styles";

export function InputLogin({ icon, errorMessage, label, width, ...otherProps }) {
  return (
    <>
      <Label>{label}</Label>
      <ContainerInput errorMessage={errorMessage} style={{width: width}}>
        {icon}
        <InputStyle {...otherProps}></InputStyle>
      </ContainerInput>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </>
  );
}

export default InputLogin;
