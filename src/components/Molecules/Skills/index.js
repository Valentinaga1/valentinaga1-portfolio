import React, { useEffect, useRef, useState } from 'react';
import styles from "./styles.module.css";
import { skills } from '@/data';
import { ProgressBar } from 'primereact/progressbar';
import Image from 'next/image';


const Skills = () => {

  return (
    <div className={styles["skills__main"]} id="skills">
      <div className={styles["skills__main-container"]} id="skills">
        <div className={styles["skills__title-container"]}>
          <h2 className={styles["skills__title"]}>My skills</h2>
        </div>
        <div className={styles["skills__list-container"]}>
          {skills.map(skill =>  (
              <div key={skill.id}  className={styles["skills__list-item-container"]}>
                <div className={styles["skills__list-item"]}>
                  <p  className={styles["skills__list-item-parragraph"]}>{skill.title}</p>
                  <Image src={skill.icon } alt="icon" width={50} height={50}/>
                </div>
              </div>
            )
          )}
        </div>

      </div>
    </div>
  )
}

export default Skills
