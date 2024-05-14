import "./App.scss";
import Home from "./components/home";
import { Routes, Route } from "react-router-dom";
import PriveteRoute from "./utils/router/privateRoute";
import AuthRootComponent from "./components/auth/authRootComponent";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<PriveteRoute />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="login" element={<AuthRootComponent />} />
            <Route path="register" element={<AuthRootComponent />} />
          </Routes>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
