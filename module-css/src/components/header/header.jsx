import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h3>Ram Krishna Jha</h3>
      <button className="btn">login</button>
    </div>
  )
}

export default Header
