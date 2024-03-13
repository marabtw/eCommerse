import {
  Route,
  Routes,
} from "react-router-dom"

import { ROUTERS } from "./Router.config"

import App from "../../pages/Home/Home"
import ShopPage from "../../pages/Shop/ShopPage"
import WhyUs from "../../pages/Why-us/WhyUs"
import Login from "../../pages/Login/Login"

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTERS.Home} element={<App />} />
      <Route path={ROUTERS.Shop} element={<ShopPage />} />
      <Route path={ROUTERS.WhyUs} element={<WhyUs />} />
      <Route path={ROUTERS.ContactUs} element={<WhyUs />} />
      <Route path={ROUTERS.Login} element={<Login />} />
    </Routes>
  )
}

export default Router
