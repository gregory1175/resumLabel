import style from "./portfolioUI.module.scss";
import { useRef } from "react";
import { PortfolioUIType } from "../../../types/types";
import { useScroll, useTransform, motion } from "framer-motion";

function PortfolioUI({ item }: PortfolioUIType) {
  const ref = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="flex items-center justify-center w-full h-full overflow-hidden">
        <div className="max-w-[1365px] h-full m-auto flex gap-12 items-center justify-center">
          <div className={`${style["imageContainer"]} h-1/2`} ref={ref}>
            <img className="object-cover w-full h-full" src={item.img} alt="" />
          </div>
          <motion.div
            className={`${style["textContainer"]} h-1/2 flex flex-col gap-7 `}
            style={{ y }}
          >
            <h2 className="text-6xl font-semibold">{item.title}</h2>
            <p className="text-xl">{item.description}</p>

            <a href={item.projectLink}>
              <button className="bg-[rgb(42,42,102)] rounded-[10px] border-none w-52 h-11 cursor-pointer">
                Посмотреть демо
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioUI;
