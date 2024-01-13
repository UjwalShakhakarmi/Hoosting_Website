import React from "react";
import {
  Hoostly,
  Facebook,
  Insta,
  Linkedin,
  Twitter,
  Esewa,
  Paypal,
  Stripe,
  Khalti,
  Visa,
} from "../assets";
import { useTheme } from "../Context/ThemeContext";
import { Link } from "react-router-dom";
import { LogoDark } from "../assets";
import { socialMedia } from "../constants/index.jsx";

const data = [
  {
    head: "Hoosting",
    subhead: [
      {
        head: "Shared Hosting ",
        link: "/shared-hosting",
      },
      {
        head: "Cloud Hosting ",
        link: "/cloud-hosting",
      },
      {
        head: "Wordpress Hosting ",
        link: "/wordPress-hosting",
      },
      {
        head: "Managed eCommerce ",
        link: "/ecommerce-hosting",
      },
    ],
  },
  {
    head: "Domain",
    subhead: [
      {
        head: "My Domains",
        link: "https://client.hoostly.com/index.php?rp=/login",
      },
      {
        head: "Register New Domain",
        link: "https://client.hoostly.com/register.php",
      },
      {
        head: "Domain Registration ",
        link: "https://client.hoostly.com/cart.php?a=add&domain=register",
      },
      {
        head: "Transfer Domain to us",
        link: "https://client.hoostly.com/",
      },
    ],
  },
  {
    head: "Information",
    subhead: [
      {
        head: "Affiliate Program",
        link: "",
      },
      {
        head: "Data Center & Servers",
        link: "",
      },
      {
        head: "Payment Methods",
        link: "",
      },
      {
        head: "Hoostly Reviews",
        link: "",
      },
      {
        head: "Partners",
        link: "",
      },
    ],
  },
];
const content = [
  {
    head: "About Us",
    link: "https://hoostly.com/about-us/",
  },
  {
    head: "Cancellation & Refunds Policy",
    link: "/",
  },
  {
    head: "Terms and Conditions",
    link: "/",
  },
  {
    head: "Privacy Policy",
    link: "/",
  },
  {
    head: "Legal",
    link: "/",
  },
];
const paymentPartner = [
  {
    head: "Esewa",
    img: Esewa,
  },
  {
    head: "Khalti",
    img: Khalti,
  },
  {
    head: "CardVisa",
    img: Visa,
  },
  {
    head: "Paypal",
    img: Paypal,
  },
  {
    head: "Stripe",
    img: Stripe,
  },
];
const footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="lg:py-12 py-8 sm:px-[4rem] items-center">
      <FooterContent data={data} />

      <div className="lg:flex grid lg:justify-between mt-9  py-6 ">
        <div className="  mb-5 md:mb-0 lg:w-1/2">
          <div className="logo ">
            <Link to="/">
              <div className="lg:block  flex justify-center ">
                <img
                  className="w-[137px] h-[35px] ml-[-15px] "
                  src={`${
                    theme === "light"
                      ? "https://hoostly.com/wp-content/uploads/2023/03/Hoostly.svg"
                      : LogoDark
                  }`}
                  alt="hoostly"
                />
              </div>
            </Link>
          </div>
          <p className="mt-3 text-[13px] text-center w-5/6  mx-auto lg:mx-0 lg:text-left text-secondary">
            Hoostly started in 2020 with a simple goal: to offer the best web
            hosting in Nepal. Our focus is on delivering exceptional speed,
            top-notch security, and 24/7 support. We're Nepal's #1 Cloud Service
            Provider.
          </p>
        </div>
        {/* <div className="w-full  lg:mb-3 md:mb-0 lg:mt-9">
          <div className="lg:text-right text-center text-[20px] text-secondary">
            <p className="text-[13px]">Hoostly info Tech</p>
            <p className="text-[13px]">M: +977-9822 799 880</p>
            <p className="text-[13px]">E: contact@hoostly.com</p>
          </div>
          <ul className="list-none sm:flex md:justify-center lg:justify-end flex lg:w-full  w-1/2 mx-auto py-2">
            {socialMedia.map((socialMedia, index) => (
              <li key={socialMedia.id}>
                <a href={`${socialMedia.link}`}>
                  <img src={socialMedia.icon} className="mx-1 h-[40px] " />
                </a>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
      <div className="lg:flex py-3 items-center">
        <div className="flex-1 text-center">
          <ul className="lg:flex gap-5 text-[13px] font-normal text-secondary">
            {content.map((links, index) => (
              <Link to={links.link} key={index}>
                <li>{links.head}</li>
              </Link>
            ))}
          </ul>
        </div>
        <ul className="flex lg:gap-4 gap-2 justify-center mt-4">
          {paymentPartner.map((data, index) => (
            <li key={index} className="bg-blue-100 rounded-lg p-1">
              <img
                src={data.img}
                alt={data.head}
                className="lg:h-[25px] h-[20px]"
              />
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="mt-3 text-[13px] lg:text-right text-center ">
        © 2019-2023 Hoostly All rights reserved.
      </div>
    </footer>
  );
};

export default footer;
function FooterContent({ data }) {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-5">
        <div className=" font-normal lg:text-left text-center">
          <h1 className="text-[19px] text-info">Company</h1>
          <div className=" lg:mt-12 mt-4 text-[20px] text-secondary">
            <p className="text-[13px]">Hoostly info Tech</p>
            <p className="text-[13px]">M: +977-9822 799 880</p>
            <p className="text-[13px]">E: contact@hoostly.com</p>
          </div>
          <ul className="list-none sm:flex  flex lg:w-full  w-1/2 mx-auto py-2">
            {socialMedia.map((socialMedia, index) => (
              <li key={socialMedia.id}>
                <a href={`${socialMedia.link}`}>
                  <img src={socialMedia.icon} className="mx-1 h-[40px] " />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {data.map((data, index) => (
          <div key={index}>
            <h1 className="text-[19px] text-info font-normal lg:text-left text-center">
              {data.head}
            </h1>
            <div className="py-3">
              <ul className="text-secondary text-[14px] lg:text-left text-center font-normal">
                {data.subhead &&
                  data.subhead.map((subhead, index) => (
                    <Link to={subhead.link} key={index}>
                      <li className="py-2">{subhead.head} </li>
                    </Link>
                  ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
