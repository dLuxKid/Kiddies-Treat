import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import "./carts.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const Carts = () => {
  const dispatch = useDispatch();
  const cardProducts = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.totalAmount);

  const exitCart = () => dispatch(cartActions.toggleCart());

  return (
    <div className="cart_container">
      <ListGroup className="cart">
        <div className="cart_close" onClick={exitCart}>
          <span>
            <i class="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart_item_list">
          {cardProducts.length === 0 ? (
            <h6 className="text-center mt-5">No items in cart</h6>
          ) : (
            // <CartItems />
            cardProducts.map((item, index) => (
              <CartItems item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart_bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal amount: <span>${total}</span>
          </h6>
          <button onClick={exitCart}>
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
