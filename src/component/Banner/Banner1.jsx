import styles from "../../style.js";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Button1, Button3 } from "../index.js";
import { useTheme } from "../../Context/ThemeContext.jsx";

const Banner1 = () => {
  const { theme } = useTheme();

  return (
    <div
      className={` lg:py-[4rem] py-3  mb-8`}
      style={
        theme === "light"
          ? {
              background: "linear-gradient(to right, #5a28fa 0, #457bff 100%)",
            }
          : { background: "#000" }
      }
    >
      <div className={`${styles.paddingX}  ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}   `}>
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="col-span-2 text-[19px] text-white ">
              <div className=" grid grid-row gap-4">
                <h1 className="font-bold lg:text-[25px]">Are you Ready?</h1>
                <p className=" lg:text-[18px] text-[14px] font-light ">
                  Enjoy power, flexibility, and control for your site with out
                  Next-Generation Web Hosting.
                </p>
              </div>
            </div>
            <div>
              <div className="space-x-7 lg:mt-7 flex ">
                <Link to="https://client.hoostly.com/register.php">
                  <Button1> Register </Button1>
                </Link>
                <div
                  className={`${
                    theme === "mytheme"
                      ? "transparent"
                      : "  border border-gray-200 shadow-sm  "
                  }  buttonFirst lg:h-auto h-[50px]  lg:w-fit px-4 lg:px-7 py-2.5 text-[14px]  border  flex justify-center  items-center  rounded-xl text-white  cursor-pointer duration-400 transition-all `}
                >
                  Contact Us
                </div>
                {/* <div className=" p-4 text-[14px]  border flex justify-center  items-center text-white  rounded-xl  cursor-pointer ">
              Register Now
            </div>
            <div className=" p-4 text-[14px]  border flex justify-center  items-center text-white  rounded-xl  cursor-pointer ">
              Contact Us
            </div> */}
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Banner1;
