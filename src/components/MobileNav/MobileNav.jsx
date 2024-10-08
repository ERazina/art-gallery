import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import "./MobileNav.scss";

function MobileNav() {
  const [isVisible, setIsVisible] = useState(false);

  const Hamburger = (
    <MdOutlineMenu
      className="HamburgerMenu"
      size="30px"
      color="black"
      onClick={() => setIsVisible(!isVisible)}
    />
  );

  return (
    <nav className="MobileNavigation">
      {Hamburger}
      <ul className={isVisible ? "NavLinks visible" : "NavLinks hidden "}>
        <li onClick={() => setIsVisible(false)} className="list-item">
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link" : "link"
            }
          >
            ABOUT
          </NavLink>
        </li>
        <li onClick={() => setIsVisible(false)} className="list-item">
          <NavLink
            to="/exhibitions"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link" : "link"
            }
          >
            EXHIBITIONS
          </NavLink>
        </li>
        <li onClick={() => setIsVisible(false)} className="list-item">
          <NavLink
            to="/gallery"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link" : "link"
            }
          >
            GALLERY
          </NavLink>
          </li>
        {/* <li onClick={() => setIsVisible(false)} className="list-item">
          <NavLink
            to="/sea"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link" : "link"
            }
          >
            SEA
          </NavLink>
        </li> */}
        {/* <li onClick={() => setIsVisible(false)} className="list-item">
          <NavLink
            to="/abstaction"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link" : "link"
            }
          >
            ABSTACTION
          </NavLink>
        </li> */}
        {/* <li onClick={() => setIsVisible(false)} className="list-item">
          <NavLink
            to="/landscape"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link" : "link"
            }
          >
            LANDSCAPE
          </NavLink>
        </li> */}
        {/* <li onClick={() => setIsVisible(false)} className="list-item">
          <NavLink
            to="/portrait"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link" : "link"
            }
          >
            PORTRAIT
          </NavLink>
        </li> */}
        <li onClick={() => setIsVisible(false)} className="list-item">
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

export default MobileNav;
