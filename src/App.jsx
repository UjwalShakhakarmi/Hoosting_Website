import React, {
  useEffect,
  useLayoutEffect,
  useCallback,
  useState,
} from "react";
import Navbar from "./component/Navbar/Navbar.jsx";
import styles from "./style.js";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./component/footer.jsx";
import { ThemeProvider } from "./Context/ThemeContext.jsx";
import { Helmet } from "react-helmet";

export default function App() {
  const { pathname } = useLocation();
  const [count, setCount] = useState(50);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  });

  return (
    <ThemeProvider>
      <Helmet>
        <title>Hoostly | Best Web Hosting in Nepal | Cloud VPS</title>
        <meta
          name="description"
          content="Hoostly Best Web Hosting In Nepal provides affordable .com domain & Shared Hosting | WordPress Hosting | VPS Server | Developer Hosting | Reseller Hosting"
        />
        <meta name="keywords" content="Hosting,Search hosting plans,domain " />
      </Helmet>
      <div>
        <div
          className={` ${styles.flexCenter} ${styles.paddingX} mt-13 relative overflow-hidden`}
        >
          <div className={` relative`}>
            <Navbar />
          </div>
        </div>
        <main>
          <Outlet />
        </main>
        <div
          className={` ${styles.flexCenter} ${styles.paddingX} mt-13 relative overflow-hidden`}
        >
          <div className="bg_shape2 absolute w-[500px] h-[400px] bg-success  left-0 top-0 opacity-20 blur-[7rem]  "></div>
          <div className="bg_shape2 absolute w-[500px] h-[400px] bg-success  right-12 top-[17rem] opacity-20 blur-[7rem] "></div>

          <div className={` relative`}>
            <Footer />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
