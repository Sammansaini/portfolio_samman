import React, { useState } from 'react';
import styles from './Skills.module.css';
import skillsData from '../../data/skills.json';
import AddSkillForm from './AddSkillForm';

const Skills = () => {
  const [skills, setSkills] = useState(skillsData.skills);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddSkill = (newSkill) => {
    setSkills([...skills, newSkill]);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={styles.skillsSection}>
      <div className={styles.container} id="skills">
        <div className={styles.skillsHeading}>
          <h2 className={styles.title}>Skills & Languages</h2>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
        </div>
        <div className={styles.skills}>
          {skills.map((skillGroup, id) => (
            <div key={id} className={styles.skillGroup}>
              <h3 className={styles.domain}>{skillGroup.domain}</h3>
              {skillGroup.skills.map((skill, index) => (
                <div key={index} className={styles.skill}>
                  <div className={styles.nameskill}><span>{skill.name}</span><span>{skill.proficiency}%</span></div>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: `${skill.proficiency}%` }}></div>
                  </div>

                </div>
              ))}
            </div>
          ))}
        </div>
        <button className={styles.addSkillButton} onClick={openModal}>Add Skill</button>
        <AddSkillForm isOpen={isModalOpen} onRequestClose={closeModal} onAddSkill={handleAddSkill} />
      </div>
    </section>
  );
};

export default Skills;