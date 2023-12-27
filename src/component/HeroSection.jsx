import React from "react";
import styles from "../style";
import { Form } from "../component";

import { arrowRight, map } from "../assets";

const HeroSection = () => (
  <section id="home" className={`flex md:flex-row flex-col  `}>
    <div className={`flex-1 ${styles.flexStart} flex-col `}>
      <div className="flex flex-row justify-between items-center w-full pt-[5rem] lg:pt-0">
        <h1 className="flex-1 sm:text-[50px] text-[35px] font-bold text-primary-color leading-[50px] lg:leading-[65px] ">
          Make Your <br className="block " />
          Business Online
          <br className="sm:block hidden" />
        </h1>
      </div>
      {/* <div className="flex flex-row justify-between items-center w-full py-[6px]">
        <strong className="flex-1 ss:text-[72px] text-[20px] font-semibold">
          Starting from ₹129 per month.
        </strong>
      </div>
      <button className="border px-6 py-2 flex items-center justify-between w-[300px] background-primary-color text-white">
        Get Started
        <img src={arrowRight} />
      </button>
      <div className="flex flex-row justify-between items-center w-full py-[6px]">
        <p className="text-[12px]">No Hidden Fees & 24/7 Support Service</p>
      </div> */}
      <Form />
    </div>

    <div className="mt-12 mb-8">
      <img
        src="https://hoostly.com/wp-content/uploads/2023/07/svgexport-1-2.svg"
        className="w-[100%] h-[100%] relative z-[5]"
        alt=""
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 "> </div>
    </div>
  </section>
);

export default HeroSection;
