import * as React from 'react'
const styles = require('./twitter.module.scss')

const Twitter: React.FC = () => {
  return (
    <>
      <h2 className={styles.title}>Twitter</h2>
      <div className={styles.timeLineWrapper}>
        <a
          className={`twitter-timeline ${styles.timeLine}`}
          data-height="300"
          href="https://twitter.com/naoto324?ref_src=twsrc%5Etfw"
        >
          Tweets by naoto324
        </a>
      </div>
    </>
  )
}

export default Twitter
