import { useLocation } from "react-router-dom"

import styles from "./Layout.module.scss"
import Header from "../../modules/Header/Header"
import Footer from "../../modules/Footer/Footer"
import Router from "../router/Router"

function Layout() {
  const currentPath = useLocation().pathname

  return (
    <div className={styles.layout}>
      <Header />
      <Router />
      {currentPath !== "/login" && <Footer />}
    </div>
  )
}

export default Layout
