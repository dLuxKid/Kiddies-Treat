import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer_logo text-start">
              <h5>Kiddies Treat</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                iste quidem nobis.
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer_title">Delivery Time</h5>
            <ListGroup className="delivery_time-list">
              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer_title">Contact</h5>
            <ListGroup className="delivery_time-list">
              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Location: Ibadan, Oyo State, Nigeria.</span>
              </ListGroupItem>
              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Phone/Whatsapp: 09052513271</span>
              </ListGroupItem>
              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Email: adetunjimarvellous09@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer_title">Newsletter</h5>
            <p className="footer-p">Subscribe to our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Your Email" />
              <span>
                <i class="ri-send-plane-fill"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright-p">
              {new Date().getFullYear()} &copy;, Made by Marvellous. All Rights
              Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="d-flex row aligns-items-center gap-4 justify-content-start">
              <p className=" footer-p m-0 text-center">Connect with us on: </p>
              <div className="d-flex aligns-items-center gap-4 justify-content-center">
                {" "}
                <span>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/dLuxKid"
                  >
                    <i class="ri-github-line"></i>
                  </a>
                </span>
                <span>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/JustMarvellous_"
                  >
                    <i class="ri-twitter-line"></i>
                  </a>
                </span>
                <span>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://web.facebook.com/marvelous.adetunji.7"
                  >
                    <i class="ri-facebook-line"></i>
                  </a>
                </span>
                <span>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/channel/UC24kxbdh3lyX-Y6BULELF8w"
                  >
                    <i class="ri-youtube-line"></i>
                  </a>
                </span>
                <span>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/marvellous-adetunji-264308236/"
                  >
                    <i class="ri-linkedin-line"></i>
                  </a>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
