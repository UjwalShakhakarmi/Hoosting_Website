import React from "react";
import { FaCheck } from "react-icons/fa";
import { Button } from "..";

export default function CardHighlight({ data }) {
  return (
    <div className="md:mb-8 mx-3 md:mx-5 flex flex-col   rounded-[24px] w-auto lg:hover:scale-[1.03] transition-all duration-500 ease-in-out">
      <div
        className="text-center rounded-[24px]"
        style={{
          background: "linear-gradient(to right,#5a28fa 0,#457bff 100%)",
        }}
      >
        <div className="pt-3 pb-1">
          <span className="text-center text-white">Most Popular</span>
        </div>

        <div className="px-4 md:px-7 m-1 bg-accent  flex flex-col items-start  pt-3  rounded-[24px]">
          <div className="text-start ">
            <span className="  pt-6 text-start font-[700] text-[18px] text-secondary">
              {data.head}
            </span>
          </div>
          <div className="font-[300] text-start text-secondary text-[13px]">
            {data.desc}
          </div>
          <div className="flex flex-col items-start mt-3">
            <p className="text-5xl font-bold gap-3 text-info">
              <span className="text-lg text-info">Rs.</span>
              {data.DiscountedPrice}
              <span className="text-lg font-[300] __variable_6d1a03">
                {data.time}
              </span>
            </p>
            <div className="flex items-center">
              <p className="mt-2 mb-2 text-gray-500 text-sm w-fit font-[500] line-through">
                Rs.{data.ActualPrice}{" "}
              </p>
              <span className="mx-2 p-1 rounded-lg text-[10px] text-black bg-[#FFD891]">
                Save 50%
              </span>
            </div>
            <p className="text-xs mb-2 pb-2 font-normal text-gray-500">
              Register and Renew at same price.
            </p>
          </div>
          <div className="w-full">
            <a href={data.link}>
              <Button>Add to cart</Button>
            </a>
          </div>
          <div className="w-full mt-4 flex flex-col mb-7">
            <div className="font-[300] __variable_6d1a03">
              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-info" />

                  <p className="text-[15px]  text-secondary">
                    <span className="font-semibold text-info">
                      {data.subHead}
                    </span>{" "}
                    {data.subHead_sub}
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-info" />
                  <p className="text-[15px]  text-secondary">
                    <span className="font-semibold text-info">Nepal Based</span>{" "}
                    Server
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-info" />
                  <p className="text-[15px]  text-secondary text-left">
                    <span className="font-semibold text-info ">Unlimited</span>{" "}
                    Nvme-SSD
                  </p>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-info" />
                  <p className="text-[15px]  text-secondary">
                    <span className="font-semibold text-info">Unlimited</span>{" "}
                    Bandwidth
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-info" />
                  <p className="text-[15px]  text-secondary">
                    <span className="font-semibold text-info">
                      Setup on Aapanel with
                    </span>{" "}
                    Root
                  </p>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-info" />
                  <p className="text-[15px]  text-secondary">
                    <span className="font-semibold text-info">
                      {data.core} Core
                    </span>{" "}
                    CPU
                    <span className="font-semibold text-info mx-1">
                      {data.ram} GB{" "}
                    </span>{" "}
                    RAM
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-info" />
                  <p className="text-[15px]  text-secondary">
                    <span className="font-semibold text-info">Free</span> SSL &
                    Immunify
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-info" />
                  <p className="text-[15px]  text-secondary">
                    <span className="font-semibold text-info">WhatsApp</span>{" "}
                    Support
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
