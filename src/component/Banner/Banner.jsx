import React from "react";
import { Rating, TrustPilot } from "../../assets/index.js";
import { useTheme } from "../../Context/ThemeContext.jsx";
import styles from "../../style.js";
const Banner = () => {
  const { theme } = useTheme();

  return (
    <div
      className="lg:py-5 pt-4  bg-warning pb-5"
      style={
        theme === "light"
          ? {
              background: "#FFE9C0",
            }
          : { background: "transparent" }
      }
    >
      <div className={`${styles.paddingX}  ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}   `}>
          <div className="lg:grid  justify-items-center text-secondary lg:grid-cols-6 items-center text-center lg:gap-0 gap-3 ">
            <p className="lg:text-[18px]">Our Customers Say</p>
            <h1 className="font-bold lg:text-[18px] text-secondary">
              Excellent
            </h1>
            <img src={Rating} className="mx-auto lg:w-[150px] w-[100px]" />
            <div className="col-span-2 text-secondary">
              <p className="lg:text-[17px] text-[14px]">
                4.9 out of 5 based on Hoostly Reviews
              </p>
            </div>
            <div className="flex items-center justify-center mt-2 lg:mt-0">
              <img
                src={TrustPilot}
                alt=""
                className="lg:mx-auto lg:w-[30px] w-[30px] "
              />
              <p className="mt-2 tracking-wide">TrustPilot</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
