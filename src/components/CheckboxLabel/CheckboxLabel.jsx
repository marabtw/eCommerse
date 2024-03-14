import styles from "./CheckboxLabel.module.scss"

const CheckboxLabel = ({ name }) => {
  return (
    <label htmlFor={`checkbox_${name}`} className={styles.container}>
      <input type="checkbox" id={`checkbox_${name}`} />
      <span className={styles.checkmark}></span>
      <p>{name}</p>
    </label>
  )
}

export default CheckboxLabel
