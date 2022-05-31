import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

function Blog() {
  const { story } = useSelector((state) => state.storys);
  return (
    <div className="relative py-24">
      <Helmet>
        <title>My Coffee - Blog</title>
      </Helmet>
      <div className="bg-[#f6f6f6] flex items-stretch flex-col min-h-[530px] max-w-[1440px] px-5 mx-auto justify-center">
        <div className="container bg-cover flex flex-col items-center text-center text-white">
          <p className="text-4xl text-blacks mb-8">
            Read coffee stories on our Blog
          </p>
          <p className="opacity-80 text-blacks max-w-md leading-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <div className="flex items-center justify-center my-24 opacity-60">
            <span className="w-8 h-[1px] bg-[#ececed]"></span>
            <p className="uppercase text-xs text-blacks opacity-60 font-bold mx-3">
              FEATURED POSTS
            </p>
            <span className="w-8 h-[1px] bg-[#ececed]"></span>
          </div>
        </div>
      </div>
      <div className="container px-5">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mtStory">
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
        </div>
        <div className="flex lg:flex-row flex-col py-14">
          <div className="lg:w-2/3 w-full lg:mr-10 mr-0">
            <p className="text-2xl pb-5 border-b-0 border-gray-200 lg:text-left text-center">
              Latest Posts
            </p>
            <div className="py-10">
              {story.map((value, key) => (
                <LatestPostItem
                  key={key}
                  image={value.image}
                  title={value.title}
                  content={value.content}
                  date={value.date}
                />
              ))}
            </div>
          </div>
          <div className="lg:w-1/3 w-full">
            <p className="text-2xl pb-5 border-b-0 border-gray-200 lg:text-left text-center">
              About Us
            </p>
            <div className="py-10 text-center lg:text-left">
              <div>
                <img
                  className="mx-auto lg:mx-0"
                  src="/logo.png"
                  height={24}
                  width={112}
                />
                <p className="opacity-60 text-blacks text-sm py-5 leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
                <Link href="/About">
                  <button className="text-[#a25f4b] text-sm hover:border-b-[#a25f4b] btnIntroduce">
                    Read the full Story
                  </button>
                </Link>
              </div>
              <div className="py-10">
                <p className="text-2xl pb-5 border-b-0 border-gray-200">
                  Categories
                </p>
                <div className="mt-10">
                  <CategoryItem text={"Barista"} />
                  <CategoryItem text={"Coffee"} />
                  <CategoryItem text={"Lifestyle"} />
                  <CategoryItem text={"Mugs"} />
                </div>
              </div>
              <div className="pb-10">
                <p className="text-2xl pb-5 border-b-0 border-gray-200 lg:text-left text-center">
                  Authors
                </p>
                <div className="mt-10">
                  <AuthorItem img={"/author1.jpg"} text={"Fred Gleason"} />
                  <AuthorItem img={"/author2.jpg"} text={"Isabel Hamill"} />
                  <AuthorItem img={"/author3.jpg"} text={"Maurice Herman"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-24">
          <div className="border-l-2 border-b-2 border-[#a25f4b33]">
            <p className="text-[#a25f4b] text-lg font-bold lg:font-normal leading-8 p-8 text-center">
              "I wake up some mornings and sit and have my coffee and look out
              at my beautiful garden, and I go, ’Remember how good this is.
              Because you can lose it."
            </p>
          </div>
          <p className="text-xs text-blacks opacity-30 uppercase text-center pt-10">
            JASON JOHNSON - OWNER OF COFFEESTYLE
          </p>
        </div>
      </div>
    </div>
  );
}

function Story({ image, text, title, date }) {
  return (
    <div className="pb-10 w-full">
      <div className="relative imgProduct">
        <img
          className="h-[300px] w-full"
          src={image}
          width={460}
          height={460}
        />
        <Link href="/About">
          <button className="bg-white uppercase text-blacks text-xs absolute left-1/2 -translate-x-1/2 bottom-2 invisible w-11/12 py-3 transition-all duration-200 opacity-0 btnProducts">
            read the full story
          </button>
        </Link>
      </div>
      <div className="pt-10 text-center lg:text-left">
        <p className="text-blacks text-lg">{title}</p>
        <p className="text-blacks opacity-60 text-sm py-5">{text}</p>
        <p className="text-blacks opacity-60 text-sm uppercase">{date}</p>
      </div>
    </div>
  );
}

function LatestPostItem({ image, title, content, date }) {
  return (
    <div className="flex lg:flex-row flex-col justify-center pb-10 lg:h-[210px] h-auto">
      <div className="lg:w-2/5 w-full mr-10 relative imgProduct">
        <img className="w-full h-full" src={image} width={260} height={210} />
        <Link href="/About">
          <button className="bg-white uppercase text-blacks text-xs absolute left-1/2 -translate-x-1/2 bottom-2 invisible w-11/12 py-3 transition-all duration-200 opacity-0 btnProducts">
            read the full story
          </button>
        </Link>
      </div>
      <div className="lg:w-3/5 w-full text-center lg:text-left">
        <p className="font-medium text-blacks text-lg mt-5 lg:mt-0">{title}</p>
        <p className="opacity-60 text-blacks text-sm leading-7 py-5">
          {content}
        </p>
        <p className="opacity-60 font-bold text-blacks uppercase text-sm">
          {date}
        </p>
      </div>
    </div>
  );
}

function CategoryItem({ text }) {
  return (
    <div className="bg-transparent hover:bg-[#a25f4b0a] text-left transition-all cursor-pointer border-l-2 border-[#a25f4b33] hover:border-[#a25f4bcc] mb-2">
      <p className="text-blacks py-3 pl-5">{text}</p>
    </div>
  );
}

function AuthorItem({ text, img }) {
  return (
    <div className="bg-transparent hover:bg-[#a25f4b0a] transition-all cursor-pointer border-l-2 border-[#a25f4b33] hover:border-[#a25f4bcc] mb-2">
      <div className="py-2 pl-5 flex lg:items-center items-start">
        <img src={img} height={60} width={60} className="max-h-[60px]" />
        <p className="text-blacks ml-5">{text}</p>
      </div>
    </div>
  );
}
export default Blog;
