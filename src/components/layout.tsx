import * as React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import SnsList from './sns-list'
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
          <SnsList color="gray"></SnsList>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
