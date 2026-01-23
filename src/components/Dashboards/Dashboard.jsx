import { useEffect, useState } from "react";
import { adminHello, userHello } from "../api/hello.api";

const Dashboard = () => {
  const [role, setRole] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const detectRole = async () => {
      try {
        // Try ADMIN endpoint first
        const res = await adminHello();
        setRole("ADMIN");
        setMessage(res.data); // Hello ADMIN
      } catch (err) {
        if (err.response?.status === 403) {
          // Not admin → try USER
          const res = await userHello();
          setRole("USER");
          setMessage(res.data); // Hello USER
        }
      }
    };

    detectRole();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{message}</p>
      <p>Role: {role}</p>
    </div>
  );
};

export default Dashboard;
