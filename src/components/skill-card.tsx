import * as React from 'react'
const styles = require('./skill-card.module.scss')

type Props = {
  skillName: string | null | undefined
  skillLevel: number | null | undefined
}

const SkillCard: React.FC<Props> = (props: Props) => {
  const skillName = props.skillName
  const skillLevel = props.skillLevel || 0
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
