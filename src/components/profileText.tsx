import * as React from 'react'
const styles = require('./profile-text.module.scss')

type Props = {
  greetingText: string | null | undefined
}

const ProfileText: React.FC<Props> = ({ greetingText }) => {
  return <p className={styles.profileText}>{greetingText}</p>
}

export default ProfileText
