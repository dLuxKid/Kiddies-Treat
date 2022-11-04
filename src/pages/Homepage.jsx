// Homepage for the web app

import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import bodyImg from "../assets/images/hero.png";
import { Link } from "react-router-dom";
import Category from "../components/UI/categoty/category";
import "./Homepage.css";
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";
import products from "../assets/data/products";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import ProductCard from "../components/UI/product-card/productCard";
import whyImg from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reiciendis voluptatem debitis, tempora voluptatum hic",
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reiciendis voluptatem debitis, tempora voluptatum hic",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reiciendis voluptatem debitis, tempora voluptatum hic",
  },
];

const Homepage = () => {
  // the state hook currently storing the category choosen
  const [category, setCategory] = useState("ALL");
  // the state hooks sets the category to be rendered as the category state changes
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicedPizza = filteredPizza.slice(0, 4);
    setHotPizza(slicedPizza);
  }, []);

  useEffect(() => {
    // in this useEffect hook, the list of items rendered in the Popular foods section are filtered such that when any of the buttons are clicked,  the food displayed are from each respective catergory. i.e All Foods category, Burger category, Pizza category, and Bread Categpry. The component rerenders when there is a change in state i.e any of the buttons are clicked.
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filteredproducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filteredproducts);
    }
    if (category === "PIZZA") {
      const filteredproducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filteredproducts);
    }
    if (category === "BREAD") {
      const filteredproducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filteredproducts);
    }
  }, [category]);

  return (
    <Helmet title="home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="body_section">
                <h5 className="mb-3">
                  Making an Order is as easy as you like.
                </h5>
                <h1 className="mb-4 body_title">
                  <span>HUNGRY?</span> Just wait <br />
                  at <span>your doorsteps</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ratione nulla quo sapiente quaerat recusandae dolorum quasi
                  dolorem neque impedit eveniet aut ab ipsam qui, eum modi
                  distinctio enim. Accusantium, blanditiis?
                </p>
                <div className="body_btn d-flex align-items-center gap-5 mt-4">
                  <button className="order_btn d-flex align-items-center justify-content-between">
                    Order now
                    <i class="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="allfoods_btn">
                    <Link to="/foods"> See all Foods</Link>
                  </button>
                </div>
                <div className="body_service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shopping_icon">
                      <i class="ri-car-line"></i>
                    </span>
                    Free shipping
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shopping_icon">
                      <i class="ri-shield-check-line"></i>
                    </span>
                    Security at 100%
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="body_img">
                <img src={bodyImg} alt="body_image" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature_subtitle mb-4">What we Serve</h5>
              <h2 className="feature_title">Just sit back and relax</h2>
              <h2 className="feature_title">
                We will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                maiores iusto error laborum maxime ipsam, fugiat culpa
              </p>
              <p className="feature_text">
                dignissimos facilis alias doloremque est sunt repellendus? Ipsum
                saepe nesciunt voluptates possimus corporis!
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature_item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food_category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all_btn ${
                    category === "ALL" ? "foodBtnActive" : null
                  }`}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-item-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : null
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="Burger" />
                  Burger
                </button>
                <button
                  className={`d-flex align-item-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : null
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="Pizza" />
                  Pizza
                </button>
                <button
                  className={`d-flex align-item-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : null
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="Bread" />
                  Bread
                </button>
              </div>
            </Col>

            {/* mapping through all the products (filtered/Unfiltered) and displaying the properties using the productCard Component  */}
            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why_choose_us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-kiddies-treat-img" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why_kiddies_treat">
                <h2 className="mb-4">
                  Why <span>Kiddies Treat?</span>
                </h2>
                <p className="why_kiddies_treat_desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam nobis quis fugiat possimus quam ab blanditiis cumque
                  fuga dolor ut eveniet distinctio dolorum facere, obcaecati
                  dolore corrupti consectetur iure sint.
                </p>
                <ListGroup className="mt-4">
                  <ListGroupItem className=" border-0">
                    <p className="choose_us_title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i> Fresh and Tasty
                      Treats
                    </p>
                    <p className="choose_us_desc">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, rerum autem sit beatae facere fugiat dicta inventore
                      velit a soluta.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0">
                    <p className="choose_us_title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i>Quality Support
                    </p>
                    <p className="choose_us_desc">
                      Lorem, ipsum dolor sit ame consectetur adipisicing elit.
                      Ad, rerum autem sit beatae facere fugiat dicta inventore
                      velit a soluta.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className=" border-0">
                    <p className="choose_us_title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i> Order from
                      Anywhere
                    </p>
                    <p className="choose_us_desc">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, rerum autem sit beatae facere fugiat dicta inventore
                      velit a soluta.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg="3" md="4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="testimonial">
                <h5 className="text-center mb-4">Testimonials</h5>
                <h2 className="mb-4">
                  What our <span>Customers</span> think of us
                </h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Beatae dolor rerum velit, recusandae labore voluptates alias
                  laboriosam iure. Perspiciatis iure quibusdam porro nostrum aut
                  laboriosam est dolores, ipsa excepturi qui.
                </p>
                <TestimonialSlider />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Homepage;
