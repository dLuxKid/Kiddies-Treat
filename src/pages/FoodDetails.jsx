import React, { useState, useEffect } from "react";
import "./FoodDetails.css";
import products from "../assets/data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/commonSection";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../components/UI/product-card/productCard";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";

const FoodDetails = () => {
  const [tab, setTab] = useState(true);
  const [review, setReview] = useState({ name: "", email: "", reviewMsg: "" });
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, desc, image01 } = product;
  const relatedProduct = products.filter((item) => category === item.category);
  const dispatch = useDispatch();
  const addProduct = () =>
    dispatch(cartActions.addItem({ id, title, price, image01 }));

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.name && review.email && review.reviewMsg) {
      setReview({ name: "", email: "", reviewMsg: "" });
    }
  };

  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title="product-details">
      <CommonSection title={title} />
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2" className="mb-3">
              <div className="product_image">
                <div
                  className="img_item mb-3"
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={product.image01} alt="img-item" className="w-50" />
                </div>
                <div
                  className="img_item mb-3"
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img src={product.image02} alt="img-item" className="w-50" />
                </div>{" "}
                <div
                  className="img_item"
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img src={product.image03} alt="img-item" className="w-50" />
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="product_main_img mb-3">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="single_product_content">
                <h2 className="product_title mb-3">{title}</h2>
                <p className="product-price">
                  price: <span>${price}</span>
                </p>
                <p className="product_category mb-4">
                  Category: <span>{category}</span>
                </p>
                <button className="addToCart_btn" onClick={addProduct}>
                  Add to Cart
                </button>
              </div>
            </Col>

            <Col lg="12" className="mt-3">
              <div className="tabs d-flex align-items-center gap-5 py-2">
                <h6
                  className={`${tab ? "tab_active" : ""}`}
                  onClick={() => setTab(true)}
                >
                  Description
                </h6>
                <h6
                  className={`${!tab ? "tab_active" : ""}`}
                  onClick={() => setTab(false)}
                >
                  Review
                </h6>
              </div>

              {tab ? (
                <div className="tab_content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab_form mb-3">
                  <div className="review pt-5">
                    <p className="user_name mb-0">Jhon Doe</p>
                    <p className="user_email">jhon1@gmail.com</p>
                    <p className="user_review">Great Product</p>
                  </div>
                  <div className="review">
                    <p className="user_name mb-0">Jhon Doe</p>
                    <p className="user_email">jhon1@gmail.com</p>
                    <p className="user_review">Great Product</p>
                  </div>
                  <div className="review">
                    <p className="user_name mb-0">Jhon Doe</p>
                    <p className="user_email">jhon1@gmail.com</p>
                    <p className="user_review">Great Product</p>
                  </div>

                  <form className="form" onSubmit={handleSubmit}>
                    <div className="form_group">
                      <input
                        type="text"
                        name="name"
                        value={review.name}
                        placeholder="Enter your name"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form_group">
                      <input
                        type="text"
                        name="email"
                        value={review.email}
                        placeholder="Enter your email"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form_group">
                      <textarea
                        onChange={handleChange}
                        required
                        rows={5}
                        type="text"
                        name="reviewMsg"
                        value={review.reviewMsg}
                        placeholder="Enter your message"
                      />
                    </div>
                    <button
                      type="submi
                      name = {review.name}
                      value = {review.name}t"
                      className="addToCart_btn"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>

            <Col lg="12" className="mb-5 mt-4">
              <h4 className="related_product_title">You might also like</h4>
            </Col>
            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="12" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
