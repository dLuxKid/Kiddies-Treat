import React from "react";
import Slider from "react-slick";
import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";
import "./testimonialSlider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slideToShow: 1,
    slideToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review_text">
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque sunt
          architecto, at ut aut odit dolore tempora sit pariatur sint minus
          dolorum consequuntur magnam eveniet officiis explicabo tenetur maxime
          ipsam!"
        </p>
        <div className="review_img d-flex align-items-center gap-3">
          <img src={ava01} alt="Person-1" className="w-25 rounded" />
          <h6>John Doe</h6>
        </div>
      </div>
      <div>
        <p className="review_text">
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque sunt
          architecto, at ut aut odit dolore tempora sit pariatur sint minus
          dolorum consequuntur magnam eveniet officiis explicabo tenetur maxime
          ipsam!"
        </p>
        <div className="review_img d-flex align-items-center gap-3">
          <img src={ava02} alt="Person-2" className="w-25 rounded" />
          <h6>Mitcheal Marsh</h6>
        </div>
      </div>{" "}
      <div>
        <p className="review_text">
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque sunt
          architecto, at ut aut odit dolore tempora sit pariatur sint minus
          dolorum consequuntur magnam eveniet officiis explicabo tenetur maxime
          ipsam!"
        </p>
        <div className="review_img d-flex align-items-center gap-3">
          <img src={ava03} alt="Person-3" className="w-25 rounded" />
          <h6>Stephen King</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
