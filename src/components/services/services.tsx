import { motion, useInView } from "framer-motion";
import style from "./services.module.scss";
import present from "../../assets/image/present.jpg";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Services() {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
      className={`${style["services"]} h-full flex flex-col justify-between `}
    >
      <motion.div
        variants={variants}
        className={`${style["textContainer"]} self-end flex items-center`}
      >
        <p className="font-extralight text-xl text-gray-600 text-right">
          Мое основное направление <br /> веб разработка
        </p>
        <hr className="w-[500px] border-t-2 border-gray-600" />
      </motion.div>

      <motion.div
        variants={variants}
        className={`${style["titleContainer"]} flex flex-col items-center`}
      >
        <div className="flex flex-col gap-12 items-center ">
          <div className="flex gap-5 ">
            <img
              src={present}
              alt=""
              className="w-72 h-24 object-center"
              style={{ borderRadius: 50 }}
            />
            <h1 className="flex gap-5 text-7xl">
              <motion.b whileHover={{ color: "rgb(42,42,102)" }}>
                Быстрые
              </motion.b>
              <p className="font-thin "> решения.</p>
            </h1>
          </div>

          <div className="flex gap-5 ">
            <h1 className="flex gap-5 text-7xl">
              <motion.b whileHover={{ color: "rgb(42,42,102)" }}>
                хорошего
              </motion.b>
              <p className=" font-thin "> качества.</p>
            </h1>
            <button className="w-72 h-24 rounded-[50px] bg-[rgb(42,42,102)] cursor-pointer text-xl">
              Например?
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={variants}
        className={`${style["listContainer"]} flex max-w-[1366px] m-auto`}
      >
        <motion.div
          variants={variants}
          className={`${style["box"]} p-12  border-solid border-[0.5px] border-gray-600 flex flex-col justify-between`}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Чет делаю</h2>
          <p>
            Nullam maecenas non magna iaculis lectus rhoncus eget ridiculus.
            Egestas accumsan consequat etiam nostra dictum luctus massa
            efficitur. Pellentesque tortor luctus mauris tempor mauris a, .
          </p>
          <button className="p-3 bg-[rgb(60,60,150)] text-black border-none">
            Начать
          </button>
        </motion.div>
        <motion.div
          variants={variants}
          className={`${style["box"]} p-12  border-solid border-[0.5px] border-gray-600 flex flex-col justify-between`}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Чет делаю</h2>
          <p>
            Nullam maecenas non magna iaculis lectus rhoncus eget ridiculus.
            Egestas accumsan consequat etiam nostra dictum luctus massa
            efficitur. Pellentesque tortor luctus mauris tempor mauris a, .
          </p>
          <button className="p-3 bg-[rgb(60,60,150)] text-black border-none">
            Начать
          </button>
        </motion.div>
        <motion.div
          variants={variants}
          className={`${style["box"]} p-12  border-solid border-[0.5px] border-gray-600 flex flex-col justify-between`}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Чет делаю</h2>
          <p>
            Nullam maecenas non magna iaculis lectus rhoncus eget ridiculus.
            Egestas accumsan consequat etiam nostra dictum luctus massa
            efficitur. Pellentesque tortor luctus mauris tempor mauris a, .
          </p>
          <button className="p-3 bg-[rgb(60,60,150)] text-black border-none">
            Начать
          </button>
        </motion.div>
        <motion.div
          variants={variants}
          className={`${style["box"]} p-12  border-solid border-[0.5px] border-gray-600 flex flex-col justify-between`}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Чет делаю</h2>
          <p>
            Nullam maecenas non magna iaculis lectus rhoncus eget ridiculus.
            Egestas accumsan consequat etiam nostra dictum luctus massa
            efficitur. Pellentesque tortor luctus mauris tempor mauris a, .
          </p>
          <button className="p-3 bg-[rgb(60,60,150)] text-black border-none">
            Начать
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
