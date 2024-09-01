import React, { useState, useEffect } from "react";
import { products } from "../../data/products";
import "./Grid.scss";
import { Link } from "react-router-dom";

function ProductList() {
  const [genreFilter, setGenreFilter] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
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
              />
              <div className="productTitle">
                <div className="title">
                  {product.title.toUpperCase()}
                </div>
                <div className="price">
                  H:{product.height} * W:{product.width}
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
