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
        <li onClick={() => setIsVisible(false)}>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link" : "link"
            }
          >
            {"о художнике".toUpperCase()}
          </NavLink>
        </li>
        <li onClick={() => setIsVisible(false)}>
          <NavLink
            to="/gallery"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link" : "link"
            }
          >
            ГАЛЕРЕЯ
          </NavLink>
        </li>
        <li onClick={() => setIsVisible(false)}>
          <NavLink
            to="/exhibitions"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link" : "link"
            }
          >
            ВЫСТАВКИ
          </NavLink>
        </li>
        <li onClick={() => setIsVisible(false)}>
          <NavLink
            to="/contacts"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link" : "link"
            }
          >
            КОНТАКТЫ
          </NavLink>
        </li>
        {/* <li onClick={() => setIsVisible(false)}>
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

export default MobileNav;
