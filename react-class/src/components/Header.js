import React from "react";

function Header() {
  return (
    <div className="header">
      <p className="header-p">
        Support Ukraine 🇺🇦 <span id="header-span">Help Provide Humanitarian Aid to Ukraine.</span>
      </p>
      <div id="nav-bar">
          <img src={"logo192.png"} alt=""/>
          <h2 className="header-h2">React</h2>
          <div className="nav">
              <p>Doc</p>
              <p>Tutorial</p>
              <p>Blog</p>
              <p>Community</p>
          </div>
      <input type="text" placeholder="Search" id="header-search"/>
      </div>
    </div>
  );
}

export default Header;
