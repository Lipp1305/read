import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import MainPage from "./components/MainPage";
import MenuBar from "./components/MenuBar";
import { CssBaseline } from "@mui/material";


//Create App Bar
//Create Body

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MenuBar />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
