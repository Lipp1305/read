import { ThemeProvider } from "@emotion/react";
import MainPage from "./components/MainPage";
import theme from "./themes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
