import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LogoDark } from "../../assets";
import { useTheme } from "../../Context/ThemeContext";
import { CiMenuFries } from "react-icons/ci";
import { Button1 } from "../../component";
import { FiPhone } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { nepalflag } from "../../assets";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { handleToggle, theme } = useTheme();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    // Add an event listener to disable scrolling when the mobile menu is open
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);
  return (
    <nav
      className={`w-full ${
        scrolled
          ? "bg-accent shadow-md "
          : theme === "mytheme"
          ? "border-gray-800 border-b "
          : "border-b"
      } flex py-0 sm:px-[6.5rem] justify-between items-center navbar fixed text-white right-0 left-0 top-0 z-50 transition-all delay-300 ease-in-out`}
    >
      <div className="logo">
        <Link to="/">
          <img
            className="w-[137px] h-[35px]"
            src={`${
              theme === "light"
                ? "https://hoostly.com/wp-content/uploads/2023/03/Hoostly.svg"
                : LogoDark
            }`}
            alt="hoostly"
          />
        </Link>
      </div>
      <label className=" lg:hidden swap swap-rotate mt-1 text-secondary mx-2">
        {/* this hidden checkbox controls the state */}
        <input
          type="checkbox"
          className="theme-controller"
          onChange={(e) => handleToggle(e)}
          checked={theme === "light" ? false : true}
        />

        {/* sun icon */}
        <svg
          className="swap-on fill-current w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        {/* moon icon */}
        <svg
          className="swap-off fill-current w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
      <ul className="list-none hidden md:hidden  justify-end items-center lg:flex mx-3 p-0">
        <NavLinks />
      </ul>
      <div className="hidden  lg:flex md:hidden ">
        <div className="flex flex-col items-center number_show">
          <span className="flex lg:text-lg font-bold text-secondary ">
            <FiPhone className="w-6 h-[22px] mr-2 mt-1 " />
            <span className="text-info"> 982-2799-880</span>

            <img src={nepalflag} className="ml-2 mt-1" />
          </span>
          <span className="text-xs ml-2 -m-[0.2rem] text-secondary">
            (10 am to 5pm support)
          </span>
        </div>
        <label className="  swap swap-rotate mt-1 text-secondary mx-2">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            onChange={(e) => handleToggle(e)}
            checked={theme === "light" ? false : true}
          />

          {/* sun icon */}
          <svg
            className="swap-on fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        <Link to="https://client.hoostly.com/index.php?rp=/login">
          <a className="text-secondary mx-4 text-[14px] font-medium rounded-xl py-3 px-5 border tracking-wide buttonFirst">
            Client Login
          </a>
        </Link>
      </div>
      {/* mobile view */}
      <div className="lg:hidden md:flex  flex flex-1 justify-end items-center">
        <div className="mr-4">
          <Link to="https://client.hoostly.com/index.php?rp=/login">
            <a className="text-secondary  text-[12px] font-medium rounded-xl p-2 py-3 border tracking-wide buttonFirst">
              Client Login
            </a>
          </Link>
        </div>

        <CiMenuFries
          onClick={() => setOpen((prev) => !prev)}
          className="w-[28px] h-[28px] object-contain text-secondary"
        />
      </div>

      {/* menuOpened */}
      <ul
        className={`p-5  lg:hidden block left-0 absolute top-0 w-full h-screen z-[100] text-black  font-light  bg-accent overflow-y-auto overflow-x-hidden md:overflow-x-auto duration-500 ${
          open ? "left-0" : "left-[-100%]"
        }`}
      >
        <div
          className="text-[35px] cursor-pointer flex items-center pb-9"
          onClick={() => setOpen((prev) => !prev)}
        >
          <IoClose className="text-secondary" />
        </div>
        <div className="flex items-center justify-between mb-12">
          <div className="flex flex-col items-center ">
            <span className="flex text-xl font-bold text-secondary ">
              <FiPhone className=" h-[22px] mr-2 mt-1 " />
              <span className="text-info"> 982-2799-880</span>

              <img src={nepalflag} className="ml-2 mt-1" />
            </span>
            <span className="text-xs ml-2 -m-[0.2rem] text-secondary">
              (10 am to 5pm support)
            </span>
          </div>
          <label className="  swap swap-rotate mt-1 text-secondary mx-2">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              onChange={(e) => handleToggle(e)}
              checked={theme === "light" ? false : true}
            />

            {/* sun icon */}
            <svg
              className="swap-on fill-current w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>

        <NavLinks setOpen={setOpen} />
      </ul>
    </nav>
  );
};

export default Navbar;
