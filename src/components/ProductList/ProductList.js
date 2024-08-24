import React, { useState, useEffect } from "react";
import { products } from "../../data/products";
import "./ProductList.scss";
import { Link } from "react-router-dom";

function ProductList() {
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
    <div className="productList">
      <div className="productList_wrapper">
        {/* <div className="filter_wrapper">
          <button className="btn" onClick={() => setGenreFilter("all")}>
            Все
          </button>
          <button className="btn" onClick={() => setGenreFilter("пейзаж")}>
            Пейзаж
          </button>
          <button className="btn" onClick={() => setGenreFilter("море")}>
            Море
          </button>
          <button className="btn" onClick={() => setGenreFilter("абстракция")}>
            Абстракция
          </button>
          <button className="btn" onClick={() => setGenreFilter("портрет")}>
            Портрет
          </button>
        </div> */}

        <div
          className="productList"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            justifyContent: "center",
          }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <>
                <Link
                  to={`/product/${product.id}`}
                  key={product.id}
                  className="productLink"
                >
                  <img
                    className="productImage"
                    src={product.images[0]}
                    alt={product.title}
                    id={product.id}
                    loading="lazy"
                  />
                  {/* Название (изначально скрытое) */}
                  <div className="productTitle">
                    <div className="title">
                      {product.title.toUpperCase()}
                    </div>
                    <div className="price">
                     H:{product.height} * W:{product.width}
                    </div>
                  </div>
                </Link>
              </>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
