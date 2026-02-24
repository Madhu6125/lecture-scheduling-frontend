import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await loginUser({ email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      if (res.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/instructor");
      }
    } catch {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p className="login-subtitle">
          Login to continue to Ideamagix LMS
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>

          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;