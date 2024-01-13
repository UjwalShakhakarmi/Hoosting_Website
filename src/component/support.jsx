import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
const data = [
  {
    id: 1,
    name: "Performance",

    content: [
      {
        heading: "SSD & NVMe Hosting",
        Description:
          "SSD disks offer maximum speed and reliability than traditional disks while accommodating modern websites’ demands.",
      },
      {
        heading: "Built-in Cache",
        Description:
          "Our built-in cache mechanism includes Varnish, Memcached, and Redis that enhance the speed of your websites.",
      },
      {
        heading: "Optimized Stack",
        Description:
          "Our stack includes Apache and NGINX as web servers, PHP-FPM and MySQL/MariaDB as databases for better performance.",
      },
      {
        heading: "PHP Versions",
        Description:
          "We support PHP 5.6.x and the latest versions of PHP 8.x so you can test compatibility and switch versions accordingly.",
      },
      {
        heading: "99.99% Uptime",
        Description:
          "True hosting with no single point of failure. Our hosting dynamically move, balance and tune the clients instances to guarantee an extraordinary uptime.",
      },
      {
        heading: "Ultra Optimized",
        Description:
          "Our servers are powered by ultra-optimized 14th generation dell servers. configured to offer maximum redundancy in terms of network, power, and hard drive.",
      },
    ],
  },
  {
    id: 2,
    name: "Security",

    content: [
      {
        heading: "Dedicated Firewalls",
        Description:
          "We regularly perform firmware upgrades and patches so your websites remain secure from potential threats.",
      },
      {
        heading: "SSL Certificates",
        Description:
          "SSL certificate gains visitors’ trust and ensures that their data is transmitted encrypted. Deploy it in just a click for free.",
      },
      {
        heading: "Login Security",
        Description:
          "We provide two-factor authentication, detect the suspicious login attempts, and send notifications to keep your account and server secure.",
      },
      {
        heading: "IP Whitelisting",
        Description:
          "You can create a list of whitelisted IPs to block or allow IP addresses for SSH/SFTP access to your account or database.",
      },
      {
        heading: "BitNinja Security",
        Description:
          "We Secure your online presence by protecting your website reputation and visitors against cyberthreats, we scan your website for malware and other vulnerabilities.",
      },
      {
        heading: "Database Security",
        Description:
          "Our built-in database security system prevents unauthorized access to your data and protects it from vulnerabilities.",
      },
    ],
  },
  {
    id: 3,
    name: "Flexibility",

    content: [
      {
        heading: "Multiple OS Choices",
        Description:
          "Our offer includes a wide choice of Linux and Windows OS and the possibility to install your own ISO.",
      },
      {
        heading: "Multiple Language Support",
        Description:
          "You have a choice of different programming languages: PHP 5-8, Perl, Python. You use the technology you prefer.",
      },
      {
        heading: "Vertical Scaling",
        Description:
          "Scale up your server resources in just a click when required so your website remains up and running 24/7.",
      },
      {
        heading: "No Contract",
        Description:
          "We never restrict our customers to sign in any contract or to pay a fixed amount for the hosting resources they don’t use.",
      },
      {
        heading: "Multiple Locations",
        Description:
          "Hoostly operates out of multiple data center locations allowing for more localized hosting resulting in better speed for your users.",
      },
      {
        heading: "Unlimited Websites",
        Description:
          "You can host as many websites as you need, registering or using an equal number of domain names. This is extremely useful for your businesses.",
      },
    ],
  },
  {
    id: 4,
    name: "WorkFlow",

    content: [
      {
        heading: "Custom setups",
        Description:
          "Your online digital business is instantly setup with a free installation process with help of our expert support team, choose the script and leave the rest to us.",
      },
      {
        heading: "SSH, SFTP Access",
        Description:
          "SSH/SFTP offers a high level of security and allows you to access your server/website to perform operational tasks.",
      },
      {
        heading: "24/7 Monitoring",
        Description:
          "Hoostly Monitoring is a free feature that gives you unprecedented insight into your infrastructure. so you get more time to focus on growing your business.",
      },
      {
        heading: "Team Collaboration",
        Description:
          "Our built-in team collaboration feature helps you share limited to full access to your server or application among team members for better productivity.",
      },
      {
        heading: "High Availability",
        Description:
          "We have deployed Floating IPs to enable our customers to build high availability setups and assign hosting services to IP addresses in a flexible way.",
      },
      {
        heading: "User Roles",
        Description:
          "Assign your team members specific roles so they can access your server/website regardless of the geographical locations.",
      },
    ],
  },
  {
    id: 5,
    name: " Support",

    content: [
      {
        heading: "Expert Support",
        Description:
          "Our team of experts is available 24/7; You just have to type your query and the live chat support team would love to serve you.",
      },
      {
        heading: "Active Community",
        Description:
          "Our active community comprises of customers and experts who constantly share their knowledge and skills with the Hoostly community.",
      },
      {
        heading: "Knowledge base",
        Description:
          "We’ve written an extensive series of knowledge-base guides that you can refer to get help related to our platform.",
      },
      {
        heading: "Ticketing System",
        Description:
          "You can always open a ticket to keep track of your specific query; our support team will respond to it accordingly.",
      },
      {
        heading: "Support Add-ons",
        Description:
          "Besides Standard support, you can opt for an Advanced or Premium support add-on where our Senior Support Engineers work as an extension of your in-house team.",
      },
      {
        heading: "Troubleshooting",
        Description:
          "We’ve integrated server and website monitoring tools for troubleshooting. You can also contact us and our team will take care of it.",
      },
    ],
  },
];
const support = () => {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const mainSlider = useRef(null);
  const mainSliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    afterChange: (index) => {
      setMainImageIndex(index);
    },
  };
  function changeMainImage(index) {
    setMainImageIndex(index);
    if (mainSlider.current && mainSlider.current.slickGoTo) {
      mainSlider.current.slickGoTo(index);
    }
  }
  // const [selected, setSelected] = useState(1);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (selected === 5) {
  //       setSelected(1);
  //     } else {
  //       setSelected(selected + 1);
  //     }
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, [selected]);
  return (
    <section className="lg:py-16 py-7 relative">
      <div className="header text-center">
        <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-secondary">
          From performance to 24/7 support, you'll get it all
        </h1>
        <p className=" leading-relaxed text-secondary">
          Our platform is fully equipped with the features you’ll need so you
          never have to worry about speed,
          <br /> security, and support for your websites, boost your digital
          experience with us.
        </p>
      </div>
      <div className=" lg:flex py-[3rem] gap-6 items-center  ">
        <div className="flex flex-col items-center gap-4  lg:gap-2 lg:w-[20%] ">
          <SupportHeading
            data={data}
            key={data.id}
            setIndex={changeMainImage}
            mainImageIndex={mainImageIndex}
          />
        </div>

        {/* <Slider {...settings} className=" "> */}
        <div className="lg:py-5 lg:w-[80%]">
          <Slider
            className="flex  items-center"
            ref={mainSlider}
            {...mainSliderSettings}
            initialSlide={mainImageIndex}
          >
            {data.map((data, index) => (
              <div key={index} className="px-2">
                <SupportContent data={data} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default support;
function SupportHeading({ data, setIndex, mainImageIndex }) {
  return (
    <>
      {data.map((data, index) => (
        <div
          className={`border rounded-lg  items-center text-center   w-full cursor-pointer ${
            mainImageIndex === index ? " text-white " : "text-info"
          } `}
          onClick={() => setIndex(index)}
          key={data.id}
        >
          <div
            className={`  ${
              mainImageIndex === index
                ? " fillProgress bg-primary"
                : "text-info"
            } p-4 rounded-lg`}
          >
            <p>{data.name}</p>
          </div>
        </div>
      ))}
    </>
  );
}
function SupportContent({ data }) {
  return (
    <>
      <div>
        <div className="grid lg:grid-cols-3 lg:gap-8 gap-3">
          <div className="grid grid-rows-2 lg:gap-12  gap-3 mt-[20px] lg:mt-[80px] lg:h-[450px]">
            <div className="text-center border rounded-xl p-5">
              {" "}
              <h1 className="text-[20px] text-info  ">
                {data.content[0].heading}
              </h1>
              <p className=" text-[15px] pt-3 text-secondary">
                {data.content[0].Description}
              </p>
            </div>
            <div className="text-center border rounded-xl p-5">
              {" "}
              <h1 className="text-[20px] text-info  ">
                {data.content[1].heading}
              </h1>
              <p className=" text-[15px] pt-3 text-secondary">
                {data.content[1].Description}
              </p>
            </div>
          </div>
          <div className="grid grid-rows-2 lg:gap-12 gap-3  lg:h-[450px]">
            <div className="text-center border rounded-xl p-5">
              {" "}
              <h1 className="text-[20px] text-info  ">
                {data.content[2].heading}
              </h1>
              <p className=" text-[15px] pt-3 text-secondary">
                {data.content[2].Description}
              </p>
            </div>
            <div className="text-center border rounded-xl p-5">
              {" "}
              <h1 className="text-[20px] text-info  ">
                {data.content[3].heading}
              </h1>
              <p className=" text-[15px] pt-3 text-secondary">
                {data.content[3].Description}
              </p>
            </div>
          </div>
          <div className="grid grid-rows-2 lg:gap-12 gap-3  lg:mt-[80px] lg:h-[450px]">
            <div className="text-center border rounded-xl p-5">
              {" "}
              <h1 className="text-[20px] text-info  ">
                {data.content[4].heading}
              </h1>
              <p className=" text-[15px] pt-3 text-secondary">
                {data.content[4].Description}
              </p>
            </div>
            <div className="text-center border rounded-xl p-5">
              {" "}
              <h1 className="text-[20px] text-info  ">
                {data.content[5].heading}
              </h1>
              <p className=" text-[15px] pt-3 text-secondary">
                {data.content[5].Description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
