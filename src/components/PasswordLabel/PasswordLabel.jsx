import { useState } from "react"
import styles from "./PasswordLabel.module.scss"
import Input from "../../ui/Field/Input"
import { ShowIcon, HIdeIcon } from "../../ui/icons/icons"

const PasswordLabel = () => {
  const [passwordShow, setPasswordShow] = useState(false)

  const random = Math.floor(Math.random() * 99999)

  return (
    <label htmlFor={`input&${random}`}>
      <Input
        style={{
          position: "relative",
          paddingRight: "2rem",
        }}
        placeholder="Password"
        type={passwordShow ? "text" : "password"}
        id={`input&${random}`}
      />
      {passwordShow ? (
        <ShowIcon
          className={styles.icon}
          onClick={(e) => {
            e.preventDefault()
            setPasswordShow(false)
          }}
        />
      ) : (
        <HIdeIcon
          className={styles.icon}
          onClick={(e) => {
            e.preventDefault()
            setPasswordShow(true)
          }}
        />
      )}
    </label>
  )
}

export default PasswordLabel
