import React from "react";
import style from "./style.module.scss";
import Title from "../components/title/title";
import data from "../../no-components/skillsData";

export default function Skills() {
  return (
    <section id="skills" className={style.skills}>
      <Title md>SKILLS</Title>

      <ul className={style.skills__list}>
        {data.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </section>
  );
}
