import React from "react"
import styles from "./Header.module.scss"
import { UserIcon, CartIcon, SearchIcon } from "../../components/ui/icons/icons"
import Heading from "../../components/ui/heading/Heading"

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>GIFTOS</h1>
      <ul className={`${styles.header__nav} ${styles.main}`}>
        <li className={`${styles.header__item} ${styles.active}`}>Home</li>
        <li className={`${styles.header__item}`}>Shop</li>
        <li className={`${styles.header__item}`}>why us</li>
        <li className={`${styles.header__item}`}>contact us</li>
        <li className={`${styles.header__item}`}>
          <div className={styles.header__login}>
            <UserIcon className={styles.header__icon}/>
            <span>Login</span>
          </div>
          <CartIcon className={styles.header__icon}/>
          <SearchIcon className={styles.header__icon}/>
        </li>
      </ul>
    </header>
  )
}

export default Header
