import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useTheme } from "../../Context/ThemeContext.jsx";

export default function Button({ children }) {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "mytheme"
          ? "Button_card p-[2px]  rounded-xl"
          : "   rounded-xl   "
      }      cursor-pointer lg:h-auto h-[50px] `}
    >
      <a
        className={`${
          theme === "mytheme" ? "" : "  border shadow-sm buttonFirst"
        }  px-[19px]  lg:h-auto h-[4px] py-[1.4rem] lg:py-[15.25px] items-center flex justify-center transition duration-500  rounded-xl  bg-accent  text-info font-[500] text-[14px] `}
        // href={link}
      >
        {children}
      </a>
    </div>
  );
}
