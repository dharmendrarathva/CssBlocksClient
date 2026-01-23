import { useState } from "react";
import { verifyUser } from "../../api/auth.api";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await verifyUser({ email, code });
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  if (!email) return <p>Invalid request</p>;

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={submit}>
        <h2>Verify Email</h2>
        <p>Code sent to <strong>{email}</strong></p>

        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="6-digit code"
          maxLength={6}
          required
        />

        <button disabled={loading}>
          {loading ? "Verifying..." : "Verify"}
        </button>
      </form>
    </div>
  );
};

export default VerifyOtp;
