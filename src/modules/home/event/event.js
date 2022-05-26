import Link from "next/link";
import React from "react";
import Title from "../../../lib/title";

function Event() {
  return (
    <div className="container pb-24">
      <Title text={"BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE"} />
      <div className="flex">
        <div className="flex items-center justify-between w-1/2">
          <img
            className="w-3/5 h-full mr-5 "
            src="event1.jpg"
            height={280}
            width={280}
          />
          <div className="w-2/5">
            <img
              className="mb-5 w-full"
              src="event2.jpg"
              height={130}
              width={160}
            />
            <img className="w-full" src="event3.jpg" height={130} width={160} />
          </div>
        </div>
        <div className="flex flex-col items-start pl-16">
          <p className="text-xs text-blacks opacity-60 uppercase mt-8">
            PREMIUM OFFER
          </p>
          <p className="text-4xl text-blacks my-5">Get our Coffee Magazine</p>
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
    </div>
  );
}
export default Event;
