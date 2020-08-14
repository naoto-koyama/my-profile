import * as React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import { Link } from 'gatsby'
import { FaGithub, FaTwitter, FaFacebook, FaSpeakerDeck } from 'react-icons/fa'

const styles = require('./layout.module.scss')

type Props = {
  children: React.ReactNode
  title: string
}

const Layout: React.FC<Props> = ({ children, title }: Props) => {
  return (
    <>
      <Header title={title} />
      <div className={styles.lWrapper}>
        <main className={styles.lMain}>{children}</main>
        <footer className={styles.lFooter}>
          <ul>
            <li>
              <Link to="https://github.com/naoto-koyama">
                <FaGithub></FaGithub>
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com/naoto324">
                <FaTwitter></FaTwitter>
              </Link>
            </li>
            <li>
              <Link to="https://www.facebook.com/profile.php?id=100032675406473">
                <FaFacebook></FaFacebook>
              </Link>
            </li>
            <li>
              <Link to="https://speakerdeck.com/naotokoyama">
                <FaSpeakerDeck></FaSpeakerDeck>
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
