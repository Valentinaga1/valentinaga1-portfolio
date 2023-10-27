import React, { useEffect, useState } from 'react'
import styles from "./styles.module.css";
import headerImage from "../../../../public/valentinaga1.jpg"
import Image from 'next/image';

import Link from 'next/link';

import SocialLinks from '@/components/Atoms/SocialLinks';
import Button from '@/components/Atoms/Button';


const Hero = ( {scrollToSection}) => {
  const [sentence, setSentence] = useState("");
  const sentences = [
  `a full stack developer💻`,
  `a blockchain developer enthusiast🔗`,
  `a coffee lover☕`,
  ];
  let currentSentenceIndex = 0;
  
  function typeSentence() {
    let newSentence = sentences[currentSentenceIndex];
    typewriter.textContent = sentences[currentSentenceIndex];
    currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
    setSentence(newSentence)
  }

  useEffect(() => {
    typeSentence();
    const interval = setInterval(typeSentence, 7000);

    return () => clearInterval(interval);
  }, []);

  console.log("sentence", sentence);
  console.log("currentSentenceIndex", currentSentenceIndex);
  
  return (
    <>
      <main className={styles["header"]} id="home">
        <div className={styles["main"]}>
          <div className={styles["header__main-img-container"]}>
            <Image className={styles["header__main-img"]} src={headerImage} alt=""/>
          </div>
         <div className={styles["header__main-title-container"]}>
            <h2 className={styles["header__main-title"]}>Hi! I am Valentina👋 Nice to meet you. I am...</h2>
          </div>
           <div className={styles["header__main-sentences-container"]}>
            <p className={styles["header__main-sentences-parragraph"]} id="typewriter">{sentence}</p>
          </div>
          <div onClick={scrollToSection}>
            <Button label={`Let's Talk!`} />
          </div>
        </div>
      </main>
      <div className={styles["header__footer"]}>
        <SocialLinks />
      </div>
    </>
  )
}

export default Hero