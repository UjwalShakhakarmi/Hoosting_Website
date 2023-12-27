import React, { useState } from "react";
import { navLinks } from "../constants";
import { SubMenu } from "../component";
import {
  menu,
  nepalflag,
  close,
  phone,
  arrowRight,
  arrowDown,
  arrowUp,
} from "../assets";

const header = () => {
  const [togglemobile, settogglemobile] = useState(false);
  const [toggle, setToggle] = useState(false);

  function handleToggle(id) {
    const foundNavLink = navLinks.find((navLink) => navLink.id === id);
    foundNavLink ? setToggle((cur) => !cur) : setToggle(false);
  }

  return (
    <nav className="w-full flex py-6 justify-between  items-center navbar">
      <img
        className="w-[124px] h-[35px] "
        src="https://hoostly.com/wp-content/uploads/2023/03/Hoostly.svg"
        alt="hoostly"
      />

      <ul className="list-none sm:flex hidden justify-end items-center flex mx-3">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } `}
          >
            <a
              href={`#${nav.id}`}
              className={`font-normal flex items-center`}
              onClick={() => handleToggle(nav.id)}
            >
              {nav.title}
              {toggle ? (
                <img src={arrowUp} className="mx-1" />
              ) : (
                <img src={arrowDown} className="mx-1" />
              )}
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden  sm:flex  ">
        <button className="text-white mx-4 text-[12px] font-medium rounded-full p-2.5 bg-blue-500 shadow-md shadow-blue-500/50">
          CLIENT AREA
        </button>
        <div className="flex flex-col items-center">
          <span className="flex text-xl font-bold text-[#1818B3]">
            <img src={phone} className="w-6 h-[22px] mr-2 mt-1" />
            <span> 984-390-6380</span>

            <img src={nepalflag} className="ml-2 mt-1" />
          </span>
          <span className="text-xs ml-2 -m-[0.2rem]">
            (10 am to 5pm support)
          </span>
        </div>
      </div>
      <div
        className={`${
          toggle ? "block" : "hidden"
        } absolute top-20 left-[9rem] mx-1 w-5/6 rounded-xl sidebar bg-white h-auto z-[10] border`}
      >
        <SubMenu />
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div className="mr-4">
          <button className="text-white text-[12px] font-medium rounded-full p-2.5 bg-blue-500 shadow-md shadow-blue-500/50">
            CLIENT AREA
          </button>
        </div>
        <img
          src={togglemobile ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => settogglemobile((prev) => !prev)}
        />
      </div>

      <div
        className={`${
          togglemobile ? "block" : "hidden"
        } p-2 absolute top-20 left-0 mx-1 w-full rounded-xl sidebar bg-white h-full z-[10]`}
      >
        <div className="flex flex-col items-center mb-7">
          <span className="flex text-xl font-bold text-[#024EAA]">
            <img src={phone} className="w-4 h-[18px] mr-2 mt-1" />
            <span className="text-sm"> 984-390-6380</span>
            <img src={nepalflag} className="ml-2 mt-1" />
          </span>
          <span className="text-xs ml-2 -m-[0.2rem]">
            (10 am to 5pm support)
          </span>
        </div>

        <ul className="list-none flex flex-col items-center">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[12px] ${
                index === navLinks.length - 1 ? "mr-0" : "mb-4"
              } `}
            >
              <a
                href={`#${nav.id}`}
                className={`font-normal flex items-center`}
              >
                <div>
                  <span>{nav.title} </span>
                </div>
                <img className="h-[12px]" src={arrowRight} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default header;
