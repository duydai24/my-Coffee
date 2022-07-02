import React from "react";
import Banner from "./banner/banner";
import Backgroud from "./backgroud/backgroud";
import Event from "./event/event";
import Featured from "./featured/featured";
import Introduce from "./introduce/introduce";
import Products from "./products/products";
import Stories from "./stories/stories";

function Home() {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Introduce />
      <Featured />
      <Products />
      <Event />
      <Backgroud />
      <Stories />
    </div>
  );
}
export default Home;
