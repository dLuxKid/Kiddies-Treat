import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/commonSection";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/data/products";
import ProductCard from "../components/UI/product-card/productCard";
import "./allfoods.css";
import ReactPaginate from "react-paginate";

const AllFoods = () => {
  const [searchTerm, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const searchedData = products.filter(
    (item) => {
      if (searchTerm.value === "") return item;
      if (item.title.toLowerCase().includes(searchTerm.toLowerCase()))
        return item;
    },
    [products]
  );

  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedData.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedData.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="AllFoods">
      <CommonSection title="All Foods" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search_widget d-flex align-items-center justify-content-between">
                <input
                  type="text"
                  placeholder="i am looking for....."
                  value={searchTerm}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" className="mb-5">
              <div className="sorting_widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>
            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4">
                <ProductCard key={item.id} item={item} />
              </Col>
            ))}
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel="Prev"
                nextLabel="Next"
                containerClassName="paginationBtns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
