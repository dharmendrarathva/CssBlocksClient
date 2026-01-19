import "./Footer.css";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-top">
        <div className="Footer-brand">
          <Logo />
          <p>Reusable UI blocks for modern web products.</p>
        </div>

        <div className="Footer-links">
          <h4>Product</h4>
          <a href="#">Blocks</a>
          <a href="#">Pricing</a>
          <a href="#">Changelog</a>
        </div>

        <div className="Footer-links">
          <h4>Resources</h4>
          <a href="#">Docs</a>
          <a href="#">Tutorials</a>
          <a href="#">Community</a>
        </div>

        <div className="Footer-links">
          <h4>Legal</h4>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>

      <div className="Footer-bottom">
        © 2026 UiSnaps. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
