import styles from "./Login.module.scss"
import LoginForm from "../../modules/LoginForm/LoginForm"

const Login = () => {
    return (
    <div className={styles.loginPage}>
      <LoginForm/>
    </div>
  )
}

export default Login
