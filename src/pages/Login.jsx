import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/commonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const nameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={handleSubmit}>
                <div className="form_group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={nameRef}
                  />
                </div>
                <div className="form_group">
                  <input
                    type="password"
                    placeholder="Password"
                    ref={passwordRef}
                    required
                  />
                </div>
                <button type="submit" className="addToCart_btn">
                  Login
                </button>
              </form>
              <Link to="/signup">Don't have an account? Create an account</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
