import { projects } from "@/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Button from "@/components/Atoms/Button";

const Projects = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Check if `window` is defined (client-side context)
    if (typeof window !== 'undefined') {
      // Access `window.innerWidth` and `window.innerHeight`
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      // Add event listener for window resize
      window.addEventListener('resize', handleResize);

      // Initialize the window size
      handleResize();

      // Remove event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  },[]);

  console.log("windowSize", windowSize);
  return (
    <div className={styles["projects__main"]} id="projects">
      <h2 className={styles["projects__title"]}>Projects</h2>
      <p className={styles["projects__parragraph"]}>
        Here are few projects that I have wroked on
      </p>
      <div className={styles["projects__list-items-container"]}>
        {projects.map((project, index) => (
          <div key={project.id} className={styles["projects__item-container"]}>
            {(index + 1) % 2 === 0 && windowSize.width > 769 ? (
              <>
                <div className={styles["projects__item-image"]}>
                  <Image src={project.img} alt="Image project" width={windowSize.width < 500 ? 200 : 350} height={windowSize.width < 500 ? 200 :250}/>
                </div>
                <div className={styles["projects__item-text"]}>
                  <h6 className={styles["projects__item-title"]}>
                    {project.title}
                  </h6>
                  <p className={styles["projects__item-description"]}>
                    {project.description}
                  </p>
                  <div className={styles["projects__item-btns-container"]}>
                    <a href={project.webPageUrl} target="_blank">
                      <Button label={"Visit site"} isAboutParent={true} />
                    </a>
                    <a href={project.gitHubUrl} target="_blank">
                      <Button label={"Visit repo"} isAboutParent={true} />
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles["projects__item-text"]}>
                  <h6 className={styles["projects__item-title"]}>
                    {project.title}
                  </h6>
                  <p className={styles["projects__item-description"]}>
                    {project.description}
                  </p>
                  <div className={styles["projects__item-btns-container"]}>
                    <a href={project.webPageUrl} target="_blank">
                      <Button label={"Visit site"} isAboutParent={true} />
                    </a>
                    <a href={project.gitHubUrl} target="_blank">
                      <Button label={"Visit repo"} isAboutParent={true} />
                    </a>
                  </div>
                </div>
                <div className={styles["projects__item-image"]}>
                  <Image src={project.img} alt="Image project" width={windowSize.width < 500 ? 200 : 350} height={windowSize.width < 500 ? 200 :250}/>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
