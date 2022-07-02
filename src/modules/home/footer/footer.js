import React from "react";
import Fade from "react-reveal/Fade";

function Footer() {
  return (
    <Fade bottom>
      <div className="lg:block hidden">
        <div className="container grid lg:grid-cols-4 grid-cols-1 grid-rows-none py-24 lg:gap-4 justify-center">
          <img
            className="max-h-5"
            src="/logo.png"
            height={100}
            width={100}
            alt="img"
          />
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
              Delivering the best coffee life since 1996. From coffee geeks to
              the real ones.
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
      </div>
      <div className="lg:hidden block">
        <div className="flex flex-col items-center justify-center py-24">
          <div className="pb-10">
            <img
              className="max-h-5 mx-auto"
              src="/logo.png"
              height={100}
              width={100}
              alt="img"
            />
            <div className="text-center pt-5">
              <p className="opacity-60 text-[#1d1f2eb3] text-xs mb-5">
                Delivering the best coffee life since 1996. From coffee geeks to
                the real ones.
              </p>
              <p className="opacity-60 text-[#1d1f2eb3] text-xs hover:text-[#a25f4b] hover:opacity-90 cursor-pointer">
                CoffeeStyle Inc. © 1996
              </p>
            </div>
          </div>
          <div className="pb-10 text-center">
            <p className="uppercase max-h-5 opacity-60 text-[#1d1f2eb3] text-xs font-bold pb-8">
              Menu
            </p>
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
          </div>
          <div className="pb-10 text-center">
            <p className="uppercase max-h-5 opacity-60 text-[#1d1f2eb3] text-xs font-bold pb-8">
              FOLLOW US
            </p>
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
          </div>
          <div className="text-center">
            <p className="opacity-60 text-[#1d1f2eb3] text-xs hover:text-[#a25f4b] hover:opacity-90 cursor-pointer mb-3">
              Contact
            </p>
            <p className="opacity-60 text-[#1d1f2eb3] text-xs mb-20">
              We’re Always Happy to Help
            </p>
            <p className="opacity-30 text-[#1d1f2eb3] text-xs hover:text-[#a25f4b] hover:opacity-90 cursor-pointer">
              Powered by Webflow
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
export default Footer;
