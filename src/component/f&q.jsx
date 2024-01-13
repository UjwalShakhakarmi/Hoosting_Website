import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const fandq = ({ data }) => {
  const [showId, setShowId] = useState(1);

  return (
    <div className="bg-dark lg:py-16 py-7">
      <div className="text-center mb-3">
        <h1 className="text-2xl lg:text-3xl font-bold mb-2 text-secondary">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="grid gap-5 pt-[5rem] lg:px-[100px] ">
        <QuestionAnswer
          key={data.id}
          data={data}
          setShowId={setShowId}
          showId={showId}
        />
      </div>
    </div>
  );
};

export default fandq;
function QuestionAnswer({ data, showId, setShowId }) {
  return (
    <>
      {data.map((data, index) => (
        <div
          className="p-4 border shadow-sm rounded-[20px] hover:scale-[1.02] transition-all duration-500 ease-in-out cursor-pointer z-10"
          key={index}
        >
          <div
            className=" flex justify-between answer"
            onClick={() => setShowId(showId === data.id ? null : data.id)}
          >
            <h1 className="text-[15px] lg:text-[18px] font-semilight text-secondary">
              {data.question}
            </h1>
            {showId === data.id ? (
              <FiMinus className="text-[18px] lg:text-[25px] text-secondary" />
            ) : (
              <FiPlus className="text-[18px] lg:text-[25px] text-secondary" />
            )}
          </div>
          {showId === data.id && (
            <div className="question mt-4 ">
              <p className="font-light text-secondary">{data.answer}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
