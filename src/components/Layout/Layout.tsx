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
      <Container fluid>
        {children}
        <Row>
          <Col
            xs={12}
            sm={{ span: 8, offset: 2 }}
            md={{ span: 6, offset: 3 }}
          ></Col>
        </Row>
      </Container>
    </>
  )
}

export default Layout
