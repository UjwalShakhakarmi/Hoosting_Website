export default function Button({ children }) {
  return (
    <div className=" lg:h-auto h-[50px] bg-white  px-4 lg:px-7 py-2.5 lg:py-3.5  text-[14px]  border  flex justify-center  items-center  rounded-xl text-error  cursor-pointer duration-400 transition-all ">
      {children}
    </div>
  );
}
