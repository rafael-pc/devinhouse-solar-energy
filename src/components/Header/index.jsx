import React from "react";
import { HeaderStyle } from "./styles";

function Header({ title }) {
  return (
    <HeaderStyle>
      <h1>{title}</h1>
    </HeaderStyle>
  );
}

export default Header;
