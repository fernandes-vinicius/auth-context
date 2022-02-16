import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { useAuth } from "../contexts/AuthContext/useAuth";

export function HomePage() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();

    navigate("/login");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h6" gutterBottom>
        Welcome To Home Page
      </Typography>

      <Button onClick={handleLogout}>Sair</Button>
    </Box>
  );
}
