import React, { useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import Link from "next/link";
import { Helmet } from "react-helmet";
import Products from "../home/products/products";
import Fade from "react-reveal/Fade";

function OurProducts() {
  let { product } = useSelector((state) => state.products);
  const { categoryId } = useSelector((state) => state.category);

  const [active, setActive] = useState(0);
  const [filterId, setFilterId] = useState(0);
  const handleCategory = (id) => {
    setActive(id);
    setFilterId(id);
  };
  if (filterId != 0) {
    product = product.filter((e) => e.categoryId === filterId);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <Fade bottom>
        <Helmet>
          <title>My Coffee - OurProducts</title>
        </Helmet>
        <div className="py-20">
          <p className="text-4xl text-blacks text-center pb-5">Our Products</p>
          <p className="text-[#1d1f2eb3] text-center opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex justify-between items-center w-[80%] mx-auto mt-10">
            <span className="w-8 h-[2px] bg-[#ececed]"></span>
            {categoryId.map((value, key) => (
              <button
                key={key}
                onClick={() => handleCategory(value.id, key)}
                className={
                  value.id === active
                    ? "opacity-100 border-[#a25f4b66] bg-white border-0 py-3 px-8 text-[#a25f4b] text-sm"
                    : "bg-white border-0 border-[#ececed] hover:border-[#a25f4b66] opacity-80 py-3 px-8 text-[#a25f4b] text-sm hover:opacity-100"
                }
              >
                {value.name}
              </button>
            ))}
            <span className="w-8 h-[2px] bg-[#ececed]"></span>
          </div>
        </div>
        <div className="pb-20">
          <Slider {...settings}>
            <SliderItem
              image={"/story2.jpg"}
              lable={"NEW ARTICLE IS LIVE"}
              title={
                "Health Check: why do I get a headache when I haven’t had my coffee?"
              }
              text={
                "It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
              }
              btn={"READ THE FULL STORY"}
            />
            <SliderItem
              image={"/story3.jpg"}
              lable={"NEW STORE OPENED"}
              title={"We're in London"}
              text={
                "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life."
              }
              btn={"EXPLORE OUR OFFICES"}
            />
          </Slider>
        </div>
        <div className="grid grid-cols-3">
          <Fade bottom>
            {product.map((value, key) => (
              <div key={key} className="px-3 py-10">
                <div className="relative w-full imgProduct">
                  <Link href={"/ProductDetails/" + value.id}>
                    <img
                      className=""
                      src={value.image}
                      width={460}
                      height={460}
                    />
                  </Link>
                  <Link href={"/ProductDetails/" + value.id}>
                    <button className="bg-white uppercase text-blacks text-xs absolute left-1/2 -translate-x-1/2 bottom-2 invisible w-11/12 py-3 transition-all duration-200 opacity-0 btnProducts">
                      Explore MUGS
                    </button>
                  </Link>
                </div>
                <div className="text-center pt-10">
                  <Link href={"/ProductDetails/" + value.id}>
                    <p className="text-blacks text-lg">{value.name}</p>
                  </Link>
                  <p className="text-blacks opacity-60 text-sm">
                    $ {value.price} USD
                  </p>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </Fade>
    </div>
  );
}

function SliderItem({ image, title, lable, text, btn }) {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-between w-1/2">
        <img
          className="w-full h-[380px] mr-5 "
          src={image}
          height={680}
          width={680}
        />
      </div>
      <div className="flex flex-col items-start pl-16 w-1/2">
        <p className="text-xs text-blacks opacity-60 uppercase">{lable}</p>
        <p className="text-4xl text-blacks my-5">{title}</p>
        <p className="text-sm text-blacks opacity-60 mb-5">{text}</p>
        <button className="bg-blacks py-4 px-8 text-xs  text-white uppercase hover:bg-[#2f3247] hover:opacity-95">
          {btn}
        </button>
      </div>
    </div>
  );
}
export default OurProducts;
