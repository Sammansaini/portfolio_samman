import React, { useEffect, useState } from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className={styles.section2}> <div className={`${styles.container} `}>
            <img className={styles.ellipse1} src={getImageUrl("hero/Ellipse 15.png")} alt="" />
            <div className={styles.content}>
                <h1 className={styles.title} >
                    I'm Samman Saini<br />
                    <span style={{ color: '#FFB400' }}>Front-end</span> Developer
                </h1>
                <div className={styles.description} style={{ maxWidth: '500px', color: '#767676' }}>
                    <p>I'm Samman Saini, currently pursing BTech in Computer Science at IIIT Bhopal. I am trying to become a full-stack engineer, focusing on user interfaces.</p>
                </div>
                <button className={styles.contactBtn}>HIRE ME ➜</button>
            </div>
            <img src={getImageUrl("hero/hero2.png")} alt="Hero Image" className={styles.heroImg} />
        </div></section>

    );
}

export default Hero;
