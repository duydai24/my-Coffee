import React from "react";
import Fade from "react-reveal/Fade";
import Link from "next/link";

function Banner() {
  return (
    <div className="bg-[#050827] flex items-stretch flex-col min-h-[530px] max-w-[1440px] mx-auto justify-center">
      <div className="container bg-cover flex flex-col items-center text-center text-white py-40 bg-Banner">
        <Fade bottom>
          <p className=" text-xs font-bold tracking-widest opacity-80">
            BEST PLACE TO BUY DESIGN
          </p>
          <p className="text-5xl my-8">Coffee Mugs</p>
          <p className="opacity-80 px-5 lg:px-0">
            The most versatile furniture system ever created. Designed to fit
            your life, made to move and grow.
          </p>
          <Link href="/OurProducts" passHref>
            <button className="bg-white px-8 py-4 uppercase text-black text-xs mt-8">
              Explore Our Products
            </button>
          </Link>
        </Fade>
      </div>
    </div>
  );
}
export default Banner;
