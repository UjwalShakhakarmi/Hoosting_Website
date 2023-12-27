import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
const data = [
  {
    id: 123,
    question: "hello",
    answer: "hello",
  },
];

const fandq = () => {
  return (
    <div className="bg-dark mb-6">
      <div className="text-center mb-3">
        <h1 className="text-[18px] lg:text-3xl font-bold mb-2">
          Hoosting FAQs
        </h1>
        <p className=" text-gray-600 text-[15px] lg:text-[18px] text-medium">
          You can find here a list of frequently asked questions and answers
          about our VPS Hosting
        </p>
      </div>
      <div className="grid gap-5 pt-5 lg:px-[100px] ">
        <QuestionAnswer />
        <QuestionAnswer />
        <QuestionAnswer />
        <QuestionAnswer />
        <QuestionAnswer />
      </div>
    </div>
  );
};

export default fandq;
function QuestionAnswer() {
  const [show, setShow] = useState(false);
  return (
    <div className="p-4 border shadow-sm rounded-[20px] hover:scale-[1.02] transition-all duration-500 ease-in-out">
      <div
        className=" flex justify-between answer"
        onClick={() => setShow(!show)}
      >
        <h1 className="text-[15px] lg:text-[18px] font-semilight">
          What is Virtual Private Server?
        </h1>
        {show ? (
          <FiMinus className="text-[18px] lg:text-[25px]" />
        ) : (
          <FiPlus className="text-[18px] lg:text-[25px]" />
        )}
      </div>
      {show && (
        <div className="question mt-4 ">
          <p className="font-light">
            A Virtual Private Server (VPS) is an independent, virtual partition
            on a physical server. Think of a server with different (containers)
            within it. When you sign up for Ultahost VPS hosting, you get one of
            these containers to manage as you wish⁠—install applications or nl.
          </p>
        </div>
      )}
    </div>
  );
}
