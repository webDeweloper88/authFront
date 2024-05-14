import { useLocation } from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import "./style.scss";
import { Box } from "@mui/material";
const AuthRootComponent = () => {
  const location = useLocation();
  return (
    <div className="root">
      <form className="form">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={640}
          padding={5}
          borderRadius={5}
          margin="auto"
          boxShadow={"5px 1px 10px #E4C2A4"}
        >
          {location.pathname == "/login" ? (
            <LoginPage />
          ) : location.pathname == "/register" ? (
            <RegisterPage />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRootComponent;
