import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import reportWebVitals from "./reportWebVitals"
import "./app/scss/global.scss"
import Layout from "./app/layouts/Layout"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
