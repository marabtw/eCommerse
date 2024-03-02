import React from "react"

function Heading({ text = "", uppercase = false }) {
  return <h1 className={`${uppercase && "uppercase"}`}>{text}</h1>
}

export default Heading
