export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} CssBlocks. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "auto",
    padding: "12px",
    background: "#f1f5f9",
    textAlign: "center",
    fontSize: 14
  }
};
