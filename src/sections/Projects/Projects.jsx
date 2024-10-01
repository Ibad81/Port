import React from 'react'
import styles from './ProjectsStyles.module.css'
import Cp from '../../assets/College-pic.png'
import BG from '../../assets/Blog-App.png'
import Travel from '../../assets/Travel-pic.jpg'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className='sectionTitle' data-aos="zoom-in"
     data-aos-duration="1200">
        Projects
      </h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
        src={Cp}
        link={'https://github.com/ibad81/GLA-PORTAL'}
        h3="CP"
        p="Created a responsive website for students to access college materials, featuring a minimalist design and optimized performance. Built with HTML, CSS, JavaScript, and PHP."
        
        />
        <ProjectCard 
        src={Travel}
        link={'https://github.com/Ibad81/Tour'}
        h3="BLOG APP"
        p="Developed a dynamic, responsive personal blog using React, HTML, CSS, and JavaScript."
        />
        <ProjectCard 
        src={BG}
        link={'https://github.com/Ibad81/blog'}
        h3="Tour"
        p="Built a responsive tour booking app with interactive features using React, HTML, CSS, and JavaScript."
        />
        
      </div>
    </section>

  )
}

export default Projects;
