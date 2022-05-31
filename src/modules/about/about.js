import React from "react";
import Title from "../../lib/title";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <div className="lg:px-0 px-5">
      <Helmet>
        <title>My Coffee - About</title>
      </Helmet>
      <div className="bg-[#f6f6f6] flex items-stretch flex-col min-h-[530px] max-w-[1440px] mx-auto justify-center">
        <div className="relative">
          <div className="container bg-cover flex flex-col items-center text-center text-white relative">
            <p className="text-4xl text-blacks mb-8">About</p>
            <p className="opacity-80 text-blacks max-w-xl leading-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
          <div className="container absolute top-[250px] left-1/2 -translate-x-1/2 w-full h-[320px] bg-[url('/bg-about.jpg')] bg-cover bg-center" />
        </div>
      </div>
      <div className="container pt-44">
        <div className="py-24 text-center max-w-xl mx-auto">
          <Title text={"INTRODUCTIONS"} />
          <p className="text-2xl font-normal leading-10 mb-4">
            Overlaid the jeepers uselessly much excluding everyday life.
          </p>
          <p className="text-[#1d1f2eb3] leading-7">
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth. Even the all-powerful Pointing has no control
            about the blind texts it is an almost unorthographic life One day
            however a small line of blind text by the name of Lorem Ipsum
            decided to leave for the far World of Grammar.
          </p>
        </div>
        <Fade left>
          <IntroductionItem image={"/about1.jpg"} />
        </Fade>
        <Fade right>
          <IntroductionItem2 image={"/about2.jpg"} />
        </Fade>
        <div className="">
          <Fade bottom>
            <Title text={"INTRODUCTIONS"} />
            <div className="lg:grid grid lg:grid-cols-3 grid-cols-1 gap-2 md:flex md:flex-row md:justify-center md:flex-wrap">
              <AuthorsItem
                image={"/author1.jpg"}
                name={"Fred Gleason"}
                text={"BRAND OWNER"}
              />
              <AuthorsItem
                image={"/author2.jpg"}
                name={"Isabel Hamill"}
                text={"MUG DESIGNER"}
              />
              <AuthorsItem
                image={"/author3.jpg"}
                name={"Maurice Herman"}
                text={"MUG DESIGNER"}
              />
            </div>
          </Fade>
        </div>
      </div>
      <div className="bg-[url('/bg-about2.jpg')] bg-fixed bg-cover bg-center w-full h-[340px]" />
      <div className="container py-24">
        <Title text={"HISTORY TIMELINE"} />
        <HistoryItem
          date={"OCTOBER 2018"}
          title={"One day however a small line"}
          text={
            "It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum."
          }
        />
        <HistoryItem
          date={"AUGUST 2018"}
          title={"Overlaid the jeepers uselessly"}
          text={
            "It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum."
          }
        />
        <HistoryItem
          date={"JUNE 2018"}
          title={"Pointing has no control about"}
          text={
            "It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum."
          }
        />
        <HistoryItem
          date={"NOVEMBER 2017"}
          title={"We've started CoffeeStyle."}
        />
      </div>
    </div>
  );
}

function IntroductionItem({ image }) {
  return (
    <div className="flex lg:flex-row flex-col items-center mb-24">
      <img
        className="w-full md:max-h-[380px]"
        src={image}
        width={460}
        height={380}
      />
      <div className="lg:w-1/2 w-full lg:ml-10 text-center lg:text-left">
        <p className="text-2xl font-normal leading-10 my-4 opacity-80">
          Overlaid the jeepers uselessly much excluding everyday life.
        </p>
        <div className="w-8 h-[2px] bg-[#ececed] my-5" />
        <p className="text-[#1d1f2eb3] leading-7">
          It is a paradisematic country, in which roasted parts of sentences fly
          into your mouth. Even the all-powerful Pointing has no control about
          the blind texts it is an almost unorthographic life One day however a
          small line of blind text by the name of Lorem Ipsum decided to leave
          for the far World of Grammar.
        </p>
      </div>
    </div>
  );
}
function IntroductionItem2({ image }) {
  return (
    <div className="flex lg:flex-row flex-col items-center mb-24">
      <div className="lg:w-1/2 w-full lg:mr-10 text-center lg:text-left">
        <p className="text-2xl font-normal leading-10 my-4 opacity-80">
          Overlaid the jeepers uselessly much excluding everyday life.
        </p>
        <div className="w-8 h-[2px] bg-[#ececed] my-5" />
        <p className="text-[#1d1f2eb3] leading-7">
          It is a paradisematic country, in which roasted parts of sentences fly
          into your mouth. Even the all-powerful Pointing has no control about
          the blind texts it is an almost unorthographic life One day however a
          small line of blind text by the name of Lorem Ipsum decided to leave
          for the far World of Grammar.
        </p>
      </div>
      <img
        className="w-full md:max-h-[380px] md:mt-10"
        src={image}
        width={460}
        height={380}
      />
    </div>
  );
}
function AuthorsItem({ image, name, text }) {
  return (
    <div className="lg:pb-24 md:w-2/5 lg:w-auto w-auto pb-5 md:px-[2%]">
      <img className="w-full" src={image} width={300} height={380} />
      <p className="text-xl font-normal leading-10 my-2 opacity-80 text-center">
        {name}
      </p>
      <div className="text-xs font-bold uppercase opacity-60 text-center">
        {text}
      </div>
    </div>
  );
}
function HistoryItem({ date, title, text }) {
  return (
    <div className="flex flex-col items-center text-center w-[60%] mx-auto pb-14">
      <Fade bottom>
        <p className="text-xs opacity-60 font-bold uppercase">{date}</p>
        <p className="text-lg opacity-80 py-5">{title}</p>
        <p className="opacity-60 leading-7 pb-10">{text}</p>
      </Fade>
      <span className="w-200 h-[2px] bg-[#ececed]" />
      <span className="w-[2px] h-20 bg-[#ececed]" />
    </div>
  );
}
export default About;
