import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className={styles.projectdiv} >
      <section className={styles.section3}>
      <div className={styles.container} id="projects">
        <div className={styles.projectheading}><h2 className={styles.title}>Projects</h2>
          <p className={styles.para} >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p></div>
        <div className={styles.projects}>
          {projects.map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })}
        </div>
      </div>
    </section>
    </div>

  );
};
export default Projects;