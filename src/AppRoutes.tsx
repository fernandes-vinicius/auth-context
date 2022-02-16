import { Route, Routes } from "react-router-dom";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedLayout>
            <HomePage />
          </ProtectedLayout>
        }
      />

      <Route path="/login" element={<LoginPage />} />

      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}
