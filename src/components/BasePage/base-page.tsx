import style from "./base-page.module.scss";

import NavigateBlock from "../navigate/navigate";
import Hero from "../hero/hero";
import Parallax from "../parallax/parallax";
import Services from "../services/services";
import Portfolio from "../portfolio/portfolio";
import Contact from "../contact/contact";

function BasePage() {
  return (
    <div className={`${style["bgPage"]} `}>
      <section id="Главная">
        <NavigateBlock />
        <Hero />
      </section>
      <section id="Проекты">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Портфолио">
        <Parallax type="portfolio" />
      </section>
      <section className="h-full">
        <Portfolio />
      </section>
      <section id="Контакты">
        <Contact />
      </section>
    </div>
  );
}

export default BasePage;
