import style from "./hero.module.scss";
import scrool from "../../assets/image/mouse-cursor.svg";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scroolButton: {
    opacity: 0,
    y: 10,
    transition: {
      repeat: Infinity,
      duration: 2,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
    opacity: 1,
  },
  animate: {
    x: "-550%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror" as const,
      duration: 40,
    },
  },
};

function Hero() {
  return (
    <div className={style["hero"]}>
      <div className={`${style["wrapper"]} `}>
        <motion.div
          className={style["textContainer"]}
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            variants={textVariants}
            className="text-3xl text-violet-700 tracking-wide"
          >
            ДЕНИСОВ ГРИГОРИЙ
          </motion.h2>
          <motion.h1 variants={textVariants} className="text-8xl w-full">
            фуллстек разработчик
          </motion.h1>
          <motion.div variants={textVariants} className={style["buttons"]}>
            <motion.button
              variants={textVariants}
              className="p-6 border rounded-lg bg-transparent mr-5 font-light text-sm"
            >
              Посмотреть последнюю работу
            </motion.button>
            <motion.button
              variants={textVariants}
              className="p-6 border rounded-lg bg-transparent mr-5 font-light text-sm"
            >
              Связаться со мной
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scroolButton"
            src={scrool}
            alt="scroll"
            className="w-10 h-10"
          />
        </motion.div>
      </div>
      <motion.div
        className={`${style["slidingTextContainer"]} absolute -bottom-24 w-1/2 font-bold pointer-events-none`}
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Programmer Developer Engineer
      </motion.div>
      {/*         <div className={style["imageContainer"]}>
            <img
              className={style["imageContainer_photo"]}
              src={myPhoto}
              alt="мое фото"
            />
          </div> */}
    </div>
  );
}

export default Hero;
