import React from "react";
import { Container, Col, Row } from "reactstrap";
import "./category.css";
import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";

const categoryData = [
  {
    display: "Fast Food",
    imgURL: categoryImg01,
  },
  {
    display: "Pizza",
    imgURL: categoryImg02,
  },
  {
    display: "Asian Food",
    imgURL: categoryImg03,
  },
  {
    display: "Row Meat",
    imgURL: categoryImg04,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" key={index} className="mb-4">
            <div className="category_item d-flex align-items-center gap-3">
              <div className="category_img">
                <img src={item.imgURL} alt="categoryItem" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
