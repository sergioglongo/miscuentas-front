import { useState } from "react";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
} from "@mui/material";
import { useNavigate } from "@tanstack/react-router";

import { useAuthStore } from "@/store/authStore";

export function SignInForm() {
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Setting authenticated state to true");
    setIsAuthenticated(true);
    navigate({ to: "/dashboard" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} alignItems="center">
        <FormControl>
          <TextField
            name="email"
            label="Usuario / email"
            sx={{ width: "100%" }}
          />
        </FormControl>

        <FormControl>
          <TextField
            fullWidth
            name="password"
            label="Contraseña"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ width: "100%" }}
          />
        </FormControl>

        <Link color="inherit" variant="subtitle2" sx={{ fontSize: "16px" }}>
          Olvidaste tu contraseña?
        </Link>

        <Button
          fullWidth
          size="large"
          type="submit"
          color="primary"
          variant="contained"
          sx={{ width: "200px" }}
        >
          Inicia sesión
        </Button>
      </Stack>
    </form>
  );
}
