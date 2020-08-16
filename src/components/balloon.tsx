import * as React from 'react'
const styles = require('./balloon.module.scss')

type Props = {
  text: string
}

const Balloon: React.FC<Props> = ({ text }) => {
  return (
    <div className={styles.balloon}>
      <p>{text}</p>
    </div>
  )
}

export default Balloon
