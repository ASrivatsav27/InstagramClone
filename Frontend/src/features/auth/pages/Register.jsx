import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleRegister, user, loading } = useAuth();
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();

    handleRegister(username, email, password);
    navigate("/");
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            name="username"
            placeholder="Enter username"
          />
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            placeholder="Enter email"
          />
          <input
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            placeholder="Enter password"
          />
          <button>Register</button>
        </form>

        <p>
          Already have an account?{" "}
          <Link className="toggleAuthForm" to="/login">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
