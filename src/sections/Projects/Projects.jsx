import React from 'react'
import styles from './ProjectsStyles.module.css'
import Cp from '../../assets/College-pic.png'
import BG from '../../assets/Blog-App.png'
import Travel from '../../assets/Travel-pic.jpg'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className='sectionTitle'>
        Projects
      </h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
        src={Cp}
        link={'https://github.com/ibad81'}
        h3="CP"
        p="Lore"
        />
        <ProjectCard 
        src={BG}
        link={'https://github.com/ibad81'}
        h3="BLOG APP"
        p="Lore"
        />
        <ProjectCard 
        src={Travel}
        link={'https://github.com/ibad81'}
        h3="Tour"
        p="Lore"
        />
        <ProjectCard 
        src={Travel}
        link={'https://github.com/ibad81'}
        h3="Tour"
        p="Lore"
        />
      </div>
    </section>

  )
}

export default Projects;
