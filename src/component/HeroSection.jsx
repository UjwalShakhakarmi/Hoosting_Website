import React from "react";
import styles from "../style";
import { Button, Button1, Button3, Form } from "../component";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { WordPressImg, Explore4, hoostlyouter, hoostlyinner } from "../assets";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <div className="grid lg:grid-cols-2 gap-9 relative">
    <div>
      <div className="mb-7">
        <p className="text-[22px] text-info">Buy Hosting</p>
      </div>
      <div className="flex flex-row justify-between items-center w-full lg:pt-0">
        <h1 className="flex sm:text-[50px] text-[35px] font-bold text-info leading-[50px] lg:leading-[65px] ">
          Make Your <br className="block " />
          Business Online
          <br className="sm:block hidden" />
        </h1>
      </div>

      <Form />

      <div className="pt-9">
        <p className="tracking-wide text-secondary text-[18px] flex">
          Starting from <p className="mx-3">Rs.1499 per year</p>
        </p>
        <div className="py-4 flex lg:gap-14 gap-5">
          <Button1>
            <Link to="/wordPress-hosting">Host Your Site</Link>
          </Button1>
          <Button>
            <a
              className="flex items-center gap-2"
              href="https://wa.me/+9779822799880"
            >
              <IoChatbubbleEllipsesOutline className="text-[20px]" />
              Let's Chat
            </a>
          </Button>
        </div>
      </div>
    </div>

    <div className=" mb-8 w-full hidden lg:block">
      <img
        src={hoostlyouter}
        alt=""
        className="absolute  w-[480px] mx-auto right-[80px] top-[-37px] rotatespin "
      />
      <img
        src={hoostlyinner}
        className="relative top-5 w-[350px] mx-auto"
        alt=""
      />
    </div>
  </div>
);
export default HeroSection;
