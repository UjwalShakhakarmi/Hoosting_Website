import React from "react";
import { Hoostly, Facebook, Insta, Linkedin, Twitter } from "../assets";
import { socialMedia } from "../constants";
const footer = () => {
  return (
    <footer className="py-7">
      <div className="grid grid-cols-4  ">
        <FooterContent />
        <FooterContent />
        <FooterContent />
        <FooterContent />
      </div>
      <div className="flex justify-between mt-9 mb-2">
        <div className="w-full md:w-1/3 mb-5 md:mb-0">
          <div>
            <img src={Hoostly} alt="" className="h-[30px]" />
          </div>
          <p className="mt-3 text-[10px]">
            Hoostly started in 2020 with a simple goal: to offer the best web
            hosting in Nepal. Our focus is on delivering exceptional speed,
            top-notch security, and 24/7 support. We're Nepal's #1 Cloud Service
            Provider.
          </p>
        </div>
        <div className="w-full md:w-1/3 mb-5 md:mb-0">
          <div className="text-right text-[20px]">
            <p className="text-[13px]">Hoostly info Tech</p>
            <p className="text-[13px]">M: +977-9822 799 880</p>
            <p className="text-[13px]">E: contact@hoostly.com</p>
          </div>
          <ul className="list-none sm:flex hidden justify-end items-right flex ">
            {socialMedia.map((socialMedia, index) => (
              <li key={socialMedia.id}>
                <a href={`#${socialMedia.link}`}>
                  <img src={socialMedia.icon} className="mx-1 h-[30px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <div className="flex justify-between">
        <div className="w-full md:w-1/3 mb-5 md:mb-0">
          <p className="mt-3 text-[10px]">
            Your IP is Being Monitored for Security Purposes.
          </p>
        </div>
        <div className="w-full md:w-1/3 mb-5 md:mb-0">
          {" "}
          <p className="mt-3 text-[10px] text-right">
            © 2019-2023 Hoostly All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
function FooterContent() {
  return (
    <div className="text-center">
      <h1 className="text-[20px] text-primary-color">Hosting</h1>
      <div className="py-3">
        <ul>
          <li className="text-gray-600 ">Web Hosting </li>
          <li className="text-gray-600 ">Web Hosting </li>
          <li className="text-gray-600 ">Web Hosting </li>
          <li className="text-gray-600 ">Web Hosting </li>
          <li className="text-gray-600 ">Web Hosting </li>
        </ul>
      </div>
    </div>
  );
}
