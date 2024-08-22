import React from "react";
import { products } from "../../data/products";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NavLink } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import "./ProductDetail.scss";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  console.log(product);
  return (
    <div className="productDetail">
      <NavLink
        to="/gallery"
        className={({ isActive, isPending }) =>
          isPending ? "pending links" : isActive ? "active links" : "links"
        }
      >
        <IoIosArrowBack />
        back to gallery

      </NavLink>
      <h1>{product.title}</h1>
      <Carousel
        showThumbs={true}
        autoPlay={false}
        dynamicHeight={true}
        width={"50%"}
        showArrows={true}
      >
        {product.images.map((image, index) => (
          <>
            <img src={`/${image}`} alt={product.title} />
            <br />
          </>
        ))}
      </Carousel>
      <p>{product.description}</p>
      <p>Price {product.price} RUB</p>
      <p>Width {product.width} sm</p>
      <p>Height {product.height} sm</p>
      <button className="btn">Order painting</button>
    </div>
  );
}

export default ProductDetail;
