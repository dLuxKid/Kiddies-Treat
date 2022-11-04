// This is the layout of the web app

import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routes/Routers";
import Carts from "../UI/cart/Carts";
import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cart.showCart);
  return (
    <div style={{ background: "#f9f969" }}>
      <Header />
      {showCart ? <Carts /> : null}
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
