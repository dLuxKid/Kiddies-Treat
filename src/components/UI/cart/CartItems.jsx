import React from "react";
import { ListGroupItem } from "reactstrap";
import "./cartItem.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const CartItems = ({ item }) => {
  const dispatch = useDispatch();
  const { id, title, price, image01, quantity, totalPrice } = item;
  const increase = () =>
    dispatch(cartActions.addItem({ id, price, title, image01 }));
  const decrease = () => dispatch(cartActions.reduceItem({ id }));
  const remove = () => dispatch(cartActions.deleteFromCart({ id }));

  return (
    <ListGroupItem className="border-0 cart_item">
      <div className="cart_item_info d-flex gap-2 ">
        <img src={image01} alt="product-img" />
        <div className="cart_product_info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart_product_title">{title}</h6>
            <p className="cart_product_price d-flex aligns-items-center gap-5">
              {quantity}x <span>${totalPrice}</span>
            </p>
            <div className="increase_decrease_btn d-flex align-items-center justify-content-between">
              <span className="increase" onClick={increase}>
                <i class="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease" onClick={decrease}>
                <i class="ri-subtract-line"></i>
              </span>
            </div>
          </div>

          <span className="delete_btn" onClick={remove}>
            <i class="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItems;
