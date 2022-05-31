import React from "react";
import Title from "../../../lib/title";
import Fade from "react-reveal/Fade";

function Featured() {
  return (
    <div className="container lg:px-0 px-5 mx-0">
      <Fade bottom>
        <Title text={"FEATURED MUGS"} />
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center justify-center gap-4">
          <FeaturedItem
            image={"/products1.jpg"}
            name={"Pink Premium Ceramic"}
            price={"99.00"}
          />
          <FeaturedItem
            image={"/products2.jpg"}
            name={"Golden Designers Mug"}
            price={"50.00"}
          />
        </div>
      </Fade>
    </div>
  );
}

function FeaturedItem({ image, name, price }) {
  return (
    <div className="w-full">
      <div className="relative w-full imgProduct">
        <img
          className="lg:h-[540px] md:h-[450px] h-auto w-full"
          src={image}
          width={460}
          height={540}
        />
        <button className="bg-white uppercase text-blacks text-xs absolute transition-all left-1/2 -translate-x-1/2 bottom-3 w-11/12 py-4 opacity-0 duration-200 invisible btnProducts">
          Explore MUGS
        </button>
      </div>
      <div className="text-center py-10 lg:pt-10">
        <p className="text-blacks text-lg">{name}</p>
        <p className="text-blacks opacity-60">$ {price} USD</p>
      </div>
    </div>
  );
}
export default Featured;
