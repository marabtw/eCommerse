import styles from "./Layout.module.scss"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import App from "../pages/app/App"
import ShopPage from "../pages/shop/ShopPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function Layout() {
  return (
    <div className={styles.layout}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/why-us" element={<ShopPage />} />
          <Route path="/contact-us" element={<ShopPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default Layout
