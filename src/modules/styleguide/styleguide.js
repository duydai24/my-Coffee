import React from "react";
import { Helmet } from "react-helmet";

function Styleguide() {
  return (
    <div>
      <Helmet>
        <title>My Coffee - Styleguide</title>
      </Helmet>
      <div className="bg-[#050827] flex items-stretch flex-col min-h-[450px] max-w-[1440px] mx-auto justify-center mb-24">
        <div className="container bg-cover flex flex-col items-center text-center text-white py-40 bg-Banner">
          <p className="text-5xl my-8">Styleguide</p>
          <p className="opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Styleguide;
