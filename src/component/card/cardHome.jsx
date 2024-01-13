import React from "react";
import { FaCheck } from "react-icons/fa";
import Slider from "react-slick";
import { MdNavigateNext } from "react-icons/md";
import { Button } from "..";
import { Link } from "react-router-dom";

const data = [
  {
    head: "Shared Hosting",
    desc: "Empower your ventures the perfect VPS hosting kick-off",
    DiscountedPrice: 1499,
    plan: "yr",
    ActualPrice: 3999,
    subhead: "1",
    subHead: "Single Website",
    link: "/shared-hosting",
  },
  {
    head: "Resller Hosting",
    desc: " Unleash your potential everything to thrive online presence",
    DiscountedPrice: 1999,
    plan: "yr",
    ActualPrice: 3999,
    subhead: "1",

    subHead: "Single Website",
    link: "/reseller-hosting",
  },
  {
    head: "VPS Hosting",
    desc: "Empower your ventures the perfect VPS hosting kick-off",
    DiscountedPrice: 1999,
    subhead: "1",
    plan: "mon",
    ActualPrice: 249,
    subHead: "Single Website",
    link: "/VPS-hosting",
  },
];

const Card = () => {
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
      {" "}
      <section className="lg:py-16 py-7 relative">
        <div className="bg_shape2 absolute w-[1000px] h-[800px] bg-success  left-[8rem] top-0 opacity-20 blur-[9rem] "></div>

        <div className="container mx-auto relative  z-10">
          <div className="flex justify-center">
            <div className="w-full md:w-3/4 lg:w-2/3">
              <div className="text-center mb-9">
                <h2 className="text-3xl font-bold mb-2 text-secondary">
                  Endless Hosting Choices. One Platform
                </h2>
                <p className=" leading-relaxed text-secondary">
                  No matter your hosting requirements, our platform will fit
                  your needs
                </p>
              </div>
            </div>
          </div>
          <div
            className="lg:grid hidden  grid-cols-4  lg:gap-0 gap-4 "
            data-aos="fade-up"
          >
            <CardDetails data={data[0]} />
            <CardDetailsW />
            <CardDetails data={data[1]} />
            <CardDetails data={data[2]} />
          </div>
          <Slider {...settings} className=" lg:hidden ">
            <CardDetailsW />
            {data.map((data, index) => (
              <CardDetails data={data} key={index} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Card;
function CardDetails({ data }) {
  return (
    <div className="md:mb-8 mx-3 md:mx-5 flex flex-col border shadow-sm bg-accent  rounded-[24px] w-auto  lg:hover:scale-[1.03]  transition-all duration-500 ease-in-out">
      <span className="px-5 md:px-5 pt-6 text-start font-[700] text-[18px] text-secondary">
        {data.head}
      </span>
      <div className="px-4 md:px-7  flex flex-col items-start w-full pt-3 h-full rounded-[24px]">
        <div className="hidden md:block font-light text-secondary text-[13px]">
          {data.desc}
        </div>
        <div className="flex flex-col items-start mt-3">
          <p className="text-5xl font-bold gap-3 text-info">
            <span className="text-lg text-info">Rs.</span>
            {data.DiscountedPrice}
            <span className="text-lg font-[300] __variable_6d1a03">
              {data.plan}
            </span>
          </p>
          <div className="flex items-center">
            <p className="mt-2 mb-2 text-gray-500 text-sm w-fit font-[500] line-through">
              Rs.{data.ActualPrice}{" "}
            </p>
            <span className="mx-2 p-1 rounded-lg text-[10px] text-black bg-[#FFD891]">
              Save 50%
            </span>
          </div>

          <p className="text-xs mb-2 pb-2 font-normal text-gray-500">
            Register and Renew at same price.
          </p>
        </div>
        <div className="w-full">
          <Link to={data.link}>
            <Button>Add to cart</Button>
          </Link>
        </div>
        <div className="w-full mt-4 flex flex-col mb-7">
          <div className="font-[300] __variable_6d1a03">
            <ul className="space-y-2 mt-4">
              <li className="flex items-center gap-3">
                <FaCheck className="text-info" />

                <p className="text-[15px]  text-secondary">
                  <span className="font-semibold text-info">
                    {data.subhead}
                  </span>{" "}
                  Website
                </p>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-info" />
                <p className="text-[15px]  text-secondary">
                  <span className="font-semibold text-info">Unlimited</span>{" "}
                  nvme-SSD Storage
                </p>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-info" />
                <p className="text-[15px]  text-secondary">
                  <span className="font-semibold text-info">5</span> Email
                  Accounts
                </p>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-info" />
                <p className="text-[15px]  text-secondary">
                  <span className="font-semibold text-info">5 MySQL</span>{" "}
                  Databases
                </p>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-info" />
                <p className="text-[15px]  text-secondary">
                  <span className="font-semibold text-info">Unlimited</span>{" "}
                  Bandwidth
                </p>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-info" />
                <p className="text-[15px]  text-secondary">
                  <span className="font-semibold text-info">5</span> SubDomain
                </p>
              </li>

              <li className="flex items-center gap-3">
                <FaCheck className="text-info" />
                <p className="text-[15px]  text-secondary">
                  <span className="font-semibold text-info">1 Core</span> CPU
                  <span className="font-semibold text-info mx-1">
                    2 GB{" "}
                  </span>{" "}
                  RAM
                </p>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-info" />
                <p className="text-[15px]  text-secondary">
                  <span className="font-semibold text-info">Free</span> SSL &
                  Immunify
                </p>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-info" />
                <p className="text-[15px]  text-secondary">
                  <span className="font-semibold text-info">WhatsApp</span>{" "}
                  Support
                </p>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-info" />
                <p className="text-[15px]  text-secondary">
                  <span className="font-semibold text-info">7 Days</span> Trail
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardDetailsW() {
  return (
    <div className="md:mb-8 mx-3 md:mx-5 flex flex-col   rounded-[24px] w-auto lg:hover:scale-[1.03] transition-all duration-500 ease-in-out">
      <div
        className="text-center rounded-[24px]"
        style={{
          background: "linear-gradient(to right,#5a28fa 0,#457bff 100%)",
        }}
      >
        <div className="pt-3 pb-1">
          <span className="text-center text-white">Most Popular</span>
        </div>

        <div className="px-4 md:px-7 m-1 bg-accent  flex flex-col items-start  pt-3  rounded-[24px]">
          <div className="text-start ">
            <span className="  pt-6 text-start font-[700] text-[18px] text-secondary">
              WordPress Hosting
            </span>
          </div>
          <div className="font-[300] text-start text-secondary text-[13px]">
            Empower Your Business with our super fast Cloud Hosting.
          </div>
          <div className="flex flex-col items-start mt-3">
            <p className="text-5xl font-bold gap-3 text-info">
              <span className="text-lg text-info">Rs.</span>1999
              <span className="text-lg font-[300] __variable_6d1a03">yr</span>
            </p>
            <div className="flex items-center">
              <p className="mt-2 mb-2 text-gray-500 text-sm w-fit font-[500] line-through">
                रू.299{" "}
              </p>
              <span className="mx-2 p-1 rounded-lg text-[10px] text-black bg-[#FFD891]">
                Save 50%
              </span>
            </div>
            <p className="text-xs mb-2 pb-2 font-normal text-gray-500">
              Register and Renew at same price.
            </p>
          </div>
          <div className="w-full">
            <Link to="/wordPress-hosting">
              <Button>Add to cart</Button>
            </Link>
          </div>
          <div className="w-full mt-4 flex flex-col mb-7">
            <div className="font-[300] __variable_6d1a03">
              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-info" />

                  <p className="text-[15px]  text-secondary">
                    <span className="font-semibold text-info">WordPress</span>{" "}
                    Website
                  </p>
                </li>
                <li className="flex  gap-3">
                  <FaCheck className="text-info" />
                  <p className="text-[15px]  text-secondary text-left">
                    <span className="font-semibold text-info ">Unlimited</span>{" "}
                    nvme-SSD Storage
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-info" />
                  <p className="text-[15px]  text-secondary">
                    <span className="font-semibold text-info">5</span> Email
                    Accounts
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-info" />
                  <p className="text-[15px]  text-secondary">
                    <span className="font-semibold text-info">5 MySQL</span>{" "}
                    Databases
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-info" />
                  <p className="text-[15px]  text-secondary">
                    <span className="font-semibold text-info ">Unlimited</span>{" "}
                    Bandwidth
                  </p>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-info" />
                  <p className="text-[15px]  text-secondary">
                    <span className="font-semibold text-info">1 Core</span> CPU
                    <span className="font-semibold text-info mx-1">
                      2 GB{" "}
                    </span>{" "}
                    RAM
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-info" />
                  <p className="text-[15px]  text-secondary">
                    <span className="font-semibold text-info">Free</span> SSL &
                    Immunify
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-info" />
                  <p className="text-[15px]  text-secondary">
                    <span className="font-semibold text-info">5</span> SubDomain
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-info" />
                  <p className="text-[15px]  text-secondary">
                    <span className="font-semibold text-info">WhatsApp</span>{" "}
                    Support
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-info" />
                  <p className="text-[15px]  text-secondary">
                    <span className="font-semibold text-info">7 Days</span>{" "}
                    Trail
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
