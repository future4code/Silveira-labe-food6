import React from "react";
import theme from "./constants/theme";
import { ThemeProvider } from '@material-ui/core/styles'
import { Router } from "./routes/Router";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <h1>LABEFOOD</h1>
    </ThemeProvider>
  );
}

export default App;
