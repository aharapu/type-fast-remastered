// use layout component to repeat the layout across different pages.
// this can include header, footer, nav etc.

import React from "react"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      {children}
    </div>
  )
}