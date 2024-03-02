import styles from "./Layout.module.scss"
import App from "../pages/app/App"
import Footer from "./footer/Footer"
import Header from "./header/Header"

function Layout() {
  return (
    <div className={styles.layout}>
			<Header/>
      <App />
      <Footer />
    </div>
  )
}

export default Layout
