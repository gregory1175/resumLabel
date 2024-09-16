import { motion, useScroll, useSpring } from "framer-motion";
import { items } from "../../constants/constants";
import style from "./portfolio.module.scss";
import PortfolioUI from "./portfolioUI/portfolioUI";
import { useRef } from "react";

function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div
      className={`${style["portfolio"]} relative flex flex-col items-center`}
      ref={ref}
    >
      <div
        className={`${style["progress"]} sticky top-0 left-0 pt-[50px] text-orange-500 text-4xl w-full`}
      >
        <h1 className={`${style["progress-title"]} text-center p-4`}>
          Примеры работ
        </h1>
        <motion.div
          className={`${style["progress-bar"]} h-2 bg-white`}
          style={{ scaleX }}
        ></motion.div>
      </div>
      {items.map((item) => (
        <PortfolioUI key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Portfolio;
