import React, { useRef, useState } from "react";
import { useTheme } from "../Context/ThemeContext.jsx";
import {
  WordPressImg,
  CentOS,
  Debian,
  AlmaLinux,
  RedHat,
  ubuntu,
  ExploreHead1,
  WordNew,
} from "../assets";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Button } from "../component";
const data = [
  {
    id: 1,
    image: ubuntu,
    heading: "Ubuntu",
    content: [
      {
        head: "Ubuntu",
        desc: "Ubuntu is a Linux distribution based on Debian and composed mostly of free and open-source software. Ubuntu is officially released in three editions: Desktop, Server, and Core for Internet of things devices and robots.",
        img: ubuntu,
        buttonContent: "Get Started Now",
      },
    ],
  },
  {
    id: 2,
    image: ExploreHead1,
    heading: "WordPress",
    content: [
      {
        head: "WordPress",
        desc: " Best Hosting for WordPress That Guarantees Success Reliable, lightning-fast hosting solutions specifically optimized for WordPress.",
        img: WordNew,
        buttonContent: "Get Started Now",
      },
    ],
  },
  {
    id: 3,
    image: CentOS,
    heading: "CentOS",
    content: [
      {
        head: "CentOS",
        desc: " CentOS is in some ways the open source version of the Red Hat OS. Hoostly offers versions 7 and 8 of CentOS.",
        img: CentOS,
        buttonContent: "Get Started Now",
      },
    ],
  },
  {
    id: 4,
    image: RedHat,
    heading: "Red Hat",
    content: [
      {
        head: "Red Hat",
        desc: "Red Hat is a licensed enterprise operating system. Hoostly offers Red Hat version 8.",
        img: RedHat,
        buttonContent: "Get Started Now ",
      },
    ],
  },
  {
    id: 5,
    image: AlmaLinux,
    heading: "AlmaLinux",
    content: [
      {
        head: "AlmaLinux",
        desc: " AlmaLinux OS is an open-source, community-driven Linux operating system that fills the gap left by the discontinuation of the CentOS Linux stable release. It is one of the most popular virtualization operating systems, and Hoostly offers version 8 of AlmaLinux.",
        img: AlmaLinux,
        buttonContent: "Get Started Now ",
      },
    ],
  },
  {
    id: 6,
    image: Debian,
    heading: "Debain",
    content: [
      {
        head: "Debian",
        desc: "Debian is an Open Source Linux operating system based on Debian, compared to Debian, this distribution offers 5 years of long-term support. Hoostly offers versions 11 and 12.",
        img: Debian,
        buttonContent: "Get Started Now ",
      },
    ],
  },
];
const OSsetup = () => {
  const { theme } = useTheme();
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSlider = useRef(null);

  const mainSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    afterChange: (index) => {
      setMainImageIndex(index);
      setActiveIndex(index);
    },
  };

  function changeMainImage(index) {
    setActiveIndex(index);
    setMainImageIndex(index);
    if (mainSlider.current && mainSlider.current.slickGoTo) {
      mainSlider.current.slickGoTo(index);
    }
  }
  return (
    <div className="py-7 lg:py-16">
      <div className="lg:grid lg:grid-row-2 gap-12">
        <OSsetupContent
          data={data}
          setIndex={changeMainImage}
          activeIndex={activeIndex}
          theme={theme}
        />
      </div>
      <div className="content">
        <Slider
          className=""
          ref={mainSlider}
          {...mainSliderSettings}
          initialSlide={mainImageIndex}
        >
          {data.map((data, index) => (
            <OSsetupContentDetails
              content={data}
              key={index}
              mainImageIndex={mainImageIndex}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  centerMode: true,
  arrows: false,
  slidesPerRow: 1,
};
export default OSsetup;
function OSsetupContent({ data, setIndex, activeIndex, theme }) {
  return (
    <>
      <div className="lg:grid lg:grid-cols-6 grid-cols-2 gap-5 lg:py-7 py-3 cursor-pointer  hidden">
        {data.map((data, index) => (
          <div
            className={`p-[4px] rounded-xl
            ${theme === "mytheme" ? "card  " : " card_light shadow"}     ${
              activeIndex === index ? "activeContent shadow-none" : ""
            }`}
            key={index}
          >
            <div
              className={`card2  p-[19px] rounded-lg items-center bg-accent ${
                activeIndex === index
                  ? "activeContent shadow-none text-white"
                  : ""
              }`}
              onClick={() => setIndex(index)}
            >
              <div className="flex items-center">
                <img
                  loading="lazy"
                  src={data.image}
                  className="lg:w-[40px] lg:h-[40px] w-[20px] h-[20px]"
                />
                <h1
                  className={` ${
                    activeIndex === index ? "text-white " : ""
                  }  text-secondary lg:text-[18px] text-[15px] mx-3`}
                >
                  {data.heading}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:py-5 my-3 lg:hidden ">
        <Slider {...settings}>
          {data.map((data, index) => (
            <div key={index} className="px-2 ">
              <div
                className={`p-[4px] rounded-xl
           ${theme === "mytheme" ? "card  " : " card_light shadow"}     ${
                  activeIndex === index ? "activeContent shadow-none" : ""
                }`}
              >
                <div
                  className={`card2  p-[19px] rounded-lg items-center bg-accent ${
                    activeIndex === index
                      ? "activeContent shadow-none text-white"
                      : ""
                  }`}
                  onClick={() => setIndex(index)}
                >
                  <div className="flex items-center">
                    <img
                      loading="lazy"
                      src={data.image}
                      className="lg:w-[40px] lg:h-[40px] w-[20px] h-[20px]"
                    />
                    <h1
                      className={` ${
                        activeIndex === index ? "text-white " : ""
                      }  text-secondary lg:text-[18px] text-[15px] mx-3`}
                    >
                      {data.heading}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
function OSsetupContentDetails({ content, mainImageIndex }) {
  let card = content.content[0];

  return (
    <div className="grid lg:grid-cols-3 gap-12 py-6">
      <div className="lg:col-span-2" data-aos="fade-right">
        <h1 className=" text-[25px] lg:pt-[50px]   font-bold text-secondary">
          {card.head}
        </h1>
        <p className=" font-light  pt-10 text-secondary">
          {card.desc}
          <br />{" "}
        </p>

        <div className="w-fit py-8">
          <Link to="https://client.hoostly.com/index.php?rp=/login">
            <Button>{card.buttonContent}</Button>
          </Link>
        </div>
      </div>
      <div className="lg:block hidden" data-aos="fade-left">
        <img src={card.img} className="lg:w-[280px] " />
      </div>
    </div>
  );
}
