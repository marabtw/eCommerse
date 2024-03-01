import React from "react"
import ReactDOM from "react-dom/client"
import "./assets/styles/globals.scss"
import Layout from "./layout/Layout"
import reportWebVitals from "./utils/reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
)

reportWebVitals()
