import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/commonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={handleSubmit}>
                <div className="form_group">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    ref={nameRef}
                  />
                </div>
                <div className="form_group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={emailRef}
                  />
                </div>
                <div className="form_group">
                  <input
                    type="text"
                    placeholder="Password"
                    required
                    ref={nameRef}
                  />
                </div>
                <div className="form_group">
                  <input
                    type="text"
                    placeholder="Confirm password"
                    ref={passwordRef}
                    required
                  />
                </div>
                <button type="submit" className="addToCart_btn">
                  Sign up
                </button>
              </form>
              <Link to="/signup">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;
