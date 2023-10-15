import React from 'react'
import styles from "./styles.module.css";
import { links } from '@/data';

const Navbar = () => {

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

  return (
    <div className={styles["navbar_main"]} id="home">
      <div className={styles["navbar_container"]}>
          {links.map(link => {
            const { id, href, text } = link;
            return (
              <a key={id} href={href}className={styles["navbar_item"]}>
                {text}
              </a>
            );
          })}
        </div>
    </div>

  )
}

export default Navbar