import { useState } from "react";
import "../styles/form.scss";
import axios from "axios";
import { Link } from "react-router";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8000/auth/login", {
        username,
        password,
      })
      .then((res) => {
        console.log(res.data);
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
