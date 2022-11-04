import React from "react";
import { Link } from "react-router-dom";
import "./productCard.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

// This component sends the food detail as props to the home page
const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  // the function sends out the properties of the item clicked to the redux store and adds it to cart
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  return (
    <div className="product_item">
      <div className="product_img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>

      <div className="product_content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className="d-flex row gap-2 align-items-start ">
          <span className="product_price">${price}</span>
          <button className="addToCart_btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
