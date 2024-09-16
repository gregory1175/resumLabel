import style from "./parallax.module.scss";
import starsVideo from "../../assets/video/StarsFly.mp4";
import spaceShip from "../../assets/image/spaceShip.svg";
import spaceComet from "../../assets/image/spaceComet.svg";
import { ParallaxType } from "../../types/types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Parallax({ type }: ParallaxType) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const ySpaceship = useTransform(scrollYProgress, [0, 1], ["0", "-400%"]);
  const xSpaceship = useTransform(scrollYProgress, [0, 1], ["0", "400%"]);

  const yComet = useTransform(scrollYProgress, [0, 1], ["0", "400%"]);
  const xComet = useTransform(scrollYProgress, [0, 1], ["0", "-400%"]);

  return (
    <div
      ref={ref}
      className={`${style["parallax"]} ${
        type === "services"
          ? style["parallax--services"]
          : style["parallax--default"]
      } relative overflow-hidden`}
    >
      <motion.h1
        className="text-8xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "500%"]) }}
      >
        {type === "services" ? "Что я могу сделать?" : "Что я сделал?"}
      </motion.h1>
      <video
        className={`${style["video"]} bg-cover w-full h-full absolute opacity-30 object-cover object-center`}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={starsVideo} type="video/mp4" />
        Ваш браузер не поддерживает видео тег.
      </video>
      <motion.img
        src={spaceShip}
        alt="Space Ship"
        className="w-24 h-24 absolute bottom-40 left-72"
        style={{ y: ySpaceship, x: xSpaceship }}
      />
      <motion.img
        src={spaceComet}
        alt="Space Comet"
        className="w-24 h-24 absolute top-40 right-72"
        style={{ y: yComet, x: xComet }}
      />
    </div>
  );
}

export default Parallax;
