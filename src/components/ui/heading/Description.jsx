import React from "react"
import styles from "../../../assets/styles/Heading.module.scss"

function Description({ text, descriptionClassName }) {
  return <p className={styles[descriptionClassName]}>{text}</p>
}

export default Description
