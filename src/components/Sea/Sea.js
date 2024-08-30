import React, { useState, useEffect } from "react";
import { products } from "../../data/products";
import { Link } from "react-router-dom";
import '../ProductList/ProductList.scss';

function ProductList() {
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    if (!products) return;
    const filtered = products.filter((product) => product.genre === "море");
    setGenre(filtered);
  }, []);

  return (
    <div className="productList">
      <div className="productList_wrapper">
        <div className="productList">
          {genre.length > 0 ? (
            genre.map((product) => (
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
                    <div className="title">{product.title.toUpperCase()}</div>
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
