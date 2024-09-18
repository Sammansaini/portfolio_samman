import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './AddSkillForm.module.css';

const AddSkillForm = ({ isOpen, onRequestClose, onAddSkill }) => {
  const [domain, setDomain] = useState('');
  const [skills, setSkills] = useState([
    { name: '', proficiency: '' },
    { name: '', proficiency: '' },
    { name: '', proficiency: '' },
    { name: '', proficiency: '' },
    { name: '', proficiency: '' },
  ]);

  const handleChange = (index, field, value) => {
    const newSkills = [...skills];
    newSkills[index][field] = value;
    setSkills(newSkills);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSkill = {
      id: Date.now(),
      domain,
      skills: skills.map(skill => ({
        name: skill.name,
        proficiency: parseInt(skill.proficiency),
      })),
    };
    onAddSkill(newSkill);
    setDomain('');
    setSkills([
      { name: '', proficiency: '' },
      { name: '', proficiency: '' },
      { name: '', proficiency: '' },
      { name: '', proficiency: '' },
      { name: '', proficiency: '' },
    ]);
    onRequestClose();
  };

  return (
    <div className={styles.addSkillContainer}>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <h2 className={styles.title}>Add Skill</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>Domain</label>
          <input
            type="text"
            className={styles.input}
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            required
          />
          <label className={styles.label}>Skills</label>
          <div className={styles.skillsHeader}>
            <span className={styles.headerSkill}>Skill</span>
            <span className={styles.headerProficiency}>Proficiency (%)</span>
          </div>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillsContainer}>
              <input
                type="text"
                placeholder="Skill"
                className={styles.input}
                value={skill.name}
                onChange={(e) => handleChange(index, 'name', e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Proficiency (%)"
                className={styles.input}
                value={skill.proficiency}
                onChange={(e) => handleChange(index, 'proficiency', e.target.value)}
                required
              />
            </div>
          ))}
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.addSkillButton}>ADD SKILL</button>
            <button type="button" className={styles.cancelButton} onClick={onRequestClose}>CANCEL</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddSkillForm;
