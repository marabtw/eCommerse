import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import styles from "./Layout.module.scss"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import App from "../pages/app/App"
import ShopPage from "../pages/shop/ShopPage"
import WhyUs from "../pages/why-us/WhyUs"

function Layout() {
  return (
    <div className={styles.layout}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/contact-us" element={<WhyUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default Layout
