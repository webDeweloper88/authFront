import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const LoginPage = () => {
  return (
    <div>
      <Box sx={{ mt: 3 }}>
        <Typography variant="h4">Вход</Typography>
        <Typography variant="body1" gutterBottom>
          Добро пожаловать! Пожалуйста, войдите в свой аккаунт.
        </Typography>

        <TextField label="Email" variant="outlined" fullWidth margin="normal" />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" fullWidth sx={{ mb: 3 }}>
          Войти
        </Button>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body1">
            У вас нет аккаунта? <span className="textLink">Регистрация</span>
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default LoginPage;
