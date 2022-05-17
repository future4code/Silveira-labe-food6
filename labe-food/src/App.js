import React from "react";
import theme from "./constants/theme";
import { ThemeProvider } from '@material-ui/core/styles'
import { Router } from "./routes/Router";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;


// token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9