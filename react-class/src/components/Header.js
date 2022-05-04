import React from "react";

function Header() {
  return (
    <div className="header">
      <p className="header-p">
        Support Ukraine 🇺🇦 <span id="header-span">Help Provide Humanitarian Aid to Ukraine.</span>
      </p>
      <div id="nav-bar">
          <img className="nav-bar-img" src={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"} alt=""/>
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
