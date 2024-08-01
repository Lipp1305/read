import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import MainPage from "./components/MainPage";
import MenuBar from "./components/MenuBar";
import { CssBaseline } from "@mui/material";
import MainAuth from "./auth/MainAuth";


//Create App Bar
//Create Body

function App() {
  const loggedIn = false;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loggedIn ? (
      <>
        <MenuBar />
        <MainPage />
      </>
      ) : (
        <MainAuth />
      )}
      
    </ThemeProvider>
  );
}

export default App;
