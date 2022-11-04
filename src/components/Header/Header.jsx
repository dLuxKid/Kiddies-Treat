// Header file for the web app

import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import { NavLink } from "react-router-dom";

import "./header.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";

// setting the routes in an array to be mapped in the navbar
const nav_links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  // using Ref  hook to toggle the navbar menu at small screens
  const menuRef = useRef(null);

  //this ref hook helps monitor the navbar
  const headerRef = useRef(null);
  // allocating the total quantity of cart items is the redux store to the variable
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  // function that toggles the class to show the navbar menu
  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  const dispatch = useDispatch();
  const toggleCart = () => dispatch(cartActions.toggleCart());

  // the useEffect to add scroll eventListener to modify navbar css when scrolling down
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add("header_shrink");
      } else {
        headerRef.current.classList.remove("header_shrink");
      }
    });
    return () => window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        {/* ..... LOGO .....  */}
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <h5>Kiddies Treat</h5>
          </div>

          {/* ..... MENU .....  */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {/* Mapping the nav contents to create navbar */}
              {nav_links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active_menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ..... NAV ICONS .....  */}
          <div className="nav_right d-flex align-items-center gap-4">
            <span className="cart_icon" onClick={toggleCart}>
              <i class="ri-shopping-basket-line"></i>
              <span className="cart_badge">{totalQuantity}</span>
            </span>
            <span className="user">
              <NavLink to="/login">
                <i class="ri-user-line"></i>
              </NavLink>
            </span>
            <span className="mobile_menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
