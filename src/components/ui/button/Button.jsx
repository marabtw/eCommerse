import React from "react"
import styles from "../../../assets/styles/Button.module.scss"

const Button = ({ text = "button", color = "default", uppercase = false }) => {
  return (
    <button
      className={`${styles.button} ${styles[`button_${color}`]} ${
        uppercase && "uppercase"
      }`}
    >
      {text}
    </button>
  )
}

export default Button
