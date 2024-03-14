import styles from './Heading.module.scss'

function SectionHeading({ text,uppercase }) {
  return <h2 className={`${styles.section__heading} ${uppercase && "uppercase"}`}>{text}</h2>
}

export default SectionHeading
