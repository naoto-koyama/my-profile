import * as React from 'react'
import { SkillType } from '../../types/skill-type'
const styles = require('./skill-card.module.scss')

type Props = {
  skill: SkillType
  children?: never
}

const SkillCard: React.FC<Props> = ({ skill }) => {
  const skillName = skill.skillName
  const skillLevel = skill.skillLevel || 0
  return (
    <div className={styles.skillCard}>
      <h3 className={styles.skillName}>{skillName}</h3>
      <ul className={styles.skillLevelList}>
        {[...Array(5)].map((_, index) => {
          const notHaveStyle = index < skillLevel ? '' : ` ${styles.notHave}`
          return (
            <li
              className={`${styles.skillLevelList__item}${notHaveStyle}`}
              key={index}
            ></li>
          )
        })}
      </ul>
    </div>
  )
}

export default SkillCard
