import React from 'react'
import styles from "./styles.module.css";

const Button = ({ label, isAboutParent }) => {
  return (
    <div className={isAboutParent ? styles["btn__container-parent"]: styles["btn__container"]}>
      <button className={isAboutParent ? styles["btn__label-parent"] : styles["btn__label"]}>{label}</button>
     </div>
  )
}

export default Button