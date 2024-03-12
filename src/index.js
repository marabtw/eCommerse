import React from "react"
import ReactDOM from "react-dom/client"
import "./assets/styles/globals.scss"
import Layout from "./layout/Layout"
import reportWebVitals from "./utils/reportWebVitals"
import { BrowserRouter as Router } from "react-router-dom"
import { createStore } from "redux"

const defaultState = {
	user: null,
}

const reducer = (state, action) => {
	switch(action.type) {
		case "auth":
			return {...state, user: action.payload}
		default:
			return state
	}
}

const store = createStore()

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <Layout />
    </Router>
  </React.StrictMode>
)

reportWebVitals()
