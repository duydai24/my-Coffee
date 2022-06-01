import React from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";

function Introduce() {
  return (
    <div className="container py-24 flex flex-col lg:flex-row justify-center items-center">
      <Fade left>
        <div className="lg:w-1/2 md:w-2/3 w-full h-full lg:mr-5">
          <video autoPlay loop muted className="h-full">
            <source src="./videoIntroduce.mp4" type="video/mp4" />
          </video>
        </div>
      </Fade>
      <Fade right>
        <div className="lg:w-1/2 w-full px-5 text-center">
          <p className="font-normal text-[26px] opacity-70">
            What is your most special coffee?
          </p>
          <p className="opacity-70 py-5">
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth. Even the all-powerful Pointing has no control
            about the blind texts it is an almost unorthographic life One day
            however a small line of blind text by the name of Lorem Ipsum
            decided to leave for the far World of Grammar.
          </p>
          <Link href="/About">
            <button className="text-[#a25f4b] text-sm hover:border-b-[#a25f4b] btnIntroduce">
              Read the full Story
            </button>
          </Link>
        </div>
      </Fade>
    </div>
  );
}
export default Introduce;
