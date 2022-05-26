import React from "react";

function Gift() {
  return (
    <div className="bg-[#050827] flex items-center justify-center flex-col max-w-[1440px] mx-auto py-16">
      <div className="flex items-center justify-center opacity-60">
        <span className="w-8 h-[1px] bg-[#ececed]"></span>
        <p className="uppercase text-xs opacity-60 font-bold text-white mx-3">
          SIGN UP AND GET FREE COFFEE BAGS
        </p>
        <span className="w-8 h-[1px] bg-[#ececed]"></span>
      </div>
      <p className="text-4xl my-8 text-white">Coffee Updates</p>
      <div className="flex">
        <input
          className="w-[350px] py-5 px-6 bg-transparent border-0 border-[#2f303e] text-xs font-bold hover:border-[#ffffff80]"
          placeholder="nguyenduydai24@gmail.com"
          maxLength={256}
        />
        <button className="bg-white text-xs text-blacks uppercase px-8 ml-5">
          Subscribe
        </button>
      </div>
    </div>
  );
}
export default Gift;
