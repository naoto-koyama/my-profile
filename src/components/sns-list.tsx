import * as React from 'react'
import { Link } from 'gatsby'
import { FaGithub, FaTwitter, FaFacebook, FaSpeakerDeck } from 'react-icons/fa'
const styles = require('./sns-list.module.scss')

type Props = {
  color: string
}

const SnsList: React.FC<Props> = ({ color }) => {
  const iconClass = styles[color]
  return (
    <ul className={styles.snsList}>
      <li>
        <Link to="https://github.com/naoto-koyama">
          <FaGithub className={iconClass}></FaGithub>
        </Link>
      </li>
      <li>
        <Link to="https://twitter.com/naoto324">
          <FaTwitter className={iconClass}></FaTwitter>
        </Link>
      </li>
      <li>
        <Link to="https://www.facebook.com/profile.php?id=100032675406473">
          <FaFacebook className={iconClass}></FaFacebook>
        </Link>
      </li>
      <li>
        <Link to="https://speakerdeck.com/naotokoyama">
          <FaSpeakerDeck className={iconClass}></FaSpeakerDeck>
        </Link>
      </li>
    </ul>
  )
}

export default SnsList
