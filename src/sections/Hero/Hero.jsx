import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import twitterIcon from '../../assets/twitter-light.svg';
import githubIcon from '../../assets/github-light.svg';
import linkedinIcon from '../../assets/linkedin-light.svg';
import CV from '../../assets/cv.pdf';
import {useTheme} from '../../common/ThemeContext'
import React from 'react';

function Hero() {
    const {theme,toggleTheme}=useTheme();
    
  return (
    <section id="hero">
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="Profile Picture Of Ibad Baig"></img>
            <img className={styles.colorMode} src={themeIcon} alt="Color made Icon"/>
        </div>
        <div className={styles.info}>
        <h1>
            Ibad <br/>Baig
        </h1>
        <h2>Web Developer</h2>
        <span>
            <a href="https:twitter.com" target='_blank'>
                <img src={twitterIcon} alt="Twitter Icon"></img>
            </a>
            <a href="https:github.com" target='_blank'>
                <img src={githubIcon} alt="Github Icon"></img>
            </a>
            <a href="https:linkedin.com" target='_blank'>
                <img src={linkedinIcon} alt="Linkedin Icon"></img>
            </a>
        </span>
        <p>
            With passion for developing modern React web apps For Commercial
            businesses.
        </p>
        <a href={CV} download>
            <button className="hover">Resume</button>
        </a>
        </div>
    </section>
  )
}

export default Hero;

