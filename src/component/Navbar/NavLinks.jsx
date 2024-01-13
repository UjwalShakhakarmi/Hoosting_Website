import React, { useEffect, useState } from "react";
import { navLinks } from "../../constants/index.jsx";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { NIMG1 } from "../../assets";
import { useTheme } from "../../Context/ThemeContext";

import {
  nepalflag,
  close,
  phone,
  arrowRight,
  Nav2,
  Nav1,
  arrowDown,
  arrowUp,
} from "../../assets";
import { BiTransfer } from "react-icons/bi";

const NavLinks = ({ setOpen }) => {
  const { theme } = useTheme();
  const location = useLocation();

  const [navId, setNavId] = useState(0);
  useEffect(() => {}, [location.pathname]);

  return (
    <>
      {navLinks.map((link, index) => (
        <div key={index}>
          <div className="font-light lg:font-light flex justify-between   w-full cursor-pointer text-[15px]  text-secondary p-[24px] group  ">
            <ul
              className="flex   justify-between w-full text-[17px] lg:text-[15px] items-center "
              onClick={() => setNavId(navId === link.id ? null : link.id)}
            >
              <Link
                to={link.link}
                className="flex w-full justify-between items-center"
              >
                <p>{link.title}</p>
                {navId === link.id ? (
                  <IoIosArrowDown className="lg:hidden transition-transform transform rotate-180 duration-500" />
                ) : (
                  <IoIosArrowForward className="lg:hidden transition-transform transform rotate-0 duration-500" />
                )}
              </Link>
            </ul>

            {link.submenu && (
              <div
                className={`absolute lg:block hidden shadow-md right-0 sm:px-16 px-6 w-full ${
                  theme === "mytheme" ? "bg-[#032A62]" : "bg-[#fff]"
                }  max-h-[400px] -top-[55rem] z-50 opacity-0 group-hover:lg:block ease-in duration-300 group-hover:opacity-100 group-hover:top-[4rem] transition-opacity`}
              >
                <div className="bg_shape2 absolute  w-[600px] h-[320px] left-40  bg-success opacity-20 blur-[5rem]  "></div>

                <div className="grid grid-cols-2 relative px-[120px] items-center">
                  <ul className="lg:grid sm:hidden  grid-rows-4 grid-flow-col gap-x-[4rem] gap-6 py-5 px-[20px]  items-center w-fit text-secondary  z-[10]">
                    {link.submenu.map((slink) => (
                      <li
                        key={slink.id}
                        className=" my-1 text-[15px] border rounded-md  border-transparent hover:border-slate-400  p-2 w-fit-content"
                      >
                        <Link
                          to={slink.link}
                          key={slink.id}
                          className="flex items-center"
                        >
                          <div className="text-error text-[24px] border p-1.5  rounded mx-3 bg-blue-50 ">
                            {slink.icon}
                          </div>
                          <a>{slink.title}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <img src={link.img} className="h-[280px] mx-auto " />
                  </div>
                </div>
              </div>
            )}
            {/* {link.title === "Support" && (
              <div className="absolute shadow-md right-0 sm:px-16 px-6 w-full bg-[#032A62] max-h-[400px] -top-[35rem] z-50 opacity-0 group-hover:lg:block ease-in duration-500 group-hover:opacity-100 group-hover:top-[4rem] transition-opacity">
                <div className="grid grid-cols-2 relative px-[210px]">
                  <div className="bg_shape2 absolute  w-[600px] h-[320px] left-40  bg-success opacity-20 blur-[5rem]  "></div>
                  <div className="py-4">
                    <h1 className=" text-2xl font-bold">Call Us</h1>
                    <p className="">Call Our Award Winning Support 24/7</p>
                    <ul className="py-4">
                      <li className="pt-2">
                        <a href="">+977-9843265125</a>
                      </li>
                      <li className="pt-2">
                        <a href="">+977-9843265125</a>
                      </li>
                      <li className="pt-2">
                        <a href="">+977-9843265125</a>
                      </li>
                      <li className="pt-2">
                        <a href="">+977-9843265125</a>
                      </li>
                    </ul>
                  </div>
                  <div className="py-4">
                    <h1 className="text-2xl font-bold">Chat Now</h1>
                    <p>
                      Chat with our sales & support team for quick answers on
                      product features, pricing and more.
                    </p>
                    <p>Hours: 24x7 Chat</p>
                  </div>
                </div>
              </div>
            )} */}
          </div>
          {/* mobile submenu  */}
          <div
            className={`lg:hidden  duration-300 ${
              navId === link.id ? " block" : " hidden"
            } `}
          >
            {link.submenu && (
              <div>
                {link.submenu.map((slink) => (
                  <li
                    key={slink.id}
                    className=" m-2  p-3 rounded text-secondary"
                  >
                    <Link
                      to={slink.link}
                      className="flex items-center"
                      onClick={() => setOpen(false)}
                    >
                      <BiTransfer className="text-primary text-[35px]  p-1  rounded mx-2 bg-blue-50 " />
                      <a>{slink.title}</a>
                    </Link>
                  </li>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
