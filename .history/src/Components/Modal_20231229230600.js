import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const Modal = () => {
  repeat(
    <Modal show={show} onHide={handleClose}>
      <Modal.Header
        className="modal-header"
        style={{ background: 'linear-gradient(to left, black, darkRed)', borderBottom: '0' }}>
        <Modal.Title className="modal-title" style={{ color: 'white' }}>
          Ordinare
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
    </Modal>,
  );
};

export default Modal;
