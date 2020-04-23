import React from "react";
import { ThemeProvider } from "styled-components";


const theme = {
  colors: {
    primary: "#FFFFFF",
    secondary: "#2A75BC",
    background: "#2B2B2B",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "25",
    medium: "35",
    large: "50"
  }
}

interface ThemeProps {
  children?: any;
}

export class Theme extends React.Component<ThemeProps, {}> {
  render() {
    return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>;
  }
}
