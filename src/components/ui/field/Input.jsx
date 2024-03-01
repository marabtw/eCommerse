import styles from "../../../assets/styles/Field.module.scss"
import React from 'react'

const Input = ({placeholder = "", }) => {
	return (
		<input className={styles.input} placeholder={placeholder}/>
	)
}

export default Input
