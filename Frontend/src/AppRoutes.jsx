import { BrowserRouter, Routes, Route } from "react-router";
import LoginForm from "./features/auth/pages/LoginForm";
import Register from "./features/auth/pages/Register";
import Feed from "./features/post/pages/Feed";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
