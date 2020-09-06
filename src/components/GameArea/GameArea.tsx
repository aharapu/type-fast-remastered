import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import * as styles from './GameArea.module.scss'

const GameArea: React.FC = () => {
  return (
    <Container className={styles.gamearea}>
      <Row>
        <Col xs={12} sm={10} md={8}>
          <h2 className="text-center m-auto">Choose Level</h2>
        </Col>
      </Row>
    </Container>
  )
}

export default GameArea
