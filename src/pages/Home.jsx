import {
  Navbar,
  HeroSection,
  FandQ,
  Card,
  Testimonial,
  Support,
  Detail,
  ExtraServices,
  Explore,
  Form,
  Banner,
  Banner1,
  CardHome,
  Banner2,
  Footer,
  Posts,
} from "../component";
import { useTheme } from "../Context/ThemeContext.jsx";
import styles from "../style.js";
import { useEffect, useState } from "react";
const FandQdata = [
  {
    id: 1,
    question: "What is web hosting and how does it work??",
    answer:
      "Web hosting is a service that allows individuals and businesses to make their websites accessible on the internet. Web hosting providers store website files on servers and deliver them to users when they visit the website through their browsers.",
  },
  {
    id: 2,
    question: "How much does web hosting cost?",
    answer:
      "Web hosting costs vary based on the type of hosting and features you need. Prices can range from a few dollars per month for shared hosting to hundreds of dollars for dedicated or cloud hosting.",
  },
  {
    id: 3,
    question: "What are the different types of web hosting?",
    answer:
      "The main types of web hosting are shared hosting (shared resources with other websites), dedicated hosting (entire server for your website), VPS hosting (virtual private server), and cloud hosting (flexible and scalable hosting on virtual servers).",
  },
  {
    id: 4,
    question: "Which web hosting provider is the best?",
    answer:
      "The best web hosting provider depends on your specific needs, budget, and website requirements. Research and compare reputable hosting companies to find the one that suits you best.",
  },
  {
    id: 5,
    question: "How to choose the right web hosting plan for my website?",
    answer:
      "Consider factors like website traffic, resource needs, budget, and technical support when choosing a web hosting plan. Opt for a plan that aligns with your website’s requirements and allows room for growth.",
  },
  {
    id: 6,
    question: "What is shared hosting, and is it suitable for my needs?",
    answer:
      "Shared hosting involves sharing server resources with other websites. It is cost-effective and suitable for small websites or beginners with low traffic.",
  },
  {
    id: 7,
    question: "What is dedicated hosting, and when should I consider it?",
    answer:
      "Dedicated hosting provides an entire server dedicated to your website. Consider this option for high-traffic websites or when you need full control and customization.",
  },
  {
    id: 8,
    question: "What is cloud hosting, and what are its advantages?",
    answer:
      "Cloud hosting uses multiple interconnected servers to host websites. Its advantages include scalability, reliability, and the ability to handle traffic spikes efficiently.",
  },
  {
    id: 9,
    question:
      "How to transfer my website from one hosting provider to another?",
    answer:
      "Website migration involves backing up your website files and database, then transferring them to the new hosting provider. Many hosts offer migration services or tools to assist with the process.",
  },
  {
    id: 10,
    question: "What is uptime, and why is it essential for web hosting?",
    answer:
      "Uptime refers to the amount of time your website is accessible to users. It is crucial for a positive user experience and search engine rankings. Look for hosting providers with high uptime guarantees.",
  },
];
export default function Home() {
  const { getBackgroundImage, theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-full overflow-hidden relative">
      <div className="bg_shape2 absolute top-[-200px] left-[300px]  w-[1000px] h-[320px] opacity-50 bg-success blur-[9rem]   "></div>
      <div className="bg_shape2 absolute top-[18rem] right-0  -rotate-45 w-[1000px] h-[300px] opacity-50 bg-success blur-[9rem]   "></div>
      <div
        className={`${styles.paddingX}  ${styles.flexCenter} lg:pt-[8rem] lg:h-screen pt-[9rem] `}
      >
        <div className={`${styles.boxWidth}   `}>
          {" "}
          <HeroSection />
        </div>
      </div>

      {/* <div className="relative ">
        <Banner2 />
      </div> */}
      <div className={`${styles.paddingX} ${styles.flexCenter} relative `}>
        {/* Apply background shape */}
        <div className={`${styles.boxWidth}   `}>
          <CardHome />
        </div>
      </div>
      <div className="relative">
        <Banner1 />
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter} relative `}>
        <div className="bg_shape1 absolute top-10 opacity-30 bg-success  blur-[8rem]"></div>
        <div className={`${styles.boxWidth}  z-10`}>
          <ExtraServices />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter} relative`}>
        <div className="bg_shape2 absolute w-[700px] h-[700px] top-[0rem] bg-success  left-0 opacity-20 blur-[8rem] "></div>

        <div className="bg_shape2 absolute w-[700px] h-[500px] top-[20rem]  bg-success right-[1rem] opacity-20 blur-[8rem] "></div>

        <div className={`${styles.boxWidth} `}>
          <Detail />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} relative`}>
          <div className="bg_shape2 absolute w-[400px] h-[900px] top-0 rotate-45 bg-success  right-0 opacity-20 blur-[8rem] "></div>

          <Explore />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter} relative`}>
        <div className="bg_shape2 absolute w-[700px] h-[700px] top-[0rem] bg-success  left-0 opacity-20 blur-[9rem] "></div>

        <div className="bg_shape2 absolute w-[700px] h-[500px] top-[20rem]  bg-success right-[1rem] opacity-20 blur-[9rem] "></div>
        <div className={`${styles.boxWidth} `}>
          <Support />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Testimonial />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter} relative`}>
        <div className="bg_shape2 absolute w-[1000px] h-[700px] top-[0rem] bg-success  left-0 opacity-20 blur-[9rem] "></div>

        <div className="bg_shape2 absolute w-[700px] h-[500px] top-[20rem]  bg-success right-[1rem] opacity-20 blur-[9rem] "></div>
        <div className={`${styles.boxWidth} `}>
          <FandQ data={FandQdata} />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Posts />
        </div>
      </div>
      <div className="relative ">
        <Banner />
      </div>
    </div>
  );
}
