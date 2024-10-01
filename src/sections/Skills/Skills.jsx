import React from 'react'
import skills from "../../common/skills.json";
import styles from '../../sections/Skills/SkillsStyles.module.css'
const Skills=()=> {
  return (
    <>
    <div className={styles.skill}>
      <h1 data-aos="zoom-in"
     data-aos-duration="1200">SKILLS</h1>
      <div className={styles.items} >
        {skills.map((data)=>(
          <>
            <div className={styles.item}
            key={data.id}
            data-aos="flip-left"
            data-aos-duration="1000"
            >
              <img src={require(`/src/assets/${data.imageSrc}`)} alt={data.title} />
              <p className={styles.hed3}>{data.title}</p>
            </div>
          </>
        ))}
      </div>
    </div>
    </>
  );
}

export default Skills
