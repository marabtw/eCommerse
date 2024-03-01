import React from "react"
import styles from "../../../assets/styles/Heading.module.scss"

function FooterHeading({ text }) {
  return <h4 className={styles.footer__subHeading}>{text}</h4>
}

export default FooterHeading
