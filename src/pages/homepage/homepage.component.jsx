// import React from "react"; // not needed with the jsx file due to the new update

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">JACKETS</h1>
          <span className="subtitle">SHOP</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">SNEAKER</h1>
          <span className="subtitle">SHOP</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">WOMEN</h1>
          <span className="subtitle">SHOP</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">MEN</h1>
          <span className="subtitle">SHOP</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;