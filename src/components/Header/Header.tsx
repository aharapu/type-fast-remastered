import React, { useState } from "react"
import { Navbar, Nav, Button, Modal, Table } from "react-bootstrap"
import { Link } from "gatsby"

const InfoBar: React.FC = () => {
  const [areInstructionsShown, setAreInstructionsShown] = useState(false)
  const [areHighScresShown, setAreHighScresShown] = useState(false)

  const handleInsClose = () => setAreInstructionsShown(false)
  const handleInsShow = () => setAreInstructionsShown(true)
  const handleHighClose = () => setAreHighScresShown(false)
  const handleHighShow = () => setAreHighScresShown(true)
  return (
    <Navbar bg="light" expand="sm">
      <Link to="/">
        <Navbar.Brand>TypeFast</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Nav.Link active onClick={handleHighShow}>
            High Scores
          </Nav.Link>
          <Nav.Link active onClick={handleInsShow}>
            Instructions
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Modal show={areInstructionsShown} onHide={handleInsClose}>
        <Modal.Header closeButton>
          <Modal.Title>Instructions</Modal.Title>
        </Modal.Header>
        <Modal.Body>Put some instructions here!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleInsClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={areHighScresShown} onHide={handleHighClose}>
        <Modal.Header closeButton>
          <Modal.Title>High Scores</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Player Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>400</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>399</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHighClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  )
}

export default InfoBar
