import React from 'react'
import { Modal } from 'react-bootstrap'
import Form from './Form';

function AddActivityModal({ modal, handleModal }) {

    const handleClose = () => handleModal(false);

    return (
        <Modal show={modal} backdrop="static" keyboard={false}>
            <Form handleClose={handleClose} />
        </Modal>
    )
}

export default AddActivityModal