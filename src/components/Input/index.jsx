import React from "react";
import { InputStyle, ErrorMessage, Label } from "./styles";

export function Input({ errorMessage, label, width, ...otherProps }) {
  return (
    <>
      <Label>{label}</Label>
      <InputStyle
        errorMessage={errorMessage}
        style={{ width: width }}
        {...otherProps}
      ></InputStyle>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </>
  );
}

export default Input;
