import React, { useState } from "react";
import { arrowRight, map } from "../assets";

const ready = () => {
  const [input, setInput] = useState("");

  return (
    <div className=" text-black rounded-2xl    flex flex-col items-center w-auto lg:w-[600px] py-5">
      <div className="flex w-full lg:mt-4 mt-2">
        <form
          method="post"
          action={`https://client.hoostly.com/cart.php?a=add&domain=register&query=${input}`}
          className="flex w-full"
        >
          <div className="flex relative w-full">
            <input
              placeholder="Find your Perfect Domain"
              className="border  border-secondary w-full  px-5 outline-none rounded-l-lg focus-within:border-2 transition-all duration-200 ease-in-out"
              required=""
              type="text"
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          {/* https://client.hoostly.com/domainchecker.php */}
          <button className="  text-white rounded-r-lg w-[168px] h-[52px] transition-all duration-200 ease-in-out bg-[#000000] border-2 border-secondary ">
            Search
          </button>
        </form>
      </div>
      <div className="flex justify-between mx-[-3px] lg-mx-[0px] lg:w-full mt-5 w-[300px]">
        <div className="com">
          <h1 className="text-[14px] lg:text-[18px] semi-bold absolute text-info">
            .com
          </h1>
          <span className="text-[9px] text-secondary lg:text-[12px] relative font-light top-4 lg:left-10 left-0">
            Rs 1599
          </span>
        </div>
        <div className="net">
          <h1 className="text-[14px] lg:text-[18px] semi-bold absolute text-info">
            .net
          </h1>
          <span className="text-[9px] text-secondary lg:text-[12px] relative font-light top-3 lg:left-10 left-0">
            Rs 1799
          </span>
        </div>
        <div className="org">
          <h1 className="text-[14px] lg:text-[18px] semi-bold absolute text-info">
            .org
          </h1>
          <span className="text-[9px] text-secondary lg:text-[12px] relative font-light top-3 lg:left-10 left-0">
            Rs 1799
          </span>
        </div>
        <div className="xyz">
          <h1 className="text-[14px] lg:text-[18px] semi-bold absolute text-info">
            .info
          </h1>
          <span className="text-[9px] text-secondary lg:text-[12px] relative font-light top-3 lg:left-10 left-0">
            Rs 1499
          </span>
        </div>
      </div>
    </div>
  );
};

export default ready;
