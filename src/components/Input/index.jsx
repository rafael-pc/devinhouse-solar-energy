import React from "react";

import { InputStyle } from "./styles";

export function Input({...otherProps }) {
  return (
      <InputStyle {...otherProps}></InputStyle>
  );
}

export default Input;
