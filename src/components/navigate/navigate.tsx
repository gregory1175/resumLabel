import style from "./navigate.module.scss";
import instagram from "../../assets/media/instagram.svg";
import telegram from "../../assets/media//telegram.svg";
import linkedIn from "../../assets/media/linkedIn.svg";
import whatsApp from "../../assets/media/whatsapp.svg";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/sidebar";

function NavigateBlock() {
  return (
    <div className={style["navbar"]}>
      <Sidebar />
      <div className={style["navbar_wrapper"]}>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-bold"
        >
          G02 Dev
        </motion.span>
        <div className={`${style["social"]} flex gap-5 `}>
          <a href="#">
            <img src={instagram} alt="instagram" className="w-5 h-5" />
          </a>
          <a href="#">
            <img src={telegram} alt="telegram" className="w-5 h-5" />
          </a>
          <a href="#">
            <img src={linkedIn} alt="linkedIn" className="w-5 h-5" />
          </a>
          <a href="#">
            <img src={whatsApp} alt="whatsApp" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavigateBlock;
