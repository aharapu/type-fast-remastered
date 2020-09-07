// use layout component to repeat the layout across different pages.
// this can include header, footer, nav etc.

import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import * as styles from "./Layout.module.scss"
import Header from "../Header/Header"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container fluid>{children}</Container>
      <div className={`${styles.footer} bg-light`}>
        Made with love by Valentin.
      </div>
    </>
  )
}

export default Layout
