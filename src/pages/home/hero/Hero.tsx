import React from 'react';
import { Carousel } from 'antd';
import hero1 from "../../../assets/images/hero/hero1.webp";
import hero2 from "../../../assets/images/hero/hero2.webp";
import hero3 from "../../../assets/images/hero/hero3.webp";
import styles from './Hero.module.css'; // Import the CSS module

const Hero: React.FC = () => {
  return (
    <div className={styles.carousel}>
      <Carousel arrows infinite={false}>
        <div className={styles['carousel-item']}>
          <img src={hero1} alt="Hero 1" />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles['carousel-item']}>
          <img src={hero2} alt="Hero 2" />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles['carousel-item']}>
          <img src={hero3} alt="Hero 3" />
          <div className={styles.overlay}></div>
        </div>
      </Carousel>
    </div>
  );
}

export default Hero;
