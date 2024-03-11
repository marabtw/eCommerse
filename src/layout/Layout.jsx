import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom"

import styles from "./Layout.module.scss"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import App from "../pages/app/App"
import ShopPage from "../pages/shop/ShopPage"
import WhyUs from "../pages/why-us/WhyUs"
import Login from "../pages/login/Login"
import { useState } from "react"

function Layout() {
  const currentPath = useLocation().pathname

  return (
    <div className={styles.layout}>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/contact-us" element={<WhyUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {currentPath !== "/login" && <Footer />}
    </div>
  )
}

export default Layout
