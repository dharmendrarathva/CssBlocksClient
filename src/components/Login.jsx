import { useState } from "react";
import { authApi } from "../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER");
  const [otp, setOtp] = useState("");

  const [step, setStep] = useState("register"); // register | verify | login
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      await authApi.register({ email, password, role });
      setMessage("✔ Registered. Check email for OTP.");
      setStep("verify");
      setStatus("success");
    } catch (err) {
      setMessage("✖ " + err.message);
      setStatus("error");
    }
  }

  async function handleVerify(e) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      await authApi.verify({ email, code: otp });
      setMessage("✔ Email verified. You can login now.");
      setStep("login");
      setStatus("success");
    } catch (err) {
      setMessage("✖ " + err.message);
      setStatus("error");
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await authApi.login(email, password);
      localStorage.setItem("token", res.token);
      setMessage("✔ Login successful. Token saved.");
      setStatus("success");
    } catch (err) {
      setMessage("✖ " + err.message);
      setStatus("error");
    }
  }

  return (
    <div style={{ maxWidth: 380, margin: "60px auto", fontFamily: "sans-serif" }}>
      <h2>Auth API Test</h2>

      {step === "register" && (
        <form onSubmit={handleRegister}>
          <h3>1. Register</h3>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br /><br />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br /><br />

          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </select>
          <br /><br />

          <button type="submit" disabled={status === "loading"}>
            Register
          </button>
        </form>
      )}

      {step === "verify" && (
        <form onSubmit={handleVerify}>
          <h3>2. Verify OTP</h3>
          <input
            type="text"
            placeholder="OTP Code"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <br /><br />

          <button type="submit" disabled={status === "loading"}>
            Verify
          </button>
        </form>
      )}

      {step === "login" && (
        <form onSubmit={handleLogin}>
          <h3>3. Login</h3>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br /><br />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br /><br />

          <button type="submit" disabled={status === "loading"}>
            Login
          </button>
        </form>
      )}

      {message && (
        <p style={{ marginTop: 20, color: status === "success" ? "green" : "red" }}>
          {message}
        </p>
      )}
    </div>
  );
}
