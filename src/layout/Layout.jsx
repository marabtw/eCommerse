import styles from "./Layout.module.scss"
import App from "../pages/app/App"
import Footer from "./Footer/Footer"

function Layout() {
  return (
    <div className="Layout">
      <App />
      <Footer />
    </div>
  )
}

export default Layout
