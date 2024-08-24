import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import { products } from "../../data/products";
import "./Nav.scss";

function Nav() {

  const [genreFilter, setGenreFilter] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Функция фильтрации
  useEffect(() => {
    // Проверяем, что продукты загружены и фильтр применен корректно
    if (!products || products.length === 0) return;

    if (genreFilter === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.genre === genreFilter
      );
      setFilteredProducts(filtered);
    }
  }, [genreFilter]);

  return (
    <nav className="desktopNav">
      <ul>
        {/* <li><button className="button" onClick={setGenreFilter}>МОРЕ</button></li> */}
        <li>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending link" : isActive ? "active link" : "link"
            }
          >
            {"About".toUpperCase()}
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
