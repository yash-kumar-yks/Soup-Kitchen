import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Modal } from 'react-bootstrap';
function  Cards({photos}) {
  const [ show, setShow ] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Card style={{ width: '25rem' }} className="border border-info rounded-top rounded-end mt-3">
      <Card.Img variant="top" className="w-100" src="https://images.unsplash.com/photo-1617540021016-72023b487e99?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVwdGlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
      <Card.Body>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Color:  <br/>
            Likes: 
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  );
}
export default Cards;