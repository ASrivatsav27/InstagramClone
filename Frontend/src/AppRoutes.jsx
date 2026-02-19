import { BrowserRouter, Routes, Route } from "react-router";
import LoginForm from "./features/auth/pages/LoginForm";
import Register from "./features/auth/pages/Register";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
