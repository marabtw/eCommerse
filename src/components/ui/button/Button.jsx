import React from "react"
import styles from "../../../assets/styles/Button.module.scss"

const Button = ({
  text = "button",
  color = "default",
  uppercase = false,
  tabIndexStatus,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[`button_${color}`]} ${
        uppercase && "uppercase"
      }`}
      tabIndex={tabIndexStatus && tabIndexStatus}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
