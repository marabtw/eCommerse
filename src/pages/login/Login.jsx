import React, { useState } from "react"
import styles from "./Login.module.scss"
import {
  GooglePlusIcon,
  FacebookIcon,
  TwitterIcon,
  ShowIcon,
  HIdeIcon,
} from "../../ui/icons/icons"
import Button from "../../ui/Button/Button"

const Login = () => {
  const [passwordShow, setPasswordShow] = useState(false)
	const [activeStatus, setActiveStatus] = useState(false)

	const toggleActive = (value) =>{
		setActiveStatus(value)
	}

  return (
    <div className={styles.login}>
      <div className={`${styles.login__container} ${activeStatus ? styles.active : ''}`}>
        <div className={`${styles.login__form} ${styles.sign_up}`}>
          <form>
            <h1>Create Account</h1>
            <input placeholder="Name" type="text" name="" />
            <input placeholder="Email" type="email" />
            <label htmlFor="sign_up__input">
              <input
                placeholder="Password"
                type="password"
                id="sign_up__input"
              />
              {passwordShow ? <ShowIcon /> : <HIdeIcon />}
            </label>
						<Button text="Sign Up" color="blue"/>
            <div className={`${styles.login__socialIcons}`}>
              <GooglePlusIcon />
              <FacebookIcon />
              <TwitterIcon />
            </div>
          </form>
        </div>
        <div className={`${styles.login__form} ${styles.sign_in}`}>
          <form>
            <h1>Sign In</h1>
            <input placeholder="Email" type="email" />
            <label htmlFor="sign_in__input">
              <input
                placeholder="Password"
                type="password"
                id="sign_in__input"
              />
              {passwordShow ? <ShowIcon /> : <HIdeIcon />}
            </label>
						<Button text="Sign In" color="blue"/>
            <div className={`${styles.login__socialIcons}`}>
              <GooglePlusIcon />
              <FacebookIcon />
              <TwitterIcon />
            </div>
          </form>
        </div>
				<div className={`${styles.login__toggleContainer}`}>
					<div className={`${styles.login__toggle}`}>
						<div className={`${styles.login__togglePanel} ${styles.toggle_left}`}>
							<h1>Welcome Back</h1>
							<Button text="Sign Up" onClick={() => toggleActive(false)}/>
						</div>
						<div className={`${styles.login__togglePanel} ${styles.toggle_right}`}>
							<h1>Hello, Friend!</h1>
							<Button text="Sign In" onClick={() => toggleActive(true)}/>
						</div>
					</div>
				</div>
      </div>
    </div>
  )
}

export default Login
