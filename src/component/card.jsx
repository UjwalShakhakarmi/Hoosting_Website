import React from "react";
import { FaCheck } from "react-icons/fa";
const Card = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full md:w-3/4 lg:w-2/3">
            <div className="text-center mb-9">
              <h2 className="text-3xl font-bold mb-2">
                Managed Our Hosting Price
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Distinctively recaptiualize principle-centered core competencies
                through client-centered core competencies. Enthusiastically
                provide access.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-0 gap-4">
          <CardDetails />
          <CardDetails />
          <CardDetailsW />
          <CardDetails />
        </div>
      </div>
    </section>
  );
};

export default Card;
function CardDetails() {
  return (
    <div className="md:mb-8 mx-3 md:mx-5 flex flex-col border border-blue-950 rounded-[24px] w-auto hover:scale-[1.03] transition-all duration-500 ease-in-out">
      <span className="px-5 md:px-5 pt-6 text-start font-[700] text-[18px] text-primary-color">
        Cloud Thikka
      </span>
      <div className="px-4 md:px-7 bg-white flex flex-col items-start w-full pt-3 h-full rounded-[24px]">
        <div className="hidden md:block font-[300]">
          Empower Your Business with our super fast Cloud Hosting.
        </div>
        <div className="flex flex-col items-start mt-3">
          <p className="text-5xl font-bold gap-3 text-primary-color">
            <span className="text-lg text-primary-color">रू.</span>150
            <span className="text-lg font-[300] __variable_6d1a03">/mo</span>
          </p>
          <div className="flex items-center">
            <p className="mt-2 mb-2 text-gray-500 text-sm w-fit font-[500] line-through">
              रू.150{" "}
            </p>
            <span className="mx-2 p-1 rounded-lg text-[10px] text-black bg-[#FFD891]">
              Save 25%
            </span>
          </div>

          <p className="text-xs mb-2 pb-2 font-normal text-gray-500">
            You pay Rs.5400 today. Renews at same price on 0 Dec, 2026.
          </p>
        </div>
        <a
          className="text-center  hover:scale-105 hover:bg-primary hover:text-white transition duration-500 w-full rounded-md py-3 bg-white border border-blue-500  text-black font-[500] text-[14px] "
          href=""
        >
          Add to cart
        </a>
        <div className="w-full mt-4 flex flex-col mb-7">
          <div className="font-[300] __variable_6d1a03">
            <ul className="space-y-2 mt-4">
              <li className="flex items-center gap-3">
                <FaCheck className="text-primary-color" />

                <p className="text-[15px]">
                  <span className="font-semibold text-primary-color">1</span>{" "}
                  Website
                </p>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-primary-color" />
                <p className="text-[15px]">
                  <span className="font-semibold text-primary-color">5 GB</span>{" "}
                  nvme-SSD Storage
                </p>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-primary-color" />
                <p className="text-[15px]">
                  <span className="font-semibold text-primary-color">10</span>{" "}
                  Email Accounts
                </p>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-primary-color" />
                <p className="text-[15px]">
                  <span className="font-semibold text-primary-color">
                    Unlimited
                  </span>{" "}
                  Bandwidth
                </p>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-primary-color" />
                <p className="text-[15px]">
                  <span className="font-semibold text-primary-color">
                    10 MySQL
                  </span>{" "}
                  Databases
                </p>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-primary-color" />
                <p className="text-[15px]">
                  <span className="font-semibold text-primary-color">No</span>{" "}
                  Free Domain
                </p>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-primary-color" />
                <p className="text-[15px]">
                  <span className="font-semibold text-primary-color">Free</span>{" "}
                  SSL
                </p>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-primary-color" />
                <p className="text-[15px]">
                  <span className="font-semibold text-primary-color">
                    Anycast
                  </span>{" "}
                  Nameservers
                </p>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-primary-color" />
                <p className="text-[15px]">
                  <span className="font-semibold text-primary-color">
                    Daily
                  </span>{" "}
                  Backups
                </p>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-primary-color" />
                <p className="text-[15px]">
                  <span className="font-semibold text-primary-color">Free</span>{" "}
                  Migration
                </p>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-primary-color" />
                <p className="text-[15px]">
                  <span className="font-semibold text-primary-color">
                    cPanel +
                  </span>{" "}
                  1 Click Installer
                </p>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-primary-color" />
                <p className="text-[15px]">
                  <span className="font-semibold text-primary-color">
                    Managed
                  </span>{" "}
                  WordPress
                </p>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-primary-color" />
                <p className="text-[15px]">
                  <span className="font-semibold text-primary-color">
                    WordPress
                  </span>{" "}
                  Acceleration
                </p>
              </li>

              <li className="flex items-center gap-3">
                <FaCheck className="text-primary-color" />
                <p className="text-[15px]">
                  <span className="font-semibold text-primary-color">SSH</span>{" "}
                  Access
                </p>
              </li>

              <li className="flex items-center gap-3">
                <FaCheck className="text-primary-color" />
                <p className="text-[15px]">
                  <span className="font-semibold text-primary-color">24/7</span>{" "}
                  Support
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
    <div className="md:mb-8 mx-3 md:mx-5 flex flex-col  border-blue-950 rounded-[24px] w-auto hover:scale-[1.03] transition-all duration-500 ease-in-out">
      <div
        className="text-center  bg-primary rounded-[24px]"
        style={{
          background: "linear-gradient(to right,#5a28fa 0,#457bff 100%)",
        }}
      >
        <div className="pt-3 pb-1">
          <span className="text-center text-white">Most Popular</span>
        </div>

        <div className="px-4 md:px-7 m-1 bg-white flex flex-col items-start  pt-3  rounded-[24px]">
          <div className="text-start ">
            <span className="  pt-6 text-start font-[700] text-[18px] text-primary-color">
              Cloud Thikka
            </span>
          </div>
          <div className="hidden md:block font-[300] text-start">
            Empower Your Business with our super fast Cloud Hosting.
          </div>
          <div className="flex flex-col items-start mt-3">
            <p className="text-5xl font-bold gap-3 text-primary-color">
              <span className="text-lg text-primary-color">रू.</span>150
              <span className="text-lg font-[300] __variable_6d1a03">/mo</span>
            </p>
            <div className="flex items-center">
              <p className="mt-2 mb-2 text-gray-500 text-sm w-fit font-[500] line-through">
                रू.150{" "}
              </p>
              <span className="mx-2 p-1 rounded-lg text-[10px] text-black bg-[#FFD891]">
                Save 25%
              </span>
            </div>
            <p className="text-xs mb-2 pb-2 font-normal text-gray-500">
              You pay Rs.5400 today. Renews at same price on 0 Dec, 2026.
            </p>
          </div>
          <a
            className="text-center  hover:scale-105 hover:bg-primary hover:text-white transition duration-500 w-full rounded-md py-3 bg-white border border-blue-500  text-black font-[500] text-[14px] "
            href=""
          >
            Add to cart
          </a>
          <div className="w-full mt-4 flex flex-col mb-7">
            <div className="font-[300] __variable_6d1a03">
              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-primary-color" />

                  <p className="text-[15px]">
                    <span className="font-semibold text-primary-color">1</span>{" "}
                    Website
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-primary-color" />
                  <p className="text-[15px]">
                    <span className="font-semibold text-primary-color">
                      5 GB
                    </span>{" "}
                    nvme-SSD Storage
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-primary-color" />
                  <p className="text-[15px]">
                    <span className="font-semibold text-primary-color">10</span>{" "}
                    Email Accounts
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-primary-color" />
                  <p className="text-[15px]">
                    <span className="font-semibold text-primary-color">
                      Unlimited
                    </span>{" "}
                    Bandwidth
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-primary-color" />
                  <p className="text-[15px]">
                    <span className="font-semibold text-primary-color">
                      10 MySQL
                    </span>{" "}
                    Databases
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-primary-color" />
                  <p className="text-[15px]">
                    <span className="font-semibold text-primary-color">No</span>{" "}
                    Free Domain
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-primary-color" />
                  <p className="text-[15px]">
                    <span className="font-semibold text-primary-color">
                      Free
                    </span>{" "}
                    SSL
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-primary-color" />
                  <p className="text-[15px]">
                    <span className="font-semibold text-primary-color">
                      Anycast
                    </span>{" "}
                    Nameservers
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-primary-color" />
                  <p className="text-[15px]">
                    <span className="font-semibold text-primary-color">
                      Daily
                    </span>{" "}
                    Backups
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-primary-color" />
                  <p className="text-[15px]">
                    <span className="font-semibold text-primary-color">
                      Free
                    </span>{" "}
                    Migration
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-primary-color" />
                  <p className="text-[15px]">
                    <span className="font-semibold text-primary-color">
                      cPanel +
                    </span>{" "}
                    1 Click Installer
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-primary-color" />
                  <p className="text-[15px]">
                    <span className="font-semibold text-primary-color">
                      Managed
                    </span>{" "}
                    WordPress
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-primary-color" />
                  <p className="text-[15px]">
                    <span className="font-semibold text-primary-color">
                      WordPress
                    </span>{" "}
                    Acceleration
                  </p>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-primary-color" />
                  <p className="text-[15px]">
                    <span className="font-semibold text-primary-color">
                      SSH
                    </span>{" "}
                    Access
                  </p>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-primary-color" />
                  <p className="text-[15px]">
                    <span className="font-semibold text-primary-color">
                      24/7
                    </span>{" "}
                    Support
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
