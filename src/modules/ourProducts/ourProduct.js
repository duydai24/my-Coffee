import React, { useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import { createSelector } from "reselect";
import { connect } from "react-redux";
import { productSelector } from "../../redux/selector/productsSelector";
import { categorySelector } from "../../redux/selector/categorySelector";

const componentSelector = () =>
  createSelector(
    [productSelector, categorySelector],
    ({ product }, { categoryId }) => {
      return {
        product,
        categoryId,
      };
    }
  );

function OurProducts({ product, categoryId }) {
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
    arrows: false,
  };
  return (
    <div className="container pt-24 px-3 lg:px-0 overflow-hidden">
      <Fade bottom>
        <Helmet>
          <title>My Coffee - OurProducts</title>
        </Helmet>
        <div className="py-20">
          <p className="text-4xl text-blacks text-center pb-5">Our Products</p>
          <p className="text-[#1d1f2eb3] text-center opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center lg:w-[80%] w-full mx-auto mt-10">
            <span className="w-8 h-[2px] bg-[#ececed] hidden lg:block"></span>
            {categoryId?.map((value, key) => (
              <button
                key={key}
                onClick={() => handleCategory(value.id, key)}
                className={
                  value.id === active
                    ? "opacity-100 border-[#a25f4b66] bg-white border-0 py-3 px-8 md:px-8 w-full lg:w-auto md:w-auto text-[#a25f4b] text-sm mb-5 lg:mb-0 md:mb-0"
                    : "bg-white border-0 border-[#ececed] hover:border-[#a25f4b66] md:px-8 opacity-80 md:w-auto py-3 px-8 w-full lg:w-auto text-[#a25f4b] text-sm hover:opacity-100 mb-5 lg:mb-0 md:mb-0"
                }
              >
                {value.name}
              </button>
            ))}
            <span className="w-8 h-[2px] bg-[#ececed] hidden lg:block"></span>
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
      </Fade>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <Fade bottom>
          {product.map((value, key) => (
            <div key={key} className="lg:px-3 px-0 py-10">
              <div className="relative w-full imgProduct">
                <Link href={"/ProductDetails/" + value.id} passHref>
                  <img
                    className=""
                    src={value.image}
                    width={460}
                    height={460}
                    alt=""
                  />
                </Link>
                <Link href={"/ProductDetails/" + value.id} passHref>
                  <button className="bg-white uppercase text-blacks text-xs absolute left-1/2 -translate-x-1/2 bottom-2 invisible w-11/12 py-3 transition-all duration-200 opacity-0 btnProducts">
                    Explore MUGS
                  </button>
                </Link>
              </div>
              <div className="text-center pt-10">
                <Link href={"/ProductDetails/" + value.id} passHref>
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
    </div>
  );
}

function SliderItem({ image, title, lable, text, btn }) {
  return (
    <div className="flex lg:flex-row flex-col items-center">
      <div className="flex items-center justify-between lg:w-1/2 w-full">
        <img
          className="w-full h-1/2 lg:mr-5"
          src={image}
          height={680}
          width={680}
          alt=""
        />
      </div>
      <div className="flex flex-col lg:items-start lg:text-left text-center items-center lg:pl-16 lg:w-1/2 w-full">
        <p className="text-xs text-blacks mt-5 lg:mt-0 uppercase">{lable}</p>
        <p className="lg:text-4xl text-3xl text-black font-normal my-5">
          {title}
        </p>
        <p className="text-sm text-blacks opacity-60 mb-5">{text}</p>
        <button className="bg-blacks py-5 px-10 text-xs text-white uppercase hover:bg-[#2f3247] hover:opacity-95">
          {btn}
        </button>
      </div>
    </div>
  );
}
export default connect(componentSelector)(OurProducts);
