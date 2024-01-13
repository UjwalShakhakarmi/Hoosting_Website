import { useTheme } from "../../Context/ThemeContext.jsx";

export default function Button({ children }) {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "mytheme"
          ? "transparent"
          : "  border border-gray-200 shadow-sm  "
      }  buttonFirst lg:h-auto h-[50px]   px-4 lg:px-7 py-2.5 lg:py-3.5  text-[14px]  border  flex justify-center  items-center  rounded-xl text-info  cursor-pointer duration-400 transition-all `}
    >
      {children}
    </div>
  );
}
