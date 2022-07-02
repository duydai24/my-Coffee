import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CgMenuRightAlt } from "react-icons/cg";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function HeaderMobile({ onClickOnCart }) {
  const { carts } = useSelector((state) => state);

  const [onMenu, setOnMenu] = useState(false);
  const _onMenu = onMenu === true ? "onMenu" : "";

  return (
    <div className="container h-auto relative top-0 left-0">
      <div className="bg-white flex fixed top-0 left-0 justify-between items-center w-screen p-6 z-20">
        <Link href="/" passHref>
          <img
            src="/logo.png"
            width={112}
            height={50}
            className="max-w-[200px] cursor-pointer"
            alt="ig"
          />
        </Link>
        <div className="flex">
          <div
            onClick={onClickOnCart}
            className="flex items-center max-w-[100px] cursor-pointer relative hoverCart "
          >
            <button className="opacity-60 hover:opacity-100 hoverCartItem">
              <HiOutlineShoppingBag fontSize={30} />
            </button>
            <span className="bg-[#1d1f2e] absolute -bottom-1 -right-1 opacity-60 text-center px-[5px] text-xs text-white cursor-pointer rounded-full hover:opacity-100 hoverCartItem">
              {carts.totalQuantity}
            </span>
          </div>
          <button onClick={() => setOnMenu(!onMenu)} className="ml-5">
            <CgMenuRightAlt fontSize={30} />
          </button>
        </div>
      </div>
      <div
        onClick={() => setOnMenu(!onMenu)}
        className={
          "fixed top-[78px] left-0 w-screen h-screen z-10 -translate-y-full offMenu " +
          _onMenu
        }
      >
        <div className="absolute top-0 left-0 w-screen bg-white -mt-1 py-2 z-20">
          <HeaderItem text={"home"} link={"/"} />
          <HeaderItem text={"OUR PRODUCTS"} link={"/OurProducts"} />
          <HeaderItem text={"blog"} link={"/Blog"} />
          <HeaderItem text={"about"} link={"/About"} />
          <HeaderItem text={"contact"} link={"/Contact"} />
          <HeaderItem text={"styleguide"} link={"/Styleguide"} />
        </div>
      </div>
    </div>
  );
}
function HeaderItem({ text, link }) {
  const router = useRouter();
  const style = {
    opacity: router.pathname === link ? 1 : 0.6,
    // opacity
  };
  return (
    <Link href={link} passHref>
      <p
        style={style}
        className="text-blacks tracking-[3px] uppercase text-center pb-5 font-bold text-xs cursor-pointer opacity-60 textHeader"
      >
        {text}
      </p>
    </Link>
  );
}
export default HeaderMobile;
