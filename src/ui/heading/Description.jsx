import styles from "./Heading.module.scss"

function Description({ text, descriptionClassName }) {
  return <p className={styles[descriptionClassName]}>{text}</p>
}

export default Description
