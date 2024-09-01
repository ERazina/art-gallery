import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <nav className="desktopNav">
      <ul>
        <li className="list-item">
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link" : "link"
            }
          >
            ABOUT
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink
            to="/exhibitions"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link" : "link"
            }
          >
            EXHIBITIONS
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink
            to="/gallery"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link" : "link"
            }
          >
            GALLERY
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink
            to="/sea"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link" : "link"
            }
          >
            SEA
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink
            to="/abstaction"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link" : "link"
            }
          >
            ABSTACTION
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink
            to="/landscape"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link" : "link"
            }
          >
            LANDSCAPE
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink
            to="/portrait"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link" : "link"
            }
          >
            PORTRAIT
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/gallery"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link" : "link"
            }
          >
            GALLERY
          </NavLink>
        </li> */}
        <li className="list-item">
          <NavLink
            to="/contacts"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link" : "link"
            }
          >
            CONTACTS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
