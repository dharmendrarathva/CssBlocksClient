import React from "react";
import "./home.css";
import Search from "../components/Searchbar/Search";

const Home = () => {
  return (
    <section className="home">
      <div className="home-container">
        <span className="home-badge">
          www.uisnaps.com
        </span>

        <h1 className="home-title">
          The Largest Library of <br />
          Open-Source CSS Blocks
        </h1>

        <p className="home-subtitle">
          Community-built UI blocks. Copy as HTML, CSS, Tailwind,
          React and more.
        </p>

        <Search />
      </div>
    </section>
  );
};

export default Home;
