import React, { useRef, useState } from "react";
import { BackPattern, map, Rating, Person1 } from "../assets";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useTheme } from "../Context/ThemeContext";
import Slider from "react-slick";
const data = [
  {
    name: "Nishal Rai",
    img: Person1,
    content: [
      {
        heading: "The support was really quick and..",
        Description:
          " The support was really quick and informative. The issue was professionally handled.",
      },
    ],
  },
  {
    name: "Ramesh Sharma",
    img: Person1,

    content: [
      {
        heading: "Best hosting company for both newbies and experts",
        Description:
          " At that price, the hosting service they give is incredible. In addition, I am really pleased with the technical assistance I received from them. I didn't know a lot of stuff, and you guys were quite helpful with the setup. Thank you for responding quickly to all of my questions and even resolving them for me. I'm delighted to be affiliated with Hoostly. Definitely the best:) Strongly suggested:)",
      },
    ],
  },
  {
    name: "Avihs Kshetrii",
    img: Person1,

    content: [
      {
        heading: "The best ever web hosting service provider in Nepal",
        Description:
          "The first ever web hosting platform in Nepal with so much facilities at that low cost. If you search for the others, they charge around 4 times than hoostly does. Unlike the other web hosting companies in Nepal, hoostly does a great job of solving its clients' issues for them whereas for the others, you have to resolve the issues on your own. For the beginners, if you need, they provide free guide to getting started; now that's the thing I adore the most about Hoostly.",
      },
    ],
  },
  {
    name: "Surya Basnet",
    img: Person1,

    content: [
      {
        heading: "Happy to get associated with Hoostly",
        Description:
          "Happy to get associated with Hoostly, I am truly very happy with the service I received . I didn't new many things and you guys really helped me with all the setup.. Best one for sure 🙂 Highly Recommended 🙂 Affordable price as quick reply messages.Hoostly Unlimited Web Hosting Company",
      },
    ],
  },
  {
    name: "Hari Ram Krishna",
    img: Person1,

    content: [
      {
        heading: "The best value for money",
        Description:
          " The first ever web hosting platform in Nepal with so much facilities at that low cost. If you search for the others, they charge around 4 times than hoostly does. Unlike the other web hosting companies in Nepal, hoostly does a great job of solving its clients' issues for them whereas for the others, you have to resolve the issues on your own.",
      },
    ],
  },
];
var settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  centerMode: true,
  arrows: false,
  slidesPerRow: 1,
};
const testimonial = () => {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useTheme();
  const mainSlider = useRef(null);

  const mainSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
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
    setMainImageIndex(index);
    setActiveIndex(index);
    if (mainSlider && mainSlider.current) {
      mainSlider.current.slickGoTo(index);
    }
  }
  return (
    <section className="lg:py-16 md:py-14 py:8 relative">
      <div className=" text-center">
        <p className="leading-relaxed text-3xl font-bold  text-secondary">
          What They Say About Us
        </p>
        <p className="text-neutral leading-relaxed lg:text-xl  ">
          I have been using Hoostly hosting service for the last 1 year & been
          extremely happy with the support.
        </p>
      </div>
      <div className="bg_shape2 absolute w-[250px] rotate-45 h-[1000px] top-0 right-[10rem] bg-success opacity-20 blur-[6rem] "></div>

      <Slider
        className=""
        ref={mainSlider}
        {...mainSliderSettings}
        initialSlide={mainImageIndex}
      >
        {data.map((testimonialData, index) => (
          <Testimonialcard
            data={testimonialData}
            key={index}
            mainImageIndex={mainImageIndex}
          />
        ))}
      </Slider>
      <div className="relative">
        <Testimonals
          data={data}
          setIndex={changeMainImage}
          mainImageIndex={mainImageIndex}
          activeIndex={activeIndex}
          theme={theme}
        />
      </div>
    </section>
  );
};

export default testimonial;
function Testimonialcard({ data }) {
  let card = data.content[0];
  return (
    <>
      <div className="px-2">
        <div
          className={`grid lg:grid-cols-2 lg:gap-2 lg:px-2 lg:py-[120px] py-[20px] transition-all delay-150 duration-300 ease-in-out `}
        >
          <div className="grid grid-row h-auto" data-aos="fade-down-right">
            <h1 className="text-secondary lg:text-[29px] text-[22px] pt-[40px] font-bold  ">
              {card.heading}
            </h1>
            <p className="text-neutral font-light lg:pt-0 pt-3">
              {card.Description}
            </p>
            <img src={Rating} className="h-[35px] pt-3" />
          </div>
          <div
            className=" lg:grid-col mb-2 lg:mb-4 lg:place-items-end py-4"
            data-aos="fade-down-left"
          >
            <img
              src={Person1}
              alt=""
              className="w-5/6 items-right mx-auto rounded-lg "
            />
          </div>
        </div>
      </div>
    </>
  );
}
function Testimonals({ data, setIndex, mainImageIndex, theme, activeIndex }) {
  return (
    <>
      <div className="lg:grid grid-cols-5 gap-5 hidden py-6">
        {data.map((data, index) => (
          <div
            className={` p-[4px]  rounded-xl ${
              theme === "mytheme" ? "card " : " card_light shadow"
            }   ${activeIndex === index ? "selectedTestomonial" : ""}`}
            key={index}
          >
            <div
              className={` card2 h-[69px] p-[14px] rounded-lg items-center bg-accent text-secondary   cursor-pointer `}
              onClick={() => setIndex(index)}
            >
              {" "}
              <a className="flex items-center  justify-around">
                <img
                  src={data.img}
                  alt=""
                  className="rounded-full   h-[40px] w-[40px] "
                />
                <p className=" font-light text-[15px] ">{data.name}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:hidden block py-5">
        <Slider {...settings}>
          {data.map((data, index) => (
            <div key={index} className="px-2 ">
              <div
                className={` p-[4px] rounded-xl ${
                  theme === "mytheme" ? "card " : " card_light shadow"
                }   ${activeIndex === index ? "selectedTestomonial" : ""}`}
                key={index}
              >
                <div
                  className={` card2  p-[15px] rounded-lg items-center bg-accent text-secondary   cursor-pointer `}
                  onClick={() => setIndex(index)}
                >
                  {" "}
                  <a className="flex items-center  justify-around">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full   h-[40px] w-[40px] "
                    />
                    <p className=" font-light text-[15px] ">{data.name}</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
