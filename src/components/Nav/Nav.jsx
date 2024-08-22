import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <nav className="desktopNav">
      <ul>
        <li>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link" : "link"
            }
          >
            {"About artist".toUpperCase()}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link" : "link"
            }
          >
            GALLERY
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/exhibitions"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link" : "link"
            }
          >
            EXHIBITIONS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link" : "link"
            }
          >
            CONTACTS
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/delivery"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link" : "link"
            }
          >
            {"оплата и доставка".toUpperCase()}
          </NavLink>
        </li> */}

      </ul>
    </nav>
  );
}

export default Nav;
