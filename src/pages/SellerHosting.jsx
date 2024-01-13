import React from "react";
import { FandQ, BannerBtn, Button3, Posts, Banner3 } from "../component";
import Card from "../component/card/cardres.jsx";
import CardHighlight from "../component/card/cardhighRes.jsx";
import { IoCheckmarkCircle } from "react-icons/io5";
import { BiTransfer } from "react-icons/bi";
import Benefits from "../component/Benefits.jsx";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styles from "../style.js";
import { Background1, WordPressImg } from "../assets";
import { useTheme } from "../Context/ThemeContext.jsx";
import { Helmet } from "react-helmet";
const carddata = [
  {
    head: "Rh-25",
    desc: "Empower your ventures the perfect Reseller hosting kick-off",
    DiscountedPrice: 1999,
    ActualPrice: 3999,
    subHead: "25 cPanel & WHM",
    subdomain: "5",
    time: "yr",
    subHead_sub: "Website",
    storage: "5",
    sql: "5",
    ram: "2",
    core: "1",
    link: "https://client.hoostly.com/index.php?rp=/store/reseller-hosting/rh-25x",
  },
  {
    head: "Rh-50",
    desc: " Unleash your potential everything to thrive online presence",
    DiscountedPrice: 2999,
    ActualPrice: 5999,
    subHead: "50 cPanel & WHM ",
    subdomain: "15",
    ram: "4",
    subHead_sub: "Website",
    time: "yr",
    core: "2",
    storage: "Unlimited",
    sql: "15",
    link: "https://client.hoostly.com/index.php?rp=/store/reseller-hosting/rh-100x",
  },
];
const cardhighlightdata = {
  head: "Rh-35",
  desc: "Empower your ventures the perfect Reseller hosting kick-off",
  DiscountedPrice: 2499,
  ActualPrice: 4999,
  subHead: "35 cPanel & WHM ",
  time: "yr",
  subdomain: "10",
  subHead_sub: "Website",
  ram: "2",
  storage: "10",
  sql: "10",
  core: "2",
  link: "https://client.hoostly.com/index.php?rp=/store/reseller-hosting/rh-50x",
};
const FandQdata = [
  {
    id: 1,
    question: "What is the meaning of reseller hosting?",
    answer:
      "Reseller hosting is a type of web hosting service that lets you buy hosting resources from a hosting provider and resell them to your own customers. A reseller acts as a middleman between the hosting provider and the end users.",
  },
  {
    id: 2,
    question: "What to host on Shared Hosting?",
    answer:
      "The purpose of WordPress Hosting is to provide our customers with the products, services, and support they require to build and maintain their WordPress website. Bluehost provides reasonably priced WordPress hosting backed by professionals who can help you through WordPress's complexities. This hosting plan is excellent for any user seeking to develop a dynamic WordPress website, whether it's choosing a theme to design your website, upgrades to the platform, or making sure you have the most recent and safe version of WordPress for your website.",
  },
  {
    id: 3,
    question: "Why Shared Hosting?",
    answer:
      "WordPress is the most popular platform for building websites and it also enables you to manage all of the information on your website from a single location. Additionally, it features a vast selection of plugins, add-ons, and themes that are simple to install as you develop your website, providing you virtually endless customization options.",
  },
];
const SellerHosting = () => {
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
      <Helmet>
        <title>
          Reseller Hosting - Hoostly | Best Web Hosting in Nepal | Cloud VPS
        </title>
        <meta
          name="description"
          content="Hoostly Best Web Hosting In Nepal provides affordable .com domain &amp; Shared Hosting | WordPress Hosting | VPS Server | Developer Hosting | Reseller Hosting | Python Hosting"
        />
      </Helmet>
      <div className="w-full overflow-hidden relative">
        <div className="bg_shape2 absolute top-[-200px] left-[300px]  w-[1000px] h-[320px] opacity-50 bg-success blur-[9rem]   "></div>
        <div className="bg_shape2 absolute top-[18rem] right-0  -rotate-45 w-[1000px] h-[300px] opacity-50 bg-success blur-[9rem]   "></div>

        <section
          className="lg:mt-[70.5px] mt-[64px]  lg:py-[7rem] relative bg-cover"
          style={{ backgroundImage: `url(${Background1})` }}
        >
          <div className={`lg:px-[120px] px-5 lg:w-4/6`}>
            <div className="flex flex-col justify-between items-left w-full pt-[5rem] lg:pt-[1rem] text-white">
              <h1 className="flex-1 sm:text-[50px] text-[35px] font-bold text-white leading-[50px] lg:leading-[65px] ">
                Reseller Hosting
              </h1>
              <p className="font-light py-3">
                Take your website to the next level with our LiteSpeed WordPress
                Hosting plans and experience our 5x faster loading times than
                competing services. our WP hosting solutions are precisely built
                to maximize speed and performance.
              </p>
              <ul className=" font-light grid lg:grid-cols-3 grid-flow-row gap-3 py-7 ">
                <li className="flex items-center py-2 ">
                  <IoCheckmarkCircle className="text-white text-[20px]" />{" "}
                  <p className="mx-2">Easy to Manage</p>
                </li>
                <li className="flex items-center py-2">
                  {" "}
                  <IoCheckmarkCircle className="text-white text-[20px] " />
                  <p className="mx-2">24/7/365 Support</p>
                </li>
                <li className="flex items-center py-2">
                  {" "}
                  <IoCheckmarkCircle className="text-white text-[20px] " />
                  <p className="mx-2">Free DDOS Protection</p>
                </li>
                <li className="flex items-center py-2">
                  {" "}
                  <IoCheckmarkCircle className="text-white text-[20px] " />
                  <p className="mx-2">cPanel Hosting</p>
                </li>
              </ul>
              <div className="lg:w-1/2 py-5">
                <div className="grid grid-cols-2 gap-12">
                  <Link to="https://client.hoostly.com/index.php?rp=/store/reseller-hosting">
                    <BannerBtn>Start Now</BannerBtn>
                  </Link>
                  <Button3> Compare Plans</Button3>
                </div>
              </div>
              <div className="py-4">
                <strong className="text-white text-[18px]">
                  Starting at Rs.1999/mo
                </strong>
                <p className="font-light">
                  Ideal for small businesses to start with
                </p>
              </div>
              <div className="grid grid-cols-3 py-7">
                <div className="flex font-light text-[14px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 53.355 63.299"
                  >
                    <path
                      d="M24698.35,7627.3H24655a5.006,5.006,0,0,1-5-5V7569a5,5,0,0,1,5-5h43.354a5.007,5.007,0,0,1,5,5v53.3A5.01,5.01,0,0,1,24698.35,7627.3Zm-1.178-7.65a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,24697.172,7619.649Zm-41,0a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,24656.174,7619.649Zm16.7-37.142-.781,1.742a5.364,5.364,0,0,0,1.768.831,8.278,8.278,0,0,0,2.293.322,5.667,5.667,0,0,0,2.355-.428,3.318,3.318,0,0,0,1.408-1.128,2.728,2.728,0,0,0,.465-1.538,2.3,2.3,0,0,0-1.152-2.12,4.83,4.83,0,0,0-1.129-.5c-.453-.135-.9-.247-1.24-.329-.441-.1-.812-.191-1.135-.285a2.427,2.427,0,0,1-.824-.372.738.738,0,0,1-.316-.62.921.921,0,0,1,.186-.577,1.324,1.324,0,0,1,.615-.409,3.189,3.189,0,0,1,1.1-.155,5.076,5.076,0,0,1,1.365.192,5.86,5.86,0,0,1,1.4.589l.707-1.748a5.145,5.145,0,0,0-1.605-.664,7.8,7.8,0,0,0-1.854-.223,5.793,5.793,0,0,0-2.344.421,3.209,3.209,0,0,0-1.395,1.123,2.8,2.8,0,0,0-.465,1.562,2.375,2.375,0,0,0,.322,1.308,2.431,2.431,0,0,0,.83.831,5.358,5.358,0,0,0,1.135.508,11.452,11.452,0,0,0,1.24.334c.436.1.807.191,1.129.286a2.62,2.62,0,0,1,.83.384.779.779,0,0,1,.311.639.838.838,0,0,1-.2.552,1.247,1.247,0,0,1-.619.378,3.567,3.567,0,0,1-1.1.136,5.923,5.923,0,0,1-3.293-1.041Zm-9.088,0-.781,1.742a5.324,5.324,0,0,0,1.766.831,8.3,8.3,0,0,0,2.295.322,5.667,5.667,0,0,0,2.355-.428,3.318,3.318,0,0,0,1.408-1.128,2.742,2.742,0,0,0,.465-1.538,2.433,2.433,0,0,0-.316-1.3,2.521,2.521,0,0,0-.838-.824,4.759,4.759,0,0,0-1.129-.5c-.445-.133-.9-.246-1.238-.329-.449-.1-.82-.193-1.135-.285a2.475,2.475,0,0,1-.824-.372.738.738,0,0,1-.316-.62.911.911,0,0,1,.186-.577,1.3,1.3,0,0,1,.613-.409,3.2,3.2,0,0,1,1.1-.155,4.976,4.976,0,0,1,1.363.192,5.712,5.712,0,0,1,1.4.589l.713-1.748a5.172,5.172,0,0,0-1.607-.664,7.8,7.8,0,0,0-1.854-.223,5.754,5.754,0,0,0-2.344.421,3.232,3.232,0,0,0-1.395,1.123,2.81,2.81,0,0,0-.465,1.562,2.347,2.347,0,0,0,1.154,2.139,5.33,5.33,0,0,0,1.133.508,11.523,11.523,0,0,0,1.24.334c.428.1.8.19,1.135.286a2.625,2.625,0,0,1,.824.384.753.753,0,0,1,.311.639.833.833,0,0,1-.2.552,1.278,1.278,0,0,1-.621.378,3.567,3.567,0,0,1-1.1.136,5.91,5.91,0,0,1-3.291-1.041Zm18.176-7.249h0v9.969h4.533a6.314,6.314,0,0,0,2.863-.62,4.7,4.7,0,0,0,1.936-1.736,5.3,5.3,0,0,0,0-5.263,4.7,4.7,0,0,0-1.936-1.73,6.308,6.308,0,0,0-2.863-.62h-4.533Zm15.215-6.608a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,24697.172,7568.65Zm-41,0a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,24656.174,7568.65Zm30.205,14.688h-2.109v-6.187h2.109a3.786,3.786,0,0,1,1.729.378,2.732,2.732,0,0,1,1.141,1.072,3.528,3.528,0,0,1,0,3.28,2.775,2.775,0,0,1-1.141,1.079A3.786,3.786,0,0,1,24686.379,7583.337Z"
                      transform="translate(-24649.998 -7564)"
                      fill="#fff"
                    ></path>
                  </svg>
                  <p className="mx-1">
                    SSD & NVMe <br /> Storage
                  </p>
                </div>
                <div className="flex font-light text-[14px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 51.791 63.298"
                  >
                    <path
                      d="M3755.244,7060.267,3778.9,7055l23.65,5.265a2.883,2.883,0,0,1,2.245,2.791V7091.8a17.1,17.1,0,0,1-2.043,8.142,17.448,17.448,0,0,1-5.639,6.214L3778.9,7118.3l-18.213-12.143a17.448,17.448,0,0,1-5.639-6.214A17.1,17.1,0,0,1,3753,7091.8v-28.744a2.879,2.879,0,0,1,2.244-2.791Zm26.529,20.629v-14.387l-14.387,20.142h8.633v14.387L3790.4,7080.9Z"
                      transform="translate(-3753 -7055.001)"
                      fill="#fff"
                    ></path>
                  </svg>
                  <p className="mx-1">
                    Built-in <br /> Security Updates
                  </p>
                </div>
                <div className="flex font-light text-[14px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 60.358 47.299"
                  >
                    <path
                      d="M-12949.646,41.3H-13000a5.007,5.007,0,0,1-5-5.007V-1a5,5,0,0,1,5-5h50.357a5.006,5.006,0,0,1,5,5V36.3A5.011,5.011,0,0,1-12949.646,41.3Zm-6.293-11.2h0l3.522,1.919-1.358-6.087a2.526,2.526,0,0,0,2.122-2.481,2.487,2.487,0,0,0,.737-1.779,2.483,2.483,0,0,0-.737-1.776,2.513,2.513,0,0,0-2.507-2.513h-.007a2.5,2.5,0,0,0-1.772-.731,2.5,2.5,0,0,0-1.771.731h-.01a2.51,2.51,0,0,0-2.5,2.51v.01a2.477,2.477,0,0,0-.737,1.769,2.493,2.493,0,0,0,.737,1.772v.007a2.523,2.523,0,0,0,2.125,2.481l-1.357,6.087,3.518-1.919Zm-44.062-2.81v2.223h11.152V27.289Zm0-4.318V25.2h18.921V22.971Zm0-4.318v2.226h18.921V18.653Zm22.906-12.054h0l-1.325,1.629a6.135,6.135,0,0,0,4.272,1.756,4.016,4.016,0,0,0,2.646-.836,2.7,2.7,0,0,0,1.012-2.177,2.607,2.607,0,0,0-.786-2.04,5.076,5.076,0,0,0-2.21-1.054,7.452,7.452,0,0,1-1.818-.6.787.787,0,0,1-.388-.692.845.845,0,0,1,.323-.7,1.309,1.309,0,0,1,.874-.268,4.436,4.436,0,0,1,2.689.986l1.13-1.629a5.274,5.274,0,0,0-1.743-.969,6.2,6.2,0,0,0-2-.346,4.113,4.113,0,0,0-2.549.774,2.59,2.59,0,0,0-1.022,2.19,2.531,2.531,0,0,0,.807,2.089,6.469,6.469,0,0,0,2.549,1.08,5.023,5.023,0,0,1,1.476.532.852.852,0,0,1,.372.721.855.855,0,0,1-.353.712,1.585,1.585,0,0,1-.963.261,4.742,4.742,0,0,1-2.989-1.413Zm-9.116,0h0l-1.328,1.629a6.148,6.148,0,0,0,4.275,1.756,4.013,4.013,0,0,0,2.646-.836,2.68,2.68,0,0,0,1.012-2.177,2.6,2.6,0,0,0-.789-2.04,5.029,5.029,0,0,0-2.207-1.054,7.459,7.459,0,0,1-1.817-.6.782.782,0,0,1-.392-.692.862.862,0,0,1,.323-.7,1.328,1.328,0,0,1,.881-.268,4.449,4.449,0,0,1,2.687.986l1.129-1.629a5.334,5.334,0,0,0-1.743-.969,6.115,6.115,0,0,0-2-.346,4.14,4.14,0,0,0-2.549.774,2.594,2.594,0,0,0-1.024,2.19,2.572,2.572,0,0,0,.809,2.089,6.474,6.474,0,0,0,2.553,1.08,4.857,4.857,0,0,1,1.472.532.842.842,0,0,1,.372.721.84.84,0,0,1-.355.712,1.568,1.568,0,0,1-.96.261,4.786,4.786,0,0,1-2.989-1.413Zm17.618-6.717V9.873h6.488V7.889h-4.263V-.117Zm12.653,24.329a2.539,2.539,0,0,1-2.535-2.536,2.54,2.54,0,0,1,2.535-2.539,2.541,2.541,0,0,1,2.536,2.539A2.539,2.539,0,0,1-12955.938,24.211Z"
                      transform="translate(13005 5.996)"
                      fill="#fff"

                      // fill={theme === "mytheme" ? "#fff" : "#457BFF"}
                    ></path>
                  </svg>
                  <p className="mx-1">
                    Free <br /> SSL Certificate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} `}>
            <section className="lg:py-16 py-7 relative">
              <div className="bg_shape2 absolute w-[1000px] h-[800px] bg-success  left-[8rem] top-0 opacity-20 blur-[9rem] "></div>

              <div className="container mx-auto relative  z-10">
                <div className="flex justify-center">
                  <div className="w-full md:w-3/4 lg:w-2/3">
                    <div className="text-center mb-9">
                      <h2 className="text-3xl font-bold mb-2 text-secondary">
                        Reliable Reseller hosting plans for your sites
                      </h2>
                      <p className=" leading-relaxed text-secondary">
                        No matter your hosting requirements, our platform will
                        fit your needs
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="lg:grid hidden  grid-cols-3 w-[80%] mx-auto  lg:gap-0 gap-4 "
                  data-aos="fade-up"
                >
                  <Card data={carddata[0]} />
                  <CardHighlight data={cardhighlightdata} />
                  <Card data={carddata[1]} />
                </div>
                <Slider {...settings} className=" lg:hidden ">
                  <Card data={carddata[0]} />
                  <CardHighlight data={cardhighlightdata} />
                  <Card data={carddata[1]} />
                </Slider>
              </div>
            </section>
          </div>
        </div>
        <div className="relative">
          <div className="bg_shape2 absolute w-[900px] h-[700px] bg-success  left-0 top-0 opacity-20 blur-[90px] "></div>
          <div className="bg_shape2 absolute w-[900px] h-[400px] bg-success  right-0 bottom-10 opacity-20 blur-[90px] "></div>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth} `}>
              <Benefits />
            </div>
          </div>
        </div>

        <div
          className={`${styles.paddingX} ${styles.flexCenter} lg:py-12 py-5 `}
          style={
            theme === "light"
              ? {
                  background:
                    "linear-gradient(to right, #5a28fa 0, #457bff 100%)",
                }
              : { background: "#000" }
          }
        >
          <div className={`${styles.boxWidth} `}>
            <div className="pr-5">
              <h1 className="leading-relaxed text-2xl font-bold mb-3 text-white">
                VDS Hosting Use Cases, Purpose, And Benefit
              </h1>
              <ul className="list-disc font-light text-[15px] text-white">
                <li className="py-2">
                  There are many business types that need a server but don’t
                  need the expense of a dedicated server. However, they still
                  want the flexibility and efficiency that comes with having
                  one. A virtual server (VDS) provides efficiency at an
                  affordable price for any business that is in the middle or
                  going to higher stages of its life cycle.
                </li>

                <li className="py-2">
                  Hoostly provides root access to VDS servers, enabling
                  customized services and software installation. This allows
                  businesses to select only the services that are needed. For
                  example, if you know you are not going to use email
                  functionality on your server, you can shut down or even
                  uninstall those services or webmail applications.
                </li>
                <li className="py-2">
                  A Virtual Dedicated Server Hosting plan from Hoostly gives you
                  the features and functionality of a dedicated server but at a
                  lower cost. Your VDS account is functionally equivalent to a
                  dedicated server, as it offers you your very own resources and
                  processes. You are not impacted by the actions of other users
                  on the server.
                </li>
                <li className="py-2">
                  All of our VDS plans come with a free user interface of
                  Cyberpanel and Hestia Control Panel is accessed from a
                  browser, so you don't need to install any additional software.
                  You can access it from any device with an Internet connection
                  − that includes your smartphone and tablet. This makes it very
                  convenient for you to manage your websites.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} `}>
            <div className="grid sm:grid-cols-2 lg:py-12 py-6 ">
              <div className=" lg:pr-[9rem]">
                <h1 className="text-secondary text-[25px] pt-[50px] font-bold">
                  Reseller Hosting
                </h1>
                <p className="text-secondary font-light pt-10">
                  Reseller Hosting allows individuals and businesses to resell
                  hosting services to clients. By purchasing larger hosting
                  plans from providers, resellers can split resources into
                  smaller packages, creating their own hosting brand. This is
                  ideal for those entering the hosting industry without server
                  management worries.
                </p>
              </div>
              <div className="relative">
                <div className="bg_shape2 absolute w-[500px] h-[400px] bg-success  left-0 top-0 opacity-20 blur-[90px] "></div>

                <img
                  src="https://hoostly.com/wp-content/uploads/elementor/thumbs/Pngtree%E2%80%94time-management-concept-business-people_7537099-qa3ts3ktr25tuqwas6s7580t6leuxyx0c5ejo8lyys.png"
                  className="w-1/2 mx-auto relative "
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:py-12 py-6">
              <div className="relative">
                <div className="bg_shape2 absolute w-[500px] h-[400px] bg-success  left-0 top-0 opacity-20 blur-[90px] "></div>
                <img
                  src="https://hoostly.com/wp-content/uploads/elementor/thumbs/banner_image-41-q9v4x643jv3tz72ctblxmn58eaxm4b7uvean7kiwvc.png"
                  className="w-1/2 mx-auto relative"
                />
              </div>
              <div>
                <h1 className="text-secondary text-[25px] pt-[50px] font-bold">
                  Fast, Managed Server
                </h1>
                <p className="text-secondary font-light pt-10">
                  Hoostly will handle the management of your systems, giving you
                  the freedom to concentrate on your business. Experience
                  performance that goes beyond your expectations, all at prices
                  you’ll appreciate. Our VPS hosting plans provide ultra-fast
                  Nvme SSD storage and unlimited bandwidth, ensuring optimal
                  speed and data access for your website without any
                  restrictions on bandwidth usage.
                  <br />{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter} relative`}>
          <div className="bg_shape2 absolute w-[1000px] h-[700px] top-[0rem] bg-success  left-0 opacity-20 blur-[9rem] "></div>

          <div className="bg_shape2 absolute w-[700px] h-[500px] top-[20rem]  bg-success right-[1rem] opacity-20 blur-[9rem] "></div>
          <div className={`${styles.boxWidth} relative`}>
            <FandQ data={FandQdata} />
          </div>
        </div>
        <Banner3 />
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} `}>
            <Posts />
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerHosting;
