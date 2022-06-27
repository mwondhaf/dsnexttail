import React from "react";
import NavBar from "./NavBar";
import TopBar from "./TopBar";

function Layout({ children }) {
  return (
    <div>
      <TopBar />
      <NavBar />
      {children}
    </div>
  );
}

export default Layout;
