import styles from "../../../assets/styles/Field.module.scss"
import React from 'react'

const TextArea = ({placeholder = "", }) => {
	return (
		<input className={styles.textarea} placeholder={placeholder}/>
	)
}

export default TextArea
