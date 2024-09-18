import React from 'react';
import styles from './Footer.module.css'
import { getImageUrl } from "../../utils";

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer1}>
        <section className={styles.footerSection} >
            <div className={styles.logo}>
                <div><img src={getImageUrl("Footer/Frame.png")} alt="" /></div>
            </div>
            <div className={styles.logo}>
                <div><img src={getImageUrl("Footer/Frame (1).png")} alt="" /></div>
            </div>
            <div className={styles.logo}>
                <div><img src={getImageUrl("Footer/Frame (2).png")} alt="" /></div>
            </div>
            <div className={styles.logo}>
                <div><img src={getImageUrl("Footer/Frame (3).png")} alt="" /></div>
            </div>
        </section>
        </div>
      <section className={styles.frame270} >
            <img className={styles.logo1} src={getImageUrl("Footer/Rectangle 181.png")} alt="" />

            <div className={styles.frame271} >
                <div className={styles.logos} >
                <img src={getImageUrl("Footer/Upwork.png")} alt="" />
                <img src={getImageUrl("Footer/Dribble.png")} alt="" />
                <img src={getImageUrl("Footer/Fiverr.png")} alt="" />
                </div>

                <div className={styles.links}>
                    <div className={styles.quicklinks} >
                        <h4>Quick Links</h4>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#Recommendations">Recommendations</a></li>

                    </div>
                    <div className={styles.portfolio} >
                        <h4>Portfolio</h4>
                        <li>Frontend Developer</li>
                        <li>Backend Developer</li>
                        <li>Website Design</li>
                        <li>Machine Learning</li>
                        <li>Problem Solving & DSA</li>

                    </div>
                    <div className={styles.connect} >
                        <h4>Connect</h4>
                        <div className={styles.social} >
                        <img src={getImageUrl("Footer/LinkedIn.png")} alt="" />
                        <img src={getImageUrl("Footer/Instagram.png")} alt="" />
                        <img src={getImageUrl("Footer/Facebook.png")} alt="" />
                        </div>

                    </div>

                </div>
            </div>
      </section>
      <div className={styles.copyRightMain} >
        <div className={styles.copyright} >
            © 2024 Copyright, All Right Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
