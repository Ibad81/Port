import React from 'react'

function ProjectCard({src,link,h3,p}) {
  return (
    <>
    <a href={link} target='_blank'data-aos="zoom-in"
     data-aos-duration="1200">
          <img className="hover" src={src} alt={`${h3} logo`} ></img>
          <h3>{h3}</h3>
          
    </a>
    <p data-aos="zoom-in"
     data-aos-duration="1200">{p}</p>
    </>
  )
}

export default ProjectCard
