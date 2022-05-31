import React, { useState } from "react";
import Cart from "../cart/cart";
import Footer from "../home/footer/footer";
import Gift from "../home/gift/gift";
import Header from "../home/header/header";
import Fade from "react-reveal/Fade";
import HeaderMobile from "../home/headerMobile";

function Layout({ children }) {
  const [onCart, setOnCart] = useState(false);

  const _onCart = onCart == true ? "onCart" : "";

  return (
    <div className="relative">
      <div className="hidden lg:block">
        <Header
          onClickOnCart={() => setOnCart(!onCart)}
          classNameOnCart={_onCart}
        />
      </div>
      <div className="block lg:hidden">
        <HeaderMobile
          onClickOnCart={() => setOnCart(!onCart)}
          classNameOnCart={_onCart}
        />
      </div>
      <Cart
        onClickOnCart={() => setOnCart(!onCart)}
        classNameOnCart={_onCart}
      />
      <main>{children}</main>
      <Fade bottom>
        <Gift />
        <Footer />
      </Fade>
    </div>
  );
}
export default Layout;
