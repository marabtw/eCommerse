import styles from "./Field.module.scss"

const TextArea = ({placeholder = "", }) => {
	return (
		<input className={styles.textarea} placeholder={placeholder}/>
	)
}

export default TextArea
