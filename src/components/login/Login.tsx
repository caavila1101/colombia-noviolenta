import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  Link,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !password) {
      setError("Por favor completa todos los campos.");
      return;
    }

    // Aquí luego puedes validar con backend
    setSuccess("Inicio de sesión exitoso");
    setName("");
    setPassword("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        px: 3,
      }}
    >
      <Typography variant="h4" mb={3} textAlign="center" color="text.primary">
        Iniciar Sesión
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2, width: "100%", maxWidth: 400 }}>
          {error}
        </Alert>
      )}
      {success && (
        <Alert severity="success" sx={{ mb: 2, width: "100%", maxWidth: 400 }}>
          {success}
        </Alert>
      )}

      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <TextField
          label="Nombre de usuario"
          variant="standard"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label="Contraseña"
          type={showPassword ? "text" : "password"}
          variant="standard"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Ingresar
        </Button>
      </Box>

      <Typography
        variant="body2"
        sx={{ mt: 3, textAlign: "center", color: "text.secondary" }}
      >
        ¿No tienes cuenta?{" "}
        <Link
          component={RouterLink}
          to="/register"
          underline="hover"
          color="secondary"
        >
          Regístrate aquí
        </Link>
      </Typography>
    </Box>
  );
}
