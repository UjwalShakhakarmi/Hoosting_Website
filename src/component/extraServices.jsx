import React from "react";
import {
  SSLIMG,
  OtherProIMgW,
  OtherProIMgB,
  DomainImgW,
  DomainImgB,
} from "../assets";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Button1 } from "../component";
import { useTheme } from "../Context/ThemeContext";

// const data = [
//   {
//     id: 1,
//     heading: "Domain Registration",
//     desc: " Get your favorite domain at special prices. Verification and registration in 3 minutes.",
//     img: DomainImg,
//   },
//   {
//     id: 2,
//     heading: "Domain Registration",
//     desc: " Get your favorite domain at special prices. Verification and registration in 3 minutes.",
//     img: SSLIMG,
//   },
//   {
//     id: 3,
//     heading: "Domain Registration",
//     desc: " Get your favorite domain at special prices. Verification and registration in 3 minutes.",
//     img: OtherProIMg,
//   },
// ];

const extraServices = () => {
  const { theme } = useTheme();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="lg:py-16 pb-[5.75rem]">
        <div className="header text-center">
          <h1 className="text-3xl font-bold mb-3 text-secondary">
            Extra Services
          </h1>
          <p className="text-neutral leading-relaxed text-2xl  mb-3">
            All the solutions needed for online success
          </p>
        </div>
        {/* <div className="grid lg:grid-cols-3 gap-6"> */}
        {/* {data.map((content, index) => (
          <Content content={content} key={data.id} />
        ))} */}
        <div className=" hidden lg:grid lg:grid-cols-3 gap-6  ">
          <div
            className=" border rounded-lg shadow grid grid-row-flow gap-5 text-center py-12 px-7"
            data-aos="fade-right"
          >
            <div>
              <img
                src={theme === "light" ? DomainImgB : DomainImgW}
                alt=""
                className="mx-auto"
              />
            </div>
            <p className="text-secondary">Domain Registration</p>
            <span className="text-[14px] font-light text-secondary">
              Get your favorite domain at special prices. Verification and
              registration in 1 minutes.
            </span>
            <div className="w-1/2 mx-auto">
              <Link to="https://client.hoostly.com/cart.php?a=add&domain=register">
                <Button1>Get Started</Button1>
              </Link>
            </div>
          </div>

          <div
            className=" rounded-lg shadow grid grid-row-flow gap-5 text-center py-12 px-7"
            style={{
              background: "linear-gradient(to right,#5a28fa 0,#457bff 100%)",
            }}
          >
            <div>
              <img src={SSLIMG} alt="" className="mx-auto " />
            </div>
            <p className="text-white">SSL Certificates</p>
            <span className="text-[14px] text-white font-light">
              Choose the best security solutions for your online business.
            </span>
            <Link to="https://client.hoostly.com/index.php?rp=/store/shared-hosting">
              <div className=" p-4 text-[14px]  border flex justify-center  items-center text-white  rounded-xl  cursor-pointer  w-1/2 mx-auto">
                Get Started
              </div>
            </Link>
          </div>

          <div
            className=" border rounded-lg shadow grid grid-row-flow gap-5 text-center py-12 px-8"
            data-aos="fade-left"
          >
            <div>
              <img
                src={theme === "light" ? OtherProIMgB : OtherProIMgW}
                alt=""
                className="mx-auto"
              />
            </div>
            <p className="text-secondary">Web Hosting</p>
            <span className="text-[14px] font-light text-secondary">
              All basic server management and security software's For your
              successful online business.
            </span>
            <div className="w-1/2 mx-auto">
              <Link to="https://client.hoostly.com/cart.php?a=add&domain=register">
                <Button1>Get Started</Button1>
              </Link>
            </div>
          </div>
        </div>
        <Slider {...settings} className="lg:hidden ">
          <div className="px-1">
            <div className=" border rounded-lg shadow grid grid-row-flow gap-5 text-center py-12 px-7">
              <div>
                <img
                  src={theme === "light" ? DomainImgB : DomainImgW}
                  alt=""
                  className="mx-auto"
                />
              </div>
              <p className="text-secondary py-3">Domain Registration</p>
              <span className="text-[14px] font-light text-secondary ">
                Get your favorite domain at special prices. Verification and
                registration in 1 minutes.
              </span>
              <div className="w-1/2 mx-auto">
                <Link to="https://client.hoostly.com/cart.php?a=add&domain=register">
                  <Button1>Get Started</Button1>
                </Link>
              </div>
            </div>
          </div>
          <div className="px-1">
            <div className="rounded-lg shadow grid grid-row-flow gap-5 text-center py-12 px-7 bg-gradient-to-r from-[#5a28fa] via-[#6d4fff] to-[#457bff]">
              <div>
                <img src={SSLIMG} alt="" className="mx-auto " />
              </div>
              <p className="text-white  py-3">SSL Certificates</p>
              <span className="text-[14px] text-white font-light pb-2">
                Choose the best security solutions for your online business.
              </span>
              {/* <div className=" py-3 w-1/2 mx-auto">
              <a
                className="text-center  items-center text-primary-color  px-3 flex  hover:scale-105 hover:bg-primary hover:text-white transition duration-500  rounded-md py-3  bg-white  text-white font-[500] text-[14px] "
                href=""
              >
                Get Started Now
                <div className="icon text-[20px] mx-1">
                  <IoIosArrowDroprightCircle />
                </div>
              </a>
            </div> */}
              <div className="w-1/2 mx-auto">
                <Link to="https://client.hoostly.com/index.php?rp=/store/shared-hosting">
                  <Button1>Get Started</Button1>
                </Link>
              </div>
            </div>
          </div>
          <div className="px-1">
            <div className=" border rounded-lg shadow grid grid-row-flow gap-5 text-center py-12 px-7">
              <div>
                <img
                  src={theme === "light" ? OtherProIMgB : OtherProIMgW}
                  alt=""
                  className="mx-auto"
                />
              </div>
              <p className="text-secondary  py-3">Web Hosting</p>
              <span className="text-[14px] font-light text-secondary">
                All basic server management and security software's For your
                successful online business.
              </span>
              <div className="w-1/2 mx-auto">
                <a href="https://client.hoostly.com/index.php?rp=/store/shared-hosting">
                  <Button1>Get Started</Button1>
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default extraServices;
