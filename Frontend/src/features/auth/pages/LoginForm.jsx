import { useState, useEffect } from "react";
import "../styles/form.scss";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      console.log("Logged in user:", user);
    }
  }, [user]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    handleLogin(username, password).then((res) => {
      console.log(res);
      navigate("/");
    });
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Enter username"
          />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter password"
          />
          <button type="submit">Login</button>
          <p>
            Do'nt have an account?{" "}
            <Link className="toggleAuthForm" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default LoginForm;
