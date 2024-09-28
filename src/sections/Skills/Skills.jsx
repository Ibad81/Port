import React from 'react'
import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillsList from '../../common/SkillsList';
function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 id="title" className='SectionTitle'>Skills</h1>
        <div className={styles.skillsList}>
            <SkillsList src={checkMarkIcon} skill="HTML"/>
            <SkillsList src={checkMarkIcon} skill="css"/>
            <SkillsList src={checkMarkIcon} skill="Javascript"/>
            <SkillsList src={checkMarkIcon} skill="Node"/>
            <SkillsList src={checkMarkIcon} skill="HTML"/>
        </div>
        <hr/>
        <div className={styles.skillsList}>
            <SkillsList src={checkMarkIcon} skill="HTML"/>
            <SkillsList src={checkMarkIcon} skill="HTML"/>
            <SkillsList src={checkMarkIcon} skill="HTML"/>
            <SkillsList src={checkMarkIcon} skill="HTML"/>
        </div>
        <hr/>
        <div className={styles.skillsList}>
            <SkillsList src={checkMarkIcon} skill="HTML"/>
            <SkillsList src={checkMarkIcon} skill="HTML"/>
            <SkillsList src={checkMarkIcon} skill="HTML"/>
            <SkillsList src={checkMarkIcon} skill="HTML"/>
        </div>
    </section>
  )
}

export default Skills
