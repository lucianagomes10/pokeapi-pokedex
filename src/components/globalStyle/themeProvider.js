import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

// eslint-disable-next-line react/prop-types
export default function ColorProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}