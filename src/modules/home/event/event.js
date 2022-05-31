import Link from "next/link";
import React from "react";
import Title from "../../../lib/title";
import Fade from "react-reveal/Fade";

function Event() {
  return (
    <div className="container pb-24 px-5">
      <Fade bottom>
        <Title text={"BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE"} />
        <div className="flex lg:flex-row flex-col">
          <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between lg:w-1/2 md:w-2/3 w-full mx-auto">
            <img
              className="lg:w-3/5 md:w-3/5 w-full h-full lg:mr-5 md:mr-10"
              src="event1.jpg"
              height={280}
              width={280}
            />
            <div className="lg:w-2/5 md:w-2/5 w-full flex lg:block md:block">
              <img
                className="lg:mb-5 md:mb-8 w-1/2 lg:w-full md:w-full"
                src="event2.jpg"
                height={130}
                width={160}
              />
              <img
                className="w-1/2 lg:w-full md:w-full"
                src="event3.jpg"
                height={130}
                width={160}
              />
            </div>
          </div>
          <div className="flex flex-col lg:items-start items-center lg:pl-16">
            <p className="text-xs text-blacks opacity-60 uppercase mt-8">
              PREMIUM OFFER
            </p>
            <p className="lg:text-4xl text-3xl text-blacks my-5">
              Get our Coffee Magazine
            </p>
            <p className="text-sm text-blacks opacity-60 mb-5">
              The most versatile furniture system ever created. Designed to fit
              your life.
            </p>
            <Link href="/OurProducts">
              <button className="bg-blacks py-4 px-8 text-xs text-white uppercase">
                start shopping
              </button>
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
}
export default Event;
