import React from "react";

function Title({ text }) {
  return (
    <div className="flex items-center justify-center mb-24 opacity-60">
      <span className="w-8 h-[2px] bg-[#ececed]"></span>
      <p className="uppercase text-xs opacity-60 font-bold mx-3">{text}</p>
      <span className="w-8 h-[2px] bg-[#ececed]"></span>
    </div>
  );
}
export default Title;
