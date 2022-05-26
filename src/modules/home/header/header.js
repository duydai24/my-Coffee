import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function Header({ onClickOnCart }) {
  const { carts } = useSelector((state) => state);
  return (
    <div className="container flex justify-between items-center py-8">
      <Link href="/">
        <img
          src="/logo.png"
          width={112}
          height={50}
          className="max-w-[200px] cursor-pointer"
        />
      </Link>
      <div className="flex justify-end">
        <HeaderItem text={"home"} link={"/"} />
        <HeaderItem text={"OUR PRODUCTS"} link={"/OurProducts"} />
        <HeaderItem text={"blog"} link={"/Blog"} />
        <HeaderItem text={"about"} link={"/About"} />
        <HeaderItem text={"contact"} link={"/Contact"} />
        <HeaderItem text={"styleguide"} link={"/Styleguide"} />
      </div>
      <div
        onClick={onClickOnCart}
        className="flex items-center max-w-[100px] cursor-pointer hoverCart "
      >
        <button className="opacity-60 hover:opacity-100 hoverCartItem">
          <HiOutlineShoppingBag />
        </button>
        <button className="text-blacks uppercase tracking-[3px] text-center font-bold text-xs mx-2 opacity-60 hover:opacity-100 hoverCartItem">
          Cart
        </button>
        <span className="bg-[#1d1f2e] opacity-60 text-center px-[5px] text-xs text-white cursor-pointer rounded-full hover:opacity-100 hoverCartItem">
          {carts.totalQuantity}
        </span>
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
    <Link href={link}>
      <p
        style={style}
        className="text-blacks tracking-[3px] uppercase text-center font-bold text-xs ml-10 cursor-pointer relative opacity-60 textHeader"
      >
        {text}
        <span className="w-full h-[2px] absolute left-0 -bottom-2 bg-[#a25f4b] transition-all invisible lineHeader"></span>
      </p>
    </Link>
  );
}
export default Header;
