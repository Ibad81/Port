import React from 'react'

function SkillsList({src,skill}) {
  return (
        <span>
            <img src={src} alt="Checkmark icon"></img>
            <p>
                {skill}
            </p>
        </span>
  )
}

export default SkillsList;
