import React from "react";

import { InputStyle } from "./styles";

export function Input({ label, ...otherProps }) {
  return (
      <InputStyle {...otherProps}></InputStyle>
  );
}

export default Input;
