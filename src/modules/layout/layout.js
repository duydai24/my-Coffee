import React, { useState } from "react";
import Cart from "../cart/cart";
import Footer from "../home/footer/footer";
import Gift from "../home/gift/gift";
import Header from "../home/header/header";

function Layout({ children }) {
  const [onCart, setOnCart] = useState(false);

  const _onCart = onCart == true ? "onCart" : "";
  return (
    <div className="relative">
      <Header
        onClickOnCart={() => setOnCart(!onCart)}
        classNameOnCart={_onCart}
      />
      <Cart
        onClickOnCart={() => setOnCart(!onCart)}
        classNameOnCart={_onCart}
      />
      <main>{children}</main>
      <Gift />
      <Footer />
    </div>
  );
}
export default Layout;
