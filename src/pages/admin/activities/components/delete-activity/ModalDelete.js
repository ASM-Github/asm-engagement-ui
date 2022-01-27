import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useQueryClient } from "react-query";
import { FaCircleNotch } from "react-icons/fa";
import { deleteActivity } from "../../../../../utils/AxiosService";

function ModalDelete({ show, setShow, id }) {
  const [loading, setLoading] = useState(false);

  const queryClient = useQueryClient();
  const handleClose = () => setShow(false);

  const handleDelete = (id) => {
    setLoading(true); // waiting for the process
    deleteActivity(id)
      .then((response) => {
        queryClient.refetchQueries("activity-request-fid");
        setLoading(false);
        setShow(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Do you want really want to delete this Activity. This process cannot be
        undone.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => handleDelete(id)}>
          {loading ? (
            <>
              <FaCircleNotch className="bx-spin" /> Deleting
            </>
          ) : (
            "Delete"
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDelete;
