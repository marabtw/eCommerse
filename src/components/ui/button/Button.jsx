import React from "react"
import styles from "../../../assets/styles/Button.module.scss"

const Button = ({
  text = "button",
  color = "default",
  uppercase = false,
  tabIndexStatus,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[`button_${color}`]} ${
        uppercase && "uppercase"
      }`}
      tabIndex={tabIndexStatus && tabIndexStatus}
    >
      {text}
    </button>
  )
}

export default Button
