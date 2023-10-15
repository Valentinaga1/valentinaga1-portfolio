import React from 'react'
import styles from "./styles.module.css"

const Footer = () => {
  return (
    <div className={styles["footer__main"]} id="footer">
      <div className={styles["footer__initials-container"]}>
        <p className={styles["footer__initials"]}>VG</p>
      </div>
      <div className={styles["footer__parragraph-container"]}>
        <p className={styles["footer__parragraph"]}>Valentina Gómez</p>
        <p className={styles["footer__parragraph"]}>2023</p>
      </div>
    </div>
  )
}


export default Footer