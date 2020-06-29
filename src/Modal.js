import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Example(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    props.handleModal();
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.selectedobj.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo,t in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
