import React from "react";
import {
  SSLIMG,
  OtherProIMgW,
  OtherProIMgB,
  DomainImgW,
  DomainImgB,
} from "../assets";
import { MdInstallDesktop } from "react-icons/md";
import { useTheme } from "../Context/ThemeContext";
import { FaFreeCodeCamp } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import Slider from "react-slick";
const data = [
  {
    head: "Automatic Installation",
    desc: "The most recent and safe version of WordPress is automatically installed by Bluehost when your WordPress Hosting plan is created.",
    img: <MdInstallDesktop />,
  },
  {
    head: "Automatic Updates",
    desc: "We keep your WordPress Hosting plan updated daily to keep it secure even after your account is created.",
    img: <GrUpdate />,
  },
  {
    head: "Free Domain for 1 Year",
    desc: "As soon as your WordPress Hosting account is created, you may take advantage of a free domain of your choice for a year.",
    img: <FaFreeCodeCamp />,
  },
];
const Benefits = () => {
  var settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
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
      <div className="lg:py-10 ">
        <div className="header text-center ">
          <h1 className="text-2xl font-bold mb-3 text-secondary">
            We provide Hosting with unbeatable features and benefits
          </h1>
          <p className="text-secondary leading-relaxed text-l w-5/6 mx-auto font-light mb-3">
            Experience performance that can only be described as extraordinary
            and shared web hosting that is unprecedented, with these exclusive
            free features.
          </p>
        </div>
        <div className="lg:grid hidden grid-cols-3 gap-9 py-8">
          {data.map((data, index) => (
            <BenefitsContent data={data} key={index} />
          ))}
        </div>
        <Slider {...settings} className=" lg:hidden py-4">
          {data.map((data, index) => (
            <BenefitsContent data={data} key={index} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Benefits;
function BenefitsContent({ data }) {
  const { theme } = useTheme();

  return (
    <div className="px-1">
      <div className=" rounded-lg  shadow-inner shadow-blue-50 border grid grid-row-flow gap-5 text-center py-12 px-5">
        <div className="text-[70px] mx-auto text-info">
          {/* <img
            src={theme === "light" ? DomainImgB : DomainImgW}
            alt=""
            className="mx-auto"
          /> */}
          {data.img}
        </div>
        <p className="text-secondary">{data.head}</p>
        <span className="text-[14px] font-light text-secondary">
          {data.desc}
        </span>
      </div>
    </div>
  );
}
