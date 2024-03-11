import React, { useState } from "react"
import styles from "./Header.module.scss"
import { UserIcon, CartIcon, SearchIcon } from "../../components/ui/icons/icons"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const [authed, setAuthed] = useState(false)
  const location = useLocation()

  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>GIFTOS</h1>
      <ul
        className={`${styles.header__nav} ${
          location.pathname === "/" ? styles.main : ""
        }`}
      >
        <li
          className={`${styles.header__item} ${
            location.pathname === "/" ? styles.active : ""
          }`}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={`${styles.header__item} ${
            location.pathname === "/shop" ? styles.active : ""
          }`}
        >
          <Link to="/shop">Shop</Link>
        </li>
        <li
          className={`${styles.header__item} ${
            location.pathname === "/why-us" ? styles.active : ""
          }`}
        >
          <Link to="/why-us">Why Us</Link>
        </li>
        <li
          className={`${styles.header__item} ${
            location.pathname === "/contact-us" ? styles.active : ""
          }`}
        >
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li className={styles.header__item}>
          <div className={styles.header__login}>
            {!authed ? (
              <Link to="/login">
                <UserIcon className={styles.header__icon} />
                <span>Login</span>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
          <CartIcon className={styles.header__icon} />
          <SearchIcon className={styles.header__icon} />
        </li>
      </ul>
    </header>
  )
}

export default Header
