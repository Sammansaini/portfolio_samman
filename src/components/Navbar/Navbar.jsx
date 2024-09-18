import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

const Navbar = ({ onTabClick }) => {
    const [activeTab, setActiveTab] = useState('home');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        onTabClick(tab);
    };

    return (
        <div className={styles.navi}>
            <section className={styles.section1}>
                <nav className={styles.navbar}>
                    <div className={styles.logo} id="#Navbar">
                        <a href="/">
                            <img
                                src={getImageUrl("home/logo.png")}
                                alt="Portfolio Logo"
                            />
                        </a>
                    </div>
                    <div className={styles.menu}>
                        <ul className={styles.menuItems}>
                            <li
                                className={activeTab === 'home' ? styles.active : ''}
                                onClick={() => handleTabClick('home')}
                            >
                                <a href="#hero">Home</a>
                            </li>
                            <li
                                className={activeTab === 'skills' ? styles.active : ''}
                                onClick={() => handleTabClick('skills')}
                            >
                                <a href="#skills">Skills</a>
                            </li>
                            <li
                                className={activeTab === 'education' ? styles.active : ''}
                                onClick={() => handleTabClick('education')}
                            >
                                <a href="#projects">Education</a>
                            </li>
                            <li
                                className={activeTab === 'projects' ? styles.active : ''}
                                onClick={() => handleTabClick('projects')}
                            >
                                <a href="#projects">Projects</a>
                            </li>
                            <li
                                className={activeTab === 'recommendations' ? styles.active : ''}
                                onClick={() => handleTabClick('recommendations')}
                            >
                                <a href="#recommendations">Recommendations</a>
                            </li>
                            <li
                                className={activeTab === 'contact' ? styles.active : ''}
                                onClick={() => handleTabClick('contact')}
                            >
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
            <div className={styles.navbarPlaceholder}></div>
        </div>
    );
};

export default Navbar;