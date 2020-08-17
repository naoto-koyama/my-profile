import * as React from 'react'
import { CareerType } from '../../types/careers-type'
const styles = require('./career-card.module.scss')

type Props = {
  career: CareerType
}

const CareerCard: React.FC<Props> = ({ career }) => {
  const fromYear = new Date(career.fromDate).getFullYear()
  const toYear =
    new Date(career.toDate) > new Date()
      ? new Date().getFullYear()
      : new Date(career.toDate).getFullYear()
  return (
    <div className={styles.careerCard}>
      <p className={styles.period}>
        {fromYear} - {toYear}
      </p>
      <h3 className={styles.name}>{career.careerName}</h3>
      <p className={styles.role}>{career.role}</p>
      <p className={styles.description}>{career.description}</p>
    </div>
  )
}

export default CareerCard
