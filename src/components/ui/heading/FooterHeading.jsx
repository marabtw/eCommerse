import React from "react"
import styles from "../../../assets/styles/Heading.module.scss"

function FooterHeading({ text = "", uppercase = false }) {
  return <h4 className={`${styles.footer__subHeading} ${uppercase && "uppercase"}`}>{text}</h4>
}

export default FooterHeading
