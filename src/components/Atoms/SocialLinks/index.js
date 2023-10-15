import Link from 'next/link'
import React from 'react'
import { FiLinkedin, FiGithub } from "react-icons/fi";
import styles from "./styles.module.css";

const SocialLinks = () => {
  return (
    <div className={styles["header__main-fi-container"]}>
      <Link href="https://www.linkedin.com/in/valentinaga1/" target='_blank'>
        <FiLinkedin className={styles["header__main-fi"]}/>
      </Link>
      <Link href="https://github.com/Valentinaga1" target='_blank'>
        <FiGithub className={styles["header__main-fi"]}/>
      </Link>
      <i className="fab fa-linkedin"></i>
    </div>

  )
}

export default SocialLinks