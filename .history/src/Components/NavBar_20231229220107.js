import React, { useState } from 'react';
import { Navbar, Nav, Button, Container, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import logo from '../logo/logo.png';

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: lightgrey;
    text-decoration: none;
    &:hover {
      color: darkgrey;
    }
  }

  .navbar {
    background: linear-gradient(to right, black, darkRed );
    opacity: 97%;
  }

  .navbar-toggler-icon {
    background-color: transparent; // добавлено для изменения цвета бургер-меню
    border-radius: 15% 15% 15% 15%;
  }

  .navbar-toggler[aria-expanded="false"] .navbar-toggler-icon::before {
    background-color: black; // цвет линий бургера
  
    
`;

export default function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Styles>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          className="navbar navbar-expand-lg navbar-dark fixed-top">
          <Container>
            <Navbar.Brand className="px-2 me-4">
              <Link to="/">
                <img src={logo} width={150} alt="Logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav " />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto h5 px-4">
                <Nav.Link>
                  <Link to="/technologia">Technologia</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/prodotti">Prodotti</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/contatti">Contatti</Link>
                </Nav.Link>
              </Nav>
              <Nav>
                <Button variant="outline-dark" onClick={handleShow}>
                  Ordinare
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          style={{ background: 'linear-gradient(to left, black, darkRed )' }}>
          <Modal.Title style={{ background: 'linear-gradient(to left, black, darkRed )' }}>
            Ordinare
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: 'linear-gradient(to left, black, darkRed )' }}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control type="email" placeholder="Enter E-mail" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group controlId="formPlace">
              <Form.Label>Type Your Message:</Form.Label>
              <Form.Control type="email" placeholder="Enter Text" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="dichiaro di aver preso visione dell'informativa sulla privacy e di prestare il consenso al trattamento dei miei dati personali."
              />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
