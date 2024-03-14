import { useState } from "react"
import styles from "./LoginForm.module.scss"
import Button from "../../ui/Button/Button"
import {
  GooglePlusIcon,
  FacebookIcon,
  TwitterIcon,
} from "../../ui/icons/icons"

import PasswordLabel from "../../components/PasswordLabel/PasswordLabel"
import Input from "../../ui/Field/Input"

const LoginForm = () => {
  const [passwordShow, setPasswordShow] = useState(false)
  const [activeStatus, setActiveStatus] = useState(false)

  const toggleActive = (value) => {
    setActiveStatus(value)
  }

  return (
    <div className={styles.login}>
      <div
        className={`${styles.login__container} ${
          activeStatus ? styles.active : ""
        }`}
      >
        <div className={`${styles.login__form} ${styles.sign_up}`}>
          <form>
            <h1>Create Account</h1>
            <div className={`${styles.login__socialIcons}`}>
              <GooglePlusIcon />
              <FacebookIcon />
              <TwitterIcon />
            </div>
						<Input placeholder="Name" type="text"/>
						<Input placeholder="Email" type="email"/>
            <PasswordLabel />
            <Button text="Sign Up" color="blue" />
          </form>
        </div>
        <div className={`${styles.login__form} ${styles.sign_in}`}>
          <form>
            <h1>Sign In</h1>
            <div className={`${styles.login__socialIcons}`}>
              <GooglePlusIcon />
              <FacebookIcon />
              <TwitterIcon />
            </div>
						<Input placeholder="Email" type="email"/>
            <PasswordLabel />
            <Button text="Sign In" color="blue" />
          </form>
        </div>
        <div className={`${styles.login__toggleContainer}`}>
          <div className={`${styles.login__toggle}`}>
            <div
              className={`${styles.login__togglePanel} ${styles.toggle_left}`}
            >
              <h1>Welcome Back</h1>
              <Button text="Sign Up" onClick={() => toggleActive(false)} />
            </div>
            <div
              className={`${styles.login__togglePanel} ${styles.toggle_right}`}
            >
              <h1>Hello, Friend!</h1>
              <Button text="Sign In" onClick={() => toggleActive(true)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
