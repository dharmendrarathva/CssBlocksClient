import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={styles.header}>
      <h3 style={styles.logo}><img src="https://res.cloudinary.com/ddpvhxnus/image/upload/v1768288047/Screenshot_2026-01-13_123609_faprs2.png" alt="" /></h3>
      <nav style={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    padding: "16px 24px",
    background: "#0f172a",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
        width: "160px",
    },
  nav: { display: "flex", gap: 16 }
};
