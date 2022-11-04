import React from "react";
import CommonSection from "../components/UI/common-section/commonSection";
import Helmet from "../components/Helmet/Helmet";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Container, Row, Col } from "reactstrap";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h4 className="text-center mt-5">No items in cart</h4>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className="mt-4">
                <h6>
                  Subtotal: $
                  <span className="cart_subtotal">{totalAmount}</span>
                </h6>
                <p>Taxes and shipping will be calculated at checkout</p>
                <div className="d-flex gap-4">
                  <button className="addToCart_btn">
                    <Link to="/foods">Continue Shopping</Link>
                  </button>{" "}
                  <button className="addToCart_btn">
                    <Link to="/checkout">Checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { image01, title, price, quantity, id } = props.item;
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(cartActions.deleteFromCart({ id }));
  };
  return (
    <tr>
      <td className="product_img_box">
        <img src={image01} alt="product-img" />
      </td>
      <td>{title}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td className="product_item_del" onClick={deleteItem}>
        <i class="ri-delete-bin-line"></i>
      </td>
    </tr>
  );
};

export default Cart;
