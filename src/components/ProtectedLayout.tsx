import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext/useAuth";

export function ProtectedLayout({ children }: { children: JSX.Element }) {
  const auth = useAuth();

  if (!auth.token) {
    return <Navigate to="/login" />;
  }

  return children;
}
