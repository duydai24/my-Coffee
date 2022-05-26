import React from "react";

function Footer() {
  return (
    <div className="container grid grid-cols-4 grid-rows-none py-24 gap-4">
      <img className="max-h-5" src="/logo.png" height={100} width={100} />
      <p className="uppercase max-h-5 opacity-60 text-[#1d1f2eb3] text-xs font-bold">
        Menu
      </p>
      <p className="uppercase max-h-5 opacity-60 text-[#1d1f2eb3] text-xs font-bold">
        FOLLOW US
      </p>
      <p className="uppercase max-h-5 opacity-60 text-[#1d1f2eb3] text-xs font-bold">
        CONTACT US
      </p>
      <div>
        <p className="opacity-60 text-[#1d1f2eb3] text-xs mb-20">
          Delivering the best coffee life since 1996. From coffee geeks to the
          real ones.
        </p>
        <p className="opacity-30 text-[#1d1f2eb3] text-xs hover:text-[#a25f4b] hover:opacity-90 cursor-pointer">
          CoffeeStyle Inc. © 1996
        </p>
      </div>
      <div>
        <p className="opacity-60 text-[#1d1f2eb3] text-xs hover:text-[#a25f4b] hover:opacity-90 cursor-pointer mb-3">
          Home
        </p>
        <p className="opacity-60 text-[#1d1f2eb3] text-xs hover:text-[#a25f4b] hover:opacity-90 cursor-pointer mb-3">
          Our Products
        </p>
        <p className="opacity-60 text-[#1d1f2eb3] text-xs hover:text-[#a25f4b] hover:opacity-90 cursor-pointer mb-3">
          About
        </p>
        <p className="opacity-60 text-[#1d1f2eb3] text-xs hover:text-[#a25f4b] hover:opacity-90 cursor-pointer mb-3">
          Contact
        </p>
        <p className="opacity-60 text-[#1d1f2eb3] text-xs hover:text-[#a25f4b] hover:opacity-90 cursor-pointer mb-3">
          Styleguide
        </p>
      </div>
      <div>
        <p className="opacity-60 text-[#1d1f2eb3] text-xs hover:text-[#a25f4b] hover:opacity-90 cursor-pointer mb-3">
          Facebook
        </p>
        <p className="opacity-60 text-[#1d1f2eb3] text-xs hover:text-[#a25f4b] hover:opacity-90 cursor-pointer mb-3">
          Instagram
        </p>
        <p className="opacity-60 text-[#1d1f2eb3] text-xs hover:text-[#a25f4b] hover:opacity-90 cursor-pointer mb-3">
          Pinterest
        </p>
        <p className="opacity-60 text-[#1d1f2eb3] text-xs hover:text-[#a25f4b] hover:opacity-90 cursor-pointer mb-3">
          Twitter
        </p>
      </div>
      <div>
        <p className="opacity-60 text-[#1d1f2eb3] text-xs mb-20">
          We’re Always Happy to Help
        </p>
        <p className="opacity-30 text-[#1d1f2eb3] text-xs hover:text-[#a25f4b] hover:opacity-90 cursor-pointer">
          Powered by Webflow
        </p>
      </div>
    </div>
  );
}
export default Footer;
