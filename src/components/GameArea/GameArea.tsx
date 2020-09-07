import React, { useState } from "react"
import {
  Container,
  Row,
  Col,
  ToggleButtonGroup,
  ToggleButton,
  Button,
  InputGroup,
  FormControl
} from "react-bootstrap"
import * as styles from "./GameArea.module.scss"

const GameArea: React.FC = () => {
  const [value, setValue] = useState([1, 3])
  const handleChange = val => setValue(val)
  return (
    <>
      <br />
      <Container>
        <Row>
          <Col
            xs={12}
            sm={{ offset: 1, span: 10 }}
            md={{ offset: 2, span: 8 }}
            className={styles.gamearea}
          >
            <Container>
              <br />
              <Row>
                <Col xs={12} className="text-center">
                  <h3>Choose Level:</h3>
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="text-center">
                  <ToggleButtonGroup
                    className="btn-group-sm"
                    name="difficulty"
                    type="radio"
                    value={value}
                    onChange={handleChange}
                  >
                    <ToggleButton value={1}>Noobie</ToggleButton>
                    <ToggleButton value={2}>Normal</ToggleButton>
                    <ToggleButton value={3}>Hardcore</ToggleButton>
                  </ToggleButtonGroup>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={12} className="text-center">
                  <Button size="lg" disabled={true}>START</Button>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={12} className="text-center">
                  <p style={{ whiteSpace: "pre" }}>
                    Type this: <span id="first">This is some </span>
                    <span id="second">palceholder text.</span>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="text-center">
                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-sm">
                        Your text:
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </InputGroup>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={12} className="text-center">
                  <p style={{ whiteSpace: "pre" }}>
                    Time left: <span id="time">20</span>s
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default GameArea
