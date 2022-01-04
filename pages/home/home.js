import React from "react";
import style from "./home.module.scss";
import Button from "../components/button/button";
import Icon from "feather-icons-react";

export default function SectionInitial() {
  return (
    <>
      <section className={style.home}>
        <div className={style.home__container}>
          <h1 className={style.home__title}>
            THIAGO
            <br /> MENEZES
          </h1>
          <p className={style.home__description}>
            UX <span className={style.descriptionBar}>/</span> UI{" "}
            <span className={style.descriptionBar}>/</span> DESIGNER{" "}
            <span className={style.descriptionBar}>/</span> FRONTENDER
          </p>
        </div>
        <Button
          click={() => goToSection("sobre")}
          link="projetos"
          letterSpacing
          transparent
          style="margin: 0 auto"
        >
          <Icon icon="chevrons-down" />
          <br />
          SCROLL
        </Button>
      </section>
    </>
  );
}

const goToSection = (link) => {
  document.location.hash = link;
};
