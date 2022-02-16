import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useAuth } from "../contexts/AuthContext/useAuth";

export function LoginPage() {
  const navigate = useNavigate();
  const auth = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // has logged user
  useEffect(() => {
    if (auth.token) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await auth.authenticate(email, password);

      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Invalid email or password");
    }
  };

  return (
    <Box
      sx={{
        p: 3,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Typography gutterBottom component="h1" variant="h6">
          Sign In
        </Typography>

        <TextField
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          margin="normal"
          placeholder="Email"
          fullWidth
        />

        <TextField
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          margin="normal"
          placeholder="Email"
          fullWidth
        />

        <Button sx={{ mt: 3 }} variant="contained" type="submit">
          Sign In
        </Button>
      </form>
    </Box>
  );
}
