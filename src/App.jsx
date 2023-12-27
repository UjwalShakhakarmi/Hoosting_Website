import {
  Navbar,
  DomainSearch,
  HeroSection,
  FandQ,
  Card,
  Support,
  Form,
  Footer,
} from "./component";
import styles from "./style.js";
import { arrowRight, map } from "./assets";

export default function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>

      <div
        className={`${styles.paddingX} ${styles.flexCenter}  bg-[aliceblue]`}
      >
        <div className={`${styles.boxWidth} `}>
          {" "}
          <HeroSection />
        </div>
      </div>
      <div
        className={`${styles.paddingX} ${styles.flexCenter} `}
        // style={{ backgroundImage: `url(${map})` }}
      >
        <div className={`${styles.boxWidth} `}>
          <Form />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Card />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <FandQ />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Support />
        </div>
      </div>

      <div className={` ${styles.flexCenter} bg-[#f4f3ff]`}>
        <div className={`${styles.boxWidth} `}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
