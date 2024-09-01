import React, { useState } from "react";
import { products } from "../../data/products";
import { Link } from "react-router-dom";
import "./Grid.scss";
import "./Filter.scss";

function ProductList() {
  const [genreFilter, setGenreFilter] = useState("all");

  const filteredProducts =
    genreFilter === "all"
      ? products
      : products.filter((product) => product.genre === genreFilter);

  return (
    <>
      <div className="filter-wrappper">
        <button onClick={() => setGenreFilter("all")} className="filter-btn">
          ALL
        </button>
        <button onClick={() => setGenreFilter("море")} className="filter-btn">
          SEA
        </button>
        <button
          onClick={() => setGenreFilter("абстракция")}
          className="filter-btn"
        >
          ABSTRACTION
        </button>
        <button onClick={() => setGenreFilter("пейзаж")} className="filter-btn">
          LANDSCAPE
        </button>
      </div>
      <div className="productList_wrapper">
        <div className="productList">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
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
                  srcSet={`${product.images[0]} 480w, ${product.images[0]} 720w, ${product.images[0]} 1080w`}
                  sizes="(max-width: 600px) 480px, (max-width: 900px) 720px, 1080px"
                />
                <div className="productTitle">
                  <div className="title">{product.title.toUpperCase()}</div>
                  <div className="price">
                    H:{product.height} * W:{product.width}
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No images in this genre yet</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductList;
