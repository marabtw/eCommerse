import React from "react"

function SectionHeading({ text,uppercase }) {
  return <h2 className={`${uppercase && "uppercase"}`}>{text}</h2>
}

export default SectionHeading
