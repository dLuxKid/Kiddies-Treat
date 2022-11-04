import React from "react";
import "./commonSection.css";
import { Container, Row, Col } from "reactstrap";

const CommonSection = (props) => {
  return (
    <section className="common_section">
      <Container>
        <h2>{props.title}</h2>
      </Container>
    </section>
  );
};

export default CommonSection;
