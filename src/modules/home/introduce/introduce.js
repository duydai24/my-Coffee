import React from "react";
import Link from "next/link";

function Introduce() {
  return (
    <div className="container py-24 text-center w-[40%]">
      <p className="font-normal text-3xl opacity-70">
        Even the all-powerful Pointing has no control about the blind texts.
      </p>
      <p className="opacity-70 py-10">
        It is a paradisematic country, in which roasted parts of sentences fly
        into your mouth. Even the all-powerful Pointing has no control about the
        blind texts it is an almost unorthographic life One day however a small
        line of blind text by the name of Lorem Ipsum decided to leave for the
        far World of Grammar.
      </p>
      <Link href="/About">
        <button className="text-[#a25f4b] text-sm hover:border-b-[#a25f4b] btnIntroduce">
          Read the full Story
        </button>
      </Link>
    </div>
  );
}
export default Introduce;
