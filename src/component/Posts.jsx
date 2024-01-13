import {
  BackPattern,
  map,
  Rating,
  Person1,
  BLOG1,
  BLOG2,
  BLOG3,
  BLOG4,
} from "../assets";
import React from "react";
import Slider from "react-slick";
import { Button } from "../component";
import { Link } from "react-router-dom";

const Posts = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  const data = [
    {
      img: BLOG1,
      head: "What are the 5 types of hosting? Detailed explanation",
      link: "https://blog.hoostly.net/",
      date: "20 Jan, 2023",
      name: "ujwal Shakha",
    },
    {
      img: BLOG2,
      head: "The Power of “.COM” No 1 in the Digital World",
      link: "https://blog.hoostly.net/",
      name: "Surya Basnet",
      date: "20 Feb, 2023",
    },
    {
      img: BLOG3,
      head: "WordPress Development: The Road to Scalable and Secure Website in 2023",
      link: "https://blog.hoostly.net/",
      date: "10 Jan, 2022",
      name: "Hari Basnet",
    },
    {
      img: BLOG4,
      head: "Choosing the Right Web Development Company: A Guide for Success in 2023",
      link: "https://blog.hoostly.net/",
      date: "05 Jan, 2023",
      name: "Shyam Basnet",
    },
  ];
  return (
    <div className="lg:py-16 pb-9 relative">
      <div className="flex justify-between py-3 gap-3">
        <h1 className="lg:text-[25px] text-secondary">
          WordPress Development: The Road to Scalable and Secure Website in 2023
        </h1>
        <div className="w-1/2 lg:w-auto ">
          <Button>
            <a className="flex" href="https://blog.hoostly.net/">
              View <span className="hidden lg:block">Post</span>
            </a>
          </Button>
        </div>
      </div>
      <div
        className="lg:grid md:grid hidden lg:grid-cols-4 md:grid-cols-2 gap-6"
        data-aos="fade-up"
      >
        {data.map((data, index) => (
          <FormElement data={data} key={index} />
        ))}
      </div>
      <Slider {...settings} className=" lg:hidden md:hidden ">
        {data.map((data, index) => (
          <FormElement data={data} key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default Posts;
function FormElement({ data }) {
  return (
    <div className="px-2">
      <div className="border rounded-xl">
        <div className="rounded-xl overflow-hidden">
          <a href="https://blog.hoostly.net/">
            <img
              src={data.img}
              alt=""
              className="rounded-t-xl hover:scale-125 transition-all hover:rotate-2 duration-500"
            />
          </a>
        </div>
        <div className="text-left px-4">
          <div className="flex items-center lg:py-2 py-4">
            <img
              src={Person1}
              alt=""
              className="rounded-full border  h-[35px] w-[35px] "
            />
            <p className="text-[14px] font-light mx-2 text-secondary">
              {data.name}
            </p>
          </div>
          <h1 className="py-1 text-left text-secondary">{data.head}</h1>
        </div>
      </div>
    </div>
  );
}
