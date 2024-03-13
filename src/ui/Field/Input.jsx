import styles from "./Field.module.scss"

const Input = ({placeholder = "", }) => {
	return (
		<input className={styles.input} placeholder={placeholder}/>
	)
}

export default Input
