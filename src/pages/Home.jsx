import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <main style={{ padding: "60px 24px", textAlign: "center" }}>
        <h1>Welcome to CssBlocks</h1>
        <img src="https://www.canva.com/design/DAG-Rso2S2Y/9LC-zVzZpzcsStC-WjYCXw/edit?utm_content=DAG-Rso2S2Y&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" alt="" />
        <p>Reusable UI blocks for modern web apps.</p>
      </main>
      <Footer />
    </div>
  );
}
