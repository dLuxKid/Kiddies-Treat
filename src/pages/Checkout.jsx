import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/commonSection";
import "./Checkout.css";

const Checkout = () => {
  const [shippingForm, setShippingForm] = useState({
    name: "",
    email: "",
    number: "",
    country: "",
    city: "",
    postalCode: "",
  });

  const [shippingInfo, setShippingInfo] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setShippingForm({ ...shippingForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      shippingForm.city &&
      shippingForm.country &&
      shippingForm.name &&
      shippingForm.email &&
      shippingForm.number &&
      shippingForm.postalCode
    ) {
      const newInfo = { ...shippingForm, id: new Date().getTime().toString() };
      setShippingInfo({ ...shippingInfo, newInfo });
      setShippingForm({
        name: "",
        email: "",
        number: "",
        country: "",
        city: "",
        postalCode: "",
      });
      console.log(shippingInfo);
    }
  };

  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + shippingCost;

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
              <form className="checkout_form" onSubmit={handleSubmit}>
                <div className="form_group">
                  <input
                    required
                    onChange={handleChange}
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={shippingForm.name}
                  />
                </div>
                <div className="form_group">
                  <input
                    required
                    onChange={handleChange}
                    value={shippingForm.email}
                    type="text"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div className="form_group">
                  <input
                    required
                    onChange={handleChange}
                    value={shippingForm.number}
                    type="number"
                    placeholder="Phone number"
                    name="number"
                  />
                </div>
                <div className="form_group">
                  <input
                    required
                    onChange={handleChange}
                    value={shippingForm.country}
                    type="text"
                    placeholder="Country"
                    name="country"
                  />
                </div>
                <div className="form_group">
                  <input
                    required
                    onChange={handleChange}
                    value={shippingForm.city}
                    type="text"
                    placeholder="City"
                    name="city"
                  />
                </div>
                <div className="form_group">
                  <input
                    required
                    onChange={handleChange}
                    value={shippingForm.postalCode}
                    type="number"
                    placeholder="Postal Code"
                    name="postalCode"
                  />
                </div>
              </form>
              <button className="addToCart_btn" onClick={handleSubmit}>
                Payment
              </button>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout_bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: $<span>{cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping Fee: $<span>{shippingCost}</span>
                </h6>
                <div className="checkout_total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total fees to pay: $<span>{totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
