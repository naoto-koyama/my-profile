import * as React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'
import { FaTimes } from 'react-icons/fa'
const styles = require('./header.module.scss')

type Props = {
  title: string
}

const Header: React.FC<Props> = ({ title }) => {
  const [isTopScroll, setIsTopScroll] = useState(title === 'OVERVIEW')
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  if (title === 'OVERVIEW' && typeof window !== 'undefined') {
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
    <>
      <header
        className={`
          ${isTopScroll ? styles.headerTopPosition : styles.headerScrolled}
          ${isSideMenuOpen ? styles.sideMenuOpen : ''}
        `}
      >
        <h1 className={styles.title}>
          <Link to={'/'}>
            <span className={styles.title__my}>My</span>
            <span className={styles.title__profile}>Profile</span>
          </Link>
        </h1>
        <nav className={styles.navigation}>
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
        <div
          className={styles.menu}
          onClick={(): void => {
            setIsSideMenuOpen(true)
          }}
        >
          <span>MENU</span>
        </div>
      </header>
      <div
        className={`${styles.sideBar}  ${
          isSideMenuOpen ? styles.isActive : ''
        }`}
      >
        <FaTimes
          className={styles.closeIcon}
          onClick={(): void => {
            setIsSideMenuOpen(false)
          }}
        ></FaTimes>
        <ul className={styles.navigationList}>
          {_navigationListItems.map(item => {
            return (
              <li className={`${styles.navigationList__item}`} key={item.title}>
                <Link
                  to={item.href}
                  className={title === item.title ? styles.active : ''}
                >
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Header
