import * as React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'
const styles = require('./header.module.scss')

type Props = {
  title: string
}

const Header: React.FC<Props> = ({ title }) => {
  const [isTopScroll, setIsTopScroll] = useState(title === 'OVERVIEW')
  if (title === 'OVERVIEW') {
    window.addEventListener('scroll', (): void => {
      setIsTopScroll(window.scrollY === 0)
    })
  }

  const _navigationListItems: { title: string; href: string }[] = [
    { title: 'OVERVIEW', href: '/' },
    { title: 'ABOUT', href: '/about' },
    { title: 'SKILLS', href: '/skills' },
  ]
  return (
    <header
      className={isTopScroll ? styles.headerTopPosition : styles.headerScrolled}
    >
      <h1 className={styles.title}>
        <span className={styles.title__my}>My</span>
        <span className={styles.title__profile}>Profile</span>
      </h1>
      <nav>
        <ul className={styles.navigationList}>
          {_navigationListItems.map(item => {
            return (
              <li
                className={`${styles.navigationList__item} ${
                  title === item.title ? styles.active : ''
                } ${
                  title === 'OVERVIEW' && isTopScroll
                    ? styles.isPositionTop
                    : ''
                }`}
                key={item.title}
              >
                <Link to={item.href}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
