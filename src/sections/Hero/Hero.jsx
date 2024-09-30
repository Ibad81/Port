import styles from './HeroStyles.module.css';
import heroImg from '../../assets/ib2.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg'
import twitterlight from '../../assets/twitter-light.svg';
import twitterdark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import {useTheme} from '../../common/ThemeContext'
import React from 'react';

function Hero() {
    const {theme,toggleTheme}=useTheme();
    
    const themeIcon=theme==='light'?sun:moon;
    const twitterIcon=theme==='light'?twitterlight:twitterdark;
    const githubIcon=theme==='light'?githubLight:githubDark;
    const linkedinIcon=theme==='light'?linkedinLight:linkedinDark;

  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer} data-aos="fade-left"
            data-aos-duration="1200">
            <img className={styles.hero} src={heroImg} alt="Profile Picture Of Ibad Baig"></img>
            <img className={styles.colorMode} src={themeIcon} alt="Color made Icon" onClick={toggleTheme}/>
        </div>
        <div className={styles.info} data-aos="fade-right" data-aos-duration="1200">
        <p>
            Hello, I'm
        </p>
        <h1 >
            Ibad Baig
        </h1>
        <h2>Web Developer</h2>
        <span>
            
            <a href="https://github.com/Ibad81" target='_blank'>
                <img src={githubIcon} alt="Github Icon"></img>
            </a>
            <a href="https://www.linkedin.com/in/ibad-baig-06226b1ba/" target='_blank'>
                <img src={linkedinIcon} alt="Linkedin Icon"></img>
            </a>
        </span>
        <p className={styles.description}>
            With passion for developing modern React web apps.
        </p>
        <a href={CV} download>
            <button className="hover">Resume</button>
        </a>
        </div>
    </section>
  )
}

export default Hero;

