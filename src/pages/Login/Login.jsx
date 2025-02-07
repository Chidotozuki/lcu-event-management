import { useState } from "react";
import "./Login.css";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { signIn, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //error handling.
  const [error, setError] = useState("");

  async function handleSubmit() {
    if (email === "" || password === "") setError("This field cannot be empty");
    else setError("");
    await signIn(email, password);
    
  }

  return (
    <div className="login-main">
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        {error && <p className="login-error">{error}</p>}
        <div className="login-form">
          <label className="login-login-label">Email</label>
          <input
            className="login-input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="login-login-label">Password</label>
          <input
            className="login-input"
            type="password"
            placeholder="Enter your email"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login-button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
