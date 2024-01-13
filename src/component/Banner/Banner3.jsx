import React from "react";
import { Button, Button1 } from "../index.js";
import styles from "../../style.js";
import { Link } from "react-router-dom";
import { Person1 } from "../../assets/index.js";
import { useTheme } from "../../Context/ThemeContext.jsx";

const Banner3 = () => {
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
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2  text-white items-center pt-10 ">
              <div className=" grid grid-row lg:gap-4 gap-2">
                <h1 className="lg:text-[25px] text-[20px]">
                  Excellent Reviews
                </h1>
                <p className="font-light lg:text-[15px]">
                  Keep your website running smoothly with a VDS hosting company
                  that guarantees you good uptime. Check our hundreds of 5 star
                  reviews and what our customers have to say.
                </p>
                <strong className="lg:text-[15px]">
                  Do you have any question about VDS Servers?
                </strong>

                <div className="w-fit  mt-7 ">
                  <Link to="https://client.hoostly.com/index.php?rp=/login">
                    <Button1> Contact Us</Button1>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mx-auto lg:w-5/6">
              <div
                className={`${
                  theme === "mytheme"
                    ? "Button_card p-[1.5px]"
                    : " card_light border border-gray-200 shadow-sm  "
                }    rounded-xl cursor-pointer `}
              >
                <div className=" px-[25px] py-[30px] items-center text-center  transition duration-500  rounded-xl  bg-accent  text-info font-[500] text-[14px] ">
                  <img
                    src={Person1}
                    alt=""
                    className="rounded-full mx-auto  h-[70px] w-[70px] "
                  />
                  <p className="mt-3 font-light">
                    Its an excellent Virtual dedicated server provider providing
                    a top quality service at a low cost. I don't regret choosing
                    them over Cantabo. The customer care is excellent.
                  </p>
                  <p className="mt-3 ">Hari Ram Krishna</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
