import React from "react";
import {
  FandQ,
  Card,
  BannerBtn,
  Button3,
  Posts,
  Banner3,
  Banner,
} from "../component";
import { IoCheckmarkCircle } from "react-icons/io5";
import { BiTransfer } from "react-icons/bi";
import Benefits from "../component/Benefits.jsx";
import styles from "../style.js";
import { Background1, WordPressImg } from "../assets";
import { useTheme } from "../Context/ThemeContext.jsx";
import { Helmet } from "react-helmet";
const FandQdata = [
  {
    id: 1,
    question: "What is the Hoostly affiliate program?",
    answer:
      "Our Affiliate Program rewards you when you recommend our services to your friends and peers. You simply need to share your affiliate link or advertise our service on your website or youtube channel and social networks.",
  },
  {
    id: 2,
    question: "What is the commission structure?",
    answer:
      "The purpose of WordPress Hosting is to provide our customers with the products, services, and support they require to build and maintain their WordPress website. Bluehost provides reasonably priced WordPress hosting backed by professionals who can help you through WordPress's complexities. This hosting plan is excellent for any user seeking to develop a dynamic WordPress website, whether it's choosing a theme to design your website, upgrades to the platform, or making sure you have the most recent and safe version of WordPress for your website.",
  },
  {
    id: 3,
    question: "Will I get paid for hosting renewals or upgrades?",
    answer:
      "Hoostly Affiliate Program pays for the initial purchase of a new user; we do not pay commission for hosting renewals or upgrades.",
  },
];
const Affiliate = () => {
  const { theme } = useTheme();
  return (
    <>
      <Helmet>
        <title>Affiliate</title>
        <meta
          name="description"
          content="Hoostly Best Web Hosting In Nepal provides affordable .com domain &amp; Shared Hosting | WordPress Hosting | VPS Server | Developer Hosting | Reseller Hosting | Python Hosting| Ecommerce Hosting"
        ></meta>
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
                Hoostly Affiliate Program
              </h1>
              <p className="font-light py-3">
                Earn at least 60% from every sale. Promote a trusted service
                loved by millions. Join an affiliate program that values your
                partnership. Get sales commission not only for yearly plans as
                our competitors do! but monthly sales as well.
              </p>
              <ul className=" font-light grid lg:grid-cols-3 grid-flow-row gap-3 py-7 ">
                <li className="flex items-center py-2 ">
                  <IoCheckmarkCircle className="text-white text-[20px]" />{" "}
                  <p className="mx-2">Long cookie duration.</p>
                </li>
                <li className="flex items-center py-2">
                  {" "}
                  <IoCheckmarkCircle className="text-white text-[20px] " />
                  <p className="mx-2"> Monthly-Yearly Plans</p>
                </li>
                <li className="flex items-center py-2">
                  {" "}
                  <IoCheckmarkCircle className="text-white text-[20px] " />
                  <p className="mx-2">Trusted 100%</p>
                </li>
                <li className="flex items-center py-2">
                  {" "}
                  <IoCheckmarkCircle className="text-white text-[20px] " />
                  <p className="mx-2"> High Conversion Rate</p>
                </li>
              </ul>

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
                  <p className="mx-1">Grow Partnership</p>
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
                    Earn More By <br /> Growing Network
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
                    Upto 60% On Each <br /> Sales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative">
          <div className="bg_shape2 absolute w-[900px] h-[700px] bg-success  left-0 top-0 opacity-20 blur-[90px] "></div>
          <div className="bg_shape2 absolute w-[900px] h-[400px] bg-success  right-0 bottom-10 opacity-20 blur-[90px] "></div>
          <div className={`${styles.paddingX} ${styles.flexCenter} relative`}>
            <div className={`${styles.boxWidth} `}>
              <Benefits />
            </div>
          </div>
        </div>
        <Banner3 />

        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} `}>
            <div className="grid sm:grid-cols-2 lg:py-12 py-6 ">
              <div className=" lg:pr-[9rem]">
                <h1 className="text-secondary text-[25px] pt-[50px] font-bold">
                  High Conversion Rate = More Money!
                </h1>
                <p className="text-secondary font-light pt-10">
                  Our website and plans generate one of the highest conversion
                  rates in the industry. Our high conversion rates mean that the
                  people who you send here are more likely to buy our products.
                  Of course we can not prove that either, but if you dont trust
                  us, why would you want to refer people here?
                  <br />{" "}
                </p>
              </div>
              <div className="relative">
                <div className="bg_shape2 absolute w-[500px] h-[400px] bg-success  left-0 top-0 opacity-20 blur-[90px] "></div>

                <img src={WordPressImg} className="w-1/2 mx-auto relative " />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:py-12 py-6">
              <div className="relative">
                <div className="bg_shape2 absolute w-[500px] h-[400px] bg-success  left-0 top-0 opacity-20 blur-[90px] "></div>
                <img src={WordPressImg} className="w-1/2 mx-auto relative" />
              </div>
              <div>
                <h1 className="text-secondary text-[25px] pt-[50px] font-bold">
                  Earn up to 15% commission!
                </h1>
                <p className="text-secondary font-light pt-10">
                  Not only can you join our team and help spread the word about
                  your favorite products, you can get rewarded for your efforts.
                  Our system tracks referrals and pays top commissions for every
                  client you send our way.
                  <br />{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} `}>
            <div className="">
              <div className="grid grid-cols-2 gap-5 py-14">
                <div className="pr-5 ">
                  <h1 className="leading-relaxed text-2xl font-bold mb-3 text-secondary">
                    The Power of Hoostly Affiliate Program
                  </h1>
                  <ul className="list-disc font-light text-[15px] text-secondary">
                    <li className="py-2">
                      Affiliate marketing is a performance-driven channel that
                      enables a rich ecosystem of partnerships to reach,
                      influence, and convert web hosting and domain shoppers
                      worldwide at every part of their purchase journey, both
                      online and offline.
                    </li>

                    <li className="py-2">
                      Hoostly is the place where partnerships and technology
                      converge to create valuable experiences that result in
                      scalable, profitable growth.
                    </li>
                    <li className="py-2">
                      Don’t just take our word for it. Check out our Affiliate
                      Client area to see why most of the brands and users choose
                      to work with us compared to our nearest competitor.
                    </li>
                    <li className="py-2">
                      Grow your brand with Hoostly, access exclusive
                      opportunities, and earn a commission through our referral
                      program. Become a Hoostly Affiliate.
                    </li>
                  </ul>
                </div>
                <div className="pl-6">
                  <h1 className="leading-relaxed text-2xl font-bold mb-3 text-secondary">
                    Easy Sell Hosting With Passive Income
                  </h1>
                  <ul className="list-disc font-light text-[15px] text-secondary">
                    <li className="py-2">
                      We offer the industry-best affiliate commission among all
                      web hosting programs. For more info about rules and
                      commission structure check our affiliate agreement.
                    </li>
                    <li className="py-2">
                      Suppose you have a well-known website, blog, channel, or
                      social media account. Imagine having a unique link to our
                      website that pays you a commission every time someone
                      purchases something through Hoostly. That's how the
                      Affiliate Program works!
                    </li>
                    <li className="py-2">
                      You will be rewarded for referring clients to our website.
                      No costs and a simple set-up mean no risk to you when
                      joining our Hoostly affiliate program. Adding value to
                      your blog or website or your video while bringing in
                      additional cash is easy for us.
                    </li>
                    <li className="py-2">
                      You'll never have to worry about customer service or
                      satisfaction with our affiliate program. Your only job is
                      to link us with potential customers.
                    </li>
                  </ul>
                </div>
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

        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} `}>
            <Posts />
          </div>
        </div>
        <Banner />
      </div>
    </>
  );
};

export default Affiliate;
