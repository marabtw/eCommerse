import React from "react"
import styles from "../../../assets/styles/Button.module.scss"

const Button = ({ buttonText }) => {
  return <button className={styles.button}>{buttonText}</button>
}

export default Button
