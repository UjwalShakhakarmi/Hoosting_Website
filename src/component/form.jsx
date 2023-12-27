import React from "react";
import { arrowRight, map } from "../assets";

const ready = () => {
  return (
    <div className=" text-black rounded-2xl    flex flex-col items-center w-[350px] lg:w-[600px]">
      <div className="mt-4 mb-4 text-center "></div>
      <div className="flex w-full">
        <form method="post" action="" className="flex w-full">
          <div className="flex relative w-full">
            <input
              placeholder="Find your Perfect Domain "
              className="border border-primary-color w-full  px-5 outline-none rounded-l-lg focus-within:border-2 transition-all duration-200 ease-in-out"
              required=""
              type="text"
            />
          </div>
          <button className=" background-primary-color text-white rounded-r-lg w-[168px] h-[52px] transition-all duration-200 ease-in-out hover:bg-[#1d2a5b]">
            Search
          </button>
        </form>
      </div>
      <div className="flex justify-between mx-[-3px] lg-mx-[0px] w-full mt-5">
        <div className="com">
          <h1 className="text-[14px] lg:text-[18px] semi-bold absolute text-primary-color">
            .com
          </h1>
          <span className="text-[9px] lg:text-[12px] relative font-light top-4 left-12 ">
            Rs 1500
          </span>
        </div>
        <div className="net">
          <h1 className="text-[14px] lg:text-[18px] semi-bold absolute text-primary-color">
            .net
          </h1>
          <span className="text-[9px] lg:text-[12px] relative font-light top-3 left-10">
            Rs 1500
          </span>
        </div>
        <div className="org">
          <h1 className="text-[14px] lg:text-[18px] semi-bold absolute text-primary-color">
            .org
          </h1>
          <span className="text-[9px] lg:text-[12px] relative font-light top-3 left-10">
            Rs 1500
          </span>
        </div>
        <div className="xyz">
          <h1 className="text-[14px] lg:text-[18px] semi-bold absolute text-primary-color">
            .xyz
          </h1>
          <span className="text-[9px] lg:text-[12px] relative font-light top-3 left-10">
            Rs 1500
          </span>
        </div>
      </div>
    </div>
  );
};

export default ready;
