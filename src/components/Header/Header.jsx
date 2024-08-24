import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./Header.scss";
import MobileNav from "../MobileNav/MobileNav";

function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link allura-regular" : "link allura-regular"
            }
          >
            Svetlana Lebedeva
          </NavLink>
        </div>
        <Nav />
        <MobileNav />
      </div>
    </header>
  );
}

export default Header;
