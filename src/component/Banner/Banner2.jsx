import React from "react";
import { Button, Button1, Button3 } from "../index.js";
import { useTheme } from "../../Context/ThemeContext.jsx";
import styles from "../../style.js";

const Banner2 = () => {
  const { theme } = useTheme();

  return (
    <div
      className="lg:py-[6rem] py-5"
      style={
        theme === "light"
          ? {
              background: "linear-gradient(to right, #5a28fa 0, #457bff 100%)",
            }
          : { background: "transparent" }
      }
    >
      <div className={`${styles.paddingX}  ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}   `}>
          {" "}
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2  text-white ">
              <div className=" grid grid-row lg:gap-4 gap-2">
                <p className="lg:text-[25px]">
                  We are the Recommended Envato Hosting provider.
                </p>
                <h1 className="font-bold lg:text-[25px]">
                  Get a free setup for any of your Envato scripts with 20X
                  faster servers.
                </h1>
                <div className="lg:space-x-7 space-x-4  mt-7 flex">
                  <Button1> Host My Scripts</Button1>
                  <div
                    className={`${
                      theme === "mytheme"
                        ? "transparent"
                        : "  border border-gray-200 shadow-sm  "
                    }  buttonFirst lg:h-auto h-[50px]  lg:w-fit px-4 lg:px-7 py-2.5 text-[14px]  border  flex justify-center  items-center  rounded-xl text-white  cursor-pointer duration-400 transition-all `}
                  >
                    Watch Video
                  </div>
                  {/* <a className="lg:px-[25px] lg:py-[13px] px-[18px] py-[10px] transition duration-500 bg-[#4A85FA] rounded-[16px] ">
                Host My Scripts
              </a>
              <a className="lg:px-[25px] lg:py-[13px] px-[18px] py-[10px] transition duration-500 bg-[#4A85FA] rounded-[16px] ">
                Watch Video
              </a> */}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4  gap-4 py-2">
              <div className="bg-[#6B3EFB]  rounded-2xl lg:h-[70px] lg:w-[70px] h-[50px] w-[50px] lg:p-4 p-2">
                <img
                  loading="lazy"
                  src=""
                  alt="Stackposts"
                  width="55"
                  height="55"
                />
              </div>
              <div className="bg-[#6B3EFB]  rounded-2xl lg:h-[70px] lg:w-[70px] h-[50px] w-[50px] lg:p-4 p-2">
                <img
                  loading="lazy"
                  src=""
                  alt="Stackposts"
                  width="55"
                  height="55"
                />
              </div>
              <div className="bg-[#6B3EFB]  rounded-2xl lg:h-[70px] lg:w-[70px] h-[50px] w-[50px] lg:p-4 p-2">
                <img
                  loading="lazy"
                  src=""
                  alt="Stackposts"
                  width="55"
                  height="55"
                />
              </div>
              <div className="bg-[#6B3EFB]  rounded-2xl lg:h-[70px] lg:w-[70px] h-[50px] w-[50px] lg:p-4 p-2">
                <img
                  loading="lazy"
                  src=""
                  alt="Stackposts"
                  width="55"
                  height="55"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
