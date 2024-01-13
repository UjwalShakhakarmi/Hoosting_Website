import React, { useState } from "react";

import { BackPattern, map, Rating, Person1 } from "../assets";

const data = [
  {
    id: 1,
    name: "Build for WordPress",
    img: Person1,
    content: [
      {
        heading: "The best value forsadf money",
        Description:
          " The first ever web hosting platform in Nepal with so much facilities at that low cost. If you search for the others, they charge around 4 times than hoostly does. Unlike the other web hosting companies in Nepal, hoostly does a great job of solving its clients' issues for them whereas for the others, you have to resolve the issues on your own. For the beginners, if you need, they provide free guide to getting started; now that's the thing I adore the most about Hoostly.",
      },
    ],
  },
  {
    id: 2,
    name: "Recommended by 1000+ WordPress Products",
    img: Person1,

    content: [
      {
        heading: "The best value fasdfor money",
        Description:
          " The first ever web hosting platform in Nepal with so much facilities at that low cost. If you search for the others, they charge around 4 times than hoostly does. Unlike the other web hosting companies in Nepal, hoostly does a great job of solving its clients' issues for them whereas for the others, you have to resolve the issues on your own. For the beginners, if you need, they provide free guide to getting started; now that's the thing I adore the most about Hoostly.",
      },
    ],
  },
  {
    id: 3,
    name: "WordPress Manager Tool",
    img: Person1,

    content: [
      {
        heading: "The best valuasde for money",
        Description:
          " The first ever web hosting platform in Nepal with so much facilities at that low cost. If you search for the others, they charge around 4 times than hoostly does. Unlike the other web hosting companies in Nepal, hoostly does a great job of solving its clients' issues for them whereas for the others, you have to resolve the issues on your own. For the beginners, if you need, they provide free guide to getting started; now that's the thing I adore the most about Hoostly.",
      },
    ],
  },
  {
    id: 4,
    name: "Wordpress Experts",
    img: Person1,

    content: [
      {
        heading: "The best value for money",
        Description:
          " The first ever web hosting platform in Nepal with so much facilities at that low cost. If you search for the others, they charge around 4 times than hoostly does. Unlike the other web hosting companies in Nepal, hoostly does a great job of solving its clients' issues for them whereas for the others, you have to resolve the issues on your own. For the beginners, if you need, they provide free guide to getting started; now that's the thing I adore the most about Hoostly.",
      },
    ],
  },
];

const Whyus = () => {
  const [selectedId, setSelectedId] = useState(1);
  return (
    <>
      <section className="lg:py-16 md:py-14 py-9 ">
        <div className="header text-center">
          <h1 className=" leading-relaxed text-secondary text-3xl font-bold mb-3">
            Why Hoostly?
          </h1>
          <p className="text-gray-600 text-secondary leading-relaxed lg:text-xl  mb-3">
            Since the beginning, we’ve been supporters of WordPress. And for
            many years, we’re proud to still be doing our part in this
            incredible community.
          </p>
        </div>
        <div className="">
          {data
            .find((data) => selectedId === data.id)
            ?.content.map((data, key) => (
              <Testimonialcard card={data} key={data.id} />
            ))}
        </div>
        <div className="grid lg:grid-flow-col md:grid-cols-2 grid-cols-2 gap-2 md:gap-8 lg:gap-9 ">
          {data.map((data) => (
            <Testimonals
              data={data}
              key={data.id}
              onSelect={setSelectedId}
              selectedId={selectedId}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Whyus;
function Testimonialcard({ card }) {
  return (
    <>
      <div className="grid lg:grid-cols-2 lg:gap-9 gap-4  lg:py-[80px] py-[20px]">
        <div className="grid grid-row h-auto">
          <h1 className="text-secondary text-[25px] lg:pt-[50px] pt-3 ">
            {card.heading}
          </h1>
          <p className="text-secondary font-light py-4">{card.Description}</p>
          <img src={Rating} className="h-[25px]" />
        </div>
        <div className=" lg:grid-col mb-2 lg:mb-4 lg:place-items-end hidden lg:block relative">
          <div className="bg_shape2 absolute w-[700px] h-[400px] right-[1rem] bg-success opacity-20 blur-[2rem] "></div>

          <img
            src={Person1}
            alt=""
            className="w-5/6 items-right relative rounded-lg  z-10"
          />
        </div>
      </div>
    </>
  );
}
function Testimonals({ data, onSelect, selectedId }) {
  return (
    <div
      className={`${
        selectedId === data.id ? "selectedTestomonial" : ""
      } p-2 bg-blue-100 text-black relative  items-center rounded-lg hover:bg-blue-500 hover:text-white cursor-pointer hover:shadow-lg hover:scale-[1.03] transition-all duration-200 ease-in-out`}
      onClick={() => onSelect(data.id)}
    >
      <p className=" font-light">{data.name}</p>
    </div>
  );
}
