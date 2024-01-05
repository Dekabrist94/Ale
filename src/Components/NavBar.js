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
    background: linear-gradient(to right, black, red );
    opacity: 100   %;
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
          className="navbar navbar-expand-lg navbar-dark fixed-top" >
            
          <Container>
            <Navbar.Brand className=" me-4">
              <Link to="/">
                <img src={logo} width={215} alt="Logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav " />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto h4 px-4">
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
              <Nav className="me-10">
                <Button
                  variant="outline-dark"
                  onClick={handleShow}
                  style={{ color: 'white', fontSize: '1rem' }}>
                  Preventivo gratuito
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          className="modal-header"
          style={{ background: 'linear-gradient(to left, black, darkRed)', borderBottom: '0' }}>
          <Modal.Title className="modal-title" style={{ color: 'white' }}>
            Richiedi il tuo preventivo gratuito
          </Modal.Title>
          <Button
            variant="light"
            className="closeButton"
            onClick={handleClose}
            style={{ color: 'white', border: 'none', outline: 'none', background: 'none' }}>
            <span style={{ fontSize: '1.5rem' }}>&times;</span>
          </Button>
        </Modal.Header>
        <Modal.Body
          className="modal-body"
          style={{
            background: 'linear-gradient(to left, black, darkRed )',
            color: 'white',
            marginTop: '-1px',
            borderRadius: '0 0 7px 7px',
          }}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control type="email" placeholder="Enter E-mail" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group controlId="formPlace">
              <Form.Label style={{ marginTop: '15px' }}>Type Your Message:</Form.Label>
              <Form.Control type="text" placeholder="Enter Text" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Dichiaro di aver preso visione dell'informativa sulla privacy e di prestare il consenso al trattamento dei miei dati personali."
                style={{ marginTop: '15px' }}
              />
            </Form.Group>
            <Button
              variant="dark"
              style={{
                float: 'right',
                marginRight: '45px',
                width: '20%',
                marginTop: '12px',
                background: 'linear-gradient(to right, grey, black )',
                borderImage: 'none',
                borderRadius: '8px 0px',
                color: 'white',
                fontSize: '15px',
              }}>
              Invia
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}