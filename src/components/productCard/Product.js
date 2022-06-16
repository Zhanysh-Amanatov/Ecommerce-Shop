import React from "react";
import "./Product.scss";
import { products } from "./ProductMockData";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const redirect = useNavigate();
  const handleClick = () => {
    redirect("/basket");
  };
  return (
    <div>
      <h2 className="heading"> BEST SALES</h2>
      <div className="containerWrapper">
        {products.map((product) => {
          return (
            <div className="product" key={product.id}>
              <img src={product.image} alt="" className="product_image" />
              <div className="product_info">
                <div className="product_info_name">{product.name}</div>
                <div className="product_info_price">{product.price} s</div>
                <button
                  type="button"
                  className="product_button"
                  onClick={handleClick}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
