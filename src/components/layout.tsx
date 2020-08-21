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
    <div className={styles.layoutWrapper}>
      <Header title={title} />
      {title === 'OVERVIEW' ? (
        <div className={styles.profileCoverImage}></div>
      ) : (
        ''
      )}
      <div className={styles.mainWrapper}>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <SnsList color="gray"></SnsList>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
