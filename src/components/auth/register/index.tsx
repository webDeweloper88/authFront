import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

const RegisterPage = () => {
  return (
    <div>
      <Box sx={{ mt: 3 }}>
        <Typography variant="h4">Регистрация</Typography>
        <Typography variant="body1" gutterBottom>
          Создайте свой аккаунт для доступа ко всем нашим сервисам.
        </Typography>

        <TextField label="Name" variant="outlined" fullWidth margin="normal" />
        <TextField
          label="User name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField label="Email" variant="outlined" fullWidth margin="normal" />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mb: 3 }}
        >
          Зарегистрироваться
        </Button>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body1">
            Уже есть аккаунт? <span className="textLink">Войти</span>
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default RegisterPage;
