import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import MainContainer from "./components/main-container";

const defaultTheme = createTheme({
  palette: {
    background: {
      default: "#e27d60",
    },
  },
});

export default function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <MainContainer />
      </ThemeProvider>
    </>
  );
}
