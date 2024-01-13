import React, { useRef, useState } from "react";
import { useTheme } from "../Context/ThemeContext.jsx";
import {
  WordPressImg,
  Explore2,
  Explore3,
  Explore4,
  ExploreHead1,
  ExploreHead2,
  ExploreHead3,
} from "../assets";
import Slider from "react-slick";
import { Button } from "../component";

const data = [
  {
    image: ExploreHead1,
    heading: "Wordpress Hosting",
    content: [
      {
        head: "WordPress. We love it",
        desc: " It is a web hosting service that is specifically optimized for websites powered by the WordPress content management system. It caters to the unique requirements of WordPress websites, offering optimized environments and tailored features to ensure seamless performance, security, and ease of use.",
        img: WordPressImg,
        buttonContent: "Explore WordPress Hosting",
      },
    ],
  },
  {
    image: ExploreHead2,
    heading: "Ecommerce Hosting",
    content: [
      {
        head: "Complexity. We’ve removed it",
        desc: "Ecommerce hosting made easy & affordable, choose a fine-tuned web hosting services solution for online Shopping website.",
        img: Explore2,
        buttonContent: "Explore Ecommerce Hosting",
      },
    ],
  },
  {
    image: ExploreHead3,
    heading: "Cloud Hosting",
    content: [
      {
        head: "The Speed. We got it",
        desc: " Cloud hosting is the most recent platform made available for hosting solutions. The cloud hosting platform is seen as state of the art for tech enthusiasts. Cloud gives quick, tailored on demand hosting upon demand. Cloud hosting is a network of servers connected to themselves. The users are able to improve their business without worrying about additional overhead or inventory. This is because cloud hosting servers are not found in the same data center.",
        img: Explore3,
        buttonContent: "Explore Cloud Hosting",
      },
    ],
  },
  {
    image: ExploreHead1,
    heading: "Reseller Hosting",
    content: [
      {
        head: "Wanna Sell ?",
        desc: "Reseller hosting is a type of web hosting service that lets you buy hosting resources from a hosting provider and resell them to your own customers.",
        img: Explore4,
        buttonContent: "Explore Reseller Hosting ",
      },
    ],
  },
];
const Explore = () => {
  const { theme } = useTheme();
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSlider = useRef(null);

  const mainSliderSettings = {
    dots: false,
    infinite: true,
    fade: true,
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
        <ExploreContent
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
            <ExploreContentDetails
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
export default Explore;
function ExploreContent({ data, setIndex, activeIndex, theme }) {
  return (
    <>
      <div className="lg:grid lg:grid-cols-4 grid-cols-2 gap-5 lg:py-7 py-3 cursor-pointer z-10 hidden">
        {data.map((data, index) => (
          <div
            className={`p-[4px] rounded-xl
            ${theme === "mytheme" ? "card  " : " card_light shadow"}     ${
              activeIndex === index ? "activeContent shadow-none" : ""
            }`}
            key={index}
          >
            <div
              className={`card2  p-[19px] rounded-lg items-center bg-accent`}
              onClick={() => setIndex(index)}
            >
              <div className="flex items-center">
                <img
                  loading="lazy"
                  src={data.image}
                  className="lg:w-[40px] lg:h-[40px] w-[20px] h-[20px]"
                />
                <h1 className="text-secondary lg:text-[18px] text-[15px] mx-3">
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
                key={index}
              >
                <div
                  className={`card2  p-[19px] rounded-lg items-center bg-accent`}
                  onClick={() => setIndex(index)}
                >
                  <div className="flex items-center">
                    <img
                      loading="lazy"
                      src={data.image}
                      className="lg:w-[40px] lg:h-[40px] w-[20px] h-[20px]"
                    />
                    <h1 className="text-secondary lg:text-[18px] text-[14px] mx-2">
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
function ExploreContentDetails({ content, mainImageIndex }) {
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
          <Button>{card.buttonContent}</Button>
        </div>
      </div>
      <div className="" data-aos="fade-left">
        <img src={card.img} />
      </div>
    </div>
  );
}
