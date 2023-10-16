import React from 'react'
import styles from "./styles.module.css"
import Button from '@/components/Atoms/Button';
import aboutMe from "../../../../public/about-me.jpeg"
import Image from 'next/image';
// import cvUrl from "../../../../public/Cv-ValentinaGómezAgudelo.pdf"


const About = () => {
  const cvUrl = "";
  return (
    <div className={styles["about__main"]} id="about">
      <div className={styles["about__title-container"]}>
        <h2 className={styles["about__tile"]}>About me!</h2>
      </div>
      <div className={styles["about__columns"]}>
        <div className={styles["about__img-container"]}>
          <Image className={styles["about__img"]} src={aboutMe} alt="About image" width={300} height={430}/>
        </div>
        <div>
          <div className={styles["about__text-container"]}>
            <p className={styles["about__text-parragraph"]}>{`I'm Valentina, originally a financial engineer, who transitioned into software development. Over the past two years, I've focused on web2 technologies like Next.js, GraphQL, ReactJS, and MongoDB. This journey has enabled me to create interactive website features, merging analytical rigor from my financial background with forward-thinking software solutions.`}</p>
            <p className={styles["about__text-parragraph"]}>{`Beyond the tech, I enjoy thins like traveling and roller skatings, and also I have a deep love for coffee. Recently, I ventured into web3 and blockchain through training at the Polkadot Blockchain Academy. I acquired essential skills for this revolutionary domain, including Substrate, FRAME, Polkadot, and smart contracts. With my financial, engineering, web development experience, and emerging blockchain knowledge, I'm eager to contribute and innovate in this dynamic space.`}</p>
            <a href={cvUrl} download="Cv-ValentinaGómezAgudelo.pdf" title="CV">
              <Button label={`Download CV`} isAboutParent={true}/>  
             </a>
          </div>
        </div>
        <svg className={styles["contact__background-details-2"]} width="73" height="70" viewBox="0 0 73 70" fill="none" xmlns="http://www.w3.org/2000/svg" id="null" class="svg replaced-svg">
          <path d="M14.8703 4.13233C17.9869 4.65276 25.8876 9.01807 25.4168 16.2356M25.4168 16.2356C25.2826 18.2941 25.0906 20.9652 22.7343 22.9175C20.2697 24.9594 15.3375 20.0807 25.4168 16.2356ZM25.4168 16.2356C31.1211 14.2288 43.2925 13.2901 46.3443 25.5901C48.2178 35.2804 43.4232 46.9584 40.8512 54.6583C46.7788 45.4157 61.7113 34.6111 69.7087 33.6089" stroke="#FED546" stroke-width="3"></path>
          <path d="M15.9116 7.72543L15.0291 3.93763L18.8267 3.09829L18.5543 1.92932L13.5847 3.0277L14.7397 7.98448L15.9116 7.72543Z" fill="#FED546"></path>
          <path d="M50.7904 65.4271C50.7236 64.3643 50.2236 61.5462 48.7581 58.7754" stroke="#FED546" stroke-width="3"></path>
          <path d="M68.4524 65.3191C65.6115 62.2671 58.4138 55.7598 52.3503 54.1463" stroke="#FED546" stroke-width="3"></path>
          <path d="M26.2685 4.41973C27.7062 4.33857 30.5292 7.35779 29.6686 10.3576" stroke="#FED546" stroke-width="3"></path>
        </svg>
      </div>
    </div>
  )
}

export default About