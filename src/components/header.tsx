import * as React from 'react'
import { Link } from 'gatsby'
const styles = require('./header.module.scss')

type Props = {
  title: string
}

const Header: React.FC<Props> = ({ title }: Props) => {
  const _navigationListItems: { title: string; href: string }[] = [
    { title: 'OVERVIEW', href: '/' },
    { title: 'ABOUT', href: '/about' },
    { title: 'SKILLS', href: '/skills' },
  ]
  const _navigationList = _navigationListItems.map(item => {
    return (
      <li
        className={`${styles.pNavigationList__item} ${
          title === item.title ? styles.active : ''
        }`}
        key={item.title}
      >
        <Link to={item.href}>{item.title}</Link>
      </li>
    )
  })
  return (
    <header className={styles.lHeader}>
      <h1 className={styles.pTitle}>
        <span className={styles.pTitle__my}>My</span>
        <span className={styles.pTitle__profile}>Profile</span>
      </h1>
      <nav>
        <ul className={styles.pNavigationList}>{_navigationList}</ul>
      </nav>
    </header>
  )
}

Header.defaultProps = {
  title: ``,
}

export default Header
