import Link from "next/link";
import React from "react";
import Title from "../../../lib/title";
import Fade from "react-reveal/Fade";

function Stories() {
  return (
    <Fade bottom>
      <div className="container py-24 lg:px-5 px-3">
        <Title text={"BEHIND THE MUGS, LIFESTYLE STORIES"} />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <Story
            image={"/story1.jpg"}
            title={
              "Health Check: why do I get a headache when I haven’t had my coffee?"
            }
            text={
              "It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
            }
            date={"OCTOBER 9, 2018"}
          />
          <Story
            image={"/story2.jpg"}
            title={"How long does a cup of coffee keep you awake?"}
            text={
              "It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem."
            }
            date={"OCTOBER 9, 2018"}
          />
          <Story
            image={"/story3.jpg"}
            title={
              "Recent research suggests that heavy coffee drinkers may reap health benefits."
            }
            text={
              "It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
            }
            date={"OCTOBER 8, 2018"}
          />
          <div className="lg:hidden hidden md:block">
            <Story
              image={"/story1.jpg"}
              title={
                "Health Check: why do I get a headache when I haven’t had my coffee?"
              }
              text={
                "It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
              }
              date={"OCTOBER 9, 2018"}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}

function Story({ image, text, title, date }) {
  return (
    <div className="py-10">
      <div className="relative w-full imgProduct">
        <img
          className="h-[300px]"
          src={image}
          width={460}
          height={460}
          alt="img"
        />
        <Link href="/About" passHref>
          <button className="bg-white uppercase text-blacks text-xs absolute left-1/2 -translate-x-1/2 bottom-2 invisible w-11/12 py-3 transition-all duration-200 opacity-0 btnProducts">
            read the full story
          </button>
        </Link>
      </div>
      <div className="pt-10">
        <p className="text-blacks text-lg">{title}</p>
        <p className="text-blacks opacity-60 text-sm py-5">{text}</p>
        <p className="text-blacks opacity-60 text-sm uppercase">{date}</p>
      </div>
    </div>
  );
}
export default Stories;
