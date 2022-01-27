import React from "react";
import { Modal } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";
import { useProgram } from "../../../../../hooks/useProgram";
import EditProgramForm from './Form';

function EditProgramModal({ show, setShow, id }) {
  const { isLoading, isError, data: program } = useProgram(id);
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title className="text-primary">
          <BsPencilSquare className="me-3" />
          Update Program
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isLoading && <p>Loading..</p>}
        {isError && <p>Oops, someting went wrong. Please try again later.</p>}
        {program && (
          <EditProgramForm
            programId={id}
            handleClose={handleClose}
            program={program}
            setShow={setShow}
          />
        )}
      </Modal.Body>
    </Modal>
  );
}

export default EditProgramModal;
