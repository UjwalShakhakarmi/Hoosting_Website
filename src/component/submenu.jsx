import React from "react";
import { BiTransfer } from "react-icons/bi";
import { submenu_image } from "../assets";

const submenu = () => {
  return (
    <div className="grid grid-cols-3 p-10 gap-5 ">
      <div className="col-span-2">
        <ul className="grid grid-rows-4 grid-flow-col gap-3">
          <li className="flex items-center mb-2 border p-2 rounded hover:bg-blue-100">
            <BiTransfer className="text-primary-color text-[35px] border p-1  rounded mx-2 bg-blue-50 " />
            <a href="">Domain Name Search</a>
          </li>
          <li className="flex items-center mb-2 border p-2 rounded hover:bg-blue-100">
            <BiTransfer className="text-primary-color text-[35px] border p-1  rounded mx-2 bg-blue-50 " />
            <a href="">Domain Name Search</a>
          </li>
          <li className="flex items-center mb-2 border p-2 rounded hover:bg-blue-100">
            <BiTransfer className="text-primary-color text-[35px] border p-1  rounded mx-2 bg-blue-50 " />
            <a href="">Domain Name Search</a>
          </li>
          <li className="flex items-center mb-2 border p-2 rounded  hover:bg-blue-100">
            <BiTransfer className="text-primary-color text-[35px] border p-1  rounded mx-2 bg-blue-50" />
            <a href="">Domain Name Search</a>
          </li>
          <li className="flex items-center mb-2 border p-2 rounded  hover:bg-blue-100">
            <BiTransfer className="text-primary-color text-[35px] border p-1  rounded mx-2 bg-blue-50" />
            <a href="">Domain Name Search</a>
          </li>
          <li className="flex items-center mb-2 border p-2 rounded  hover:bg-blue-100">
            <BiTransfer className="text-primary-color text-[35px] border p-1  rounded mx-2 bg-blue-50" />
            <a href="">Domain Name Search</a>
          </li>
          <li className="flex items-center mb-2 border p-2 rounded  hover:bg-blue-100">
            <BiTransfer className="text-primary-color text-[35px] border p-1  rounded mx-2 bg-blue-50" />
            <a href="">Domain Name Search</a>
          </li>
          <li className="flex items-center mb-2 border p-2 rounded  hover:bg-blue-100">
            <BiTransfer className="text-primary-color text-[35px] border p-1  rounded mx-2 bg-blue-50" />
            <a href="">Domain Name Search</a>
          </li>
        </ul>
      </div>
      <div className="col">
        <div className=" ">
          <img
            src={submenu_image}
            alt=""
            className="max-h-[356px] w-auto border"
          />
        </div>
      </div>
    </div>
  );
};

export default submenu;

// import React from "react";

// const submenu = () => {
//   return (
//     <div className="flex justify-between">
//       <div className="grid grid-cols-2">
//         <div>
//           <div>fsda</div>
//           <div>fff</div>
//           <div>asdasd</div>
//         </div>
//         <div>00 </div>
//         <div>gds</div>
//       </div>
//       <div>2</div>
//     </div>
//   );
// };

// export default submenu;
// 0;
