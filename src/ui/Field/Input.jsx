import styles from "./Field.module.scss"

const Input = ({ placeholder = "", type = "text", id = "", style = {} }) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      type={type}
      id = {id ? id : ''}
			style={style}
    />
  )
}

export default Input
