import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import UserDataService from '../../services/User'
import DialogContent from './Dialog';

import Modal from 'react-bootstrap/Modal'
// import styles
import './user.css'
import '../../assets/css/reusable-components.css'


function DeleteConfirmation(props) {

    let history = useHistory();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const id = props.id;
    const deleteProgram = (id) => {


        UserDataService.remove(id)
            .then((res) => {
                handleClose();
                window.location.reload();
            })
            .catch((e) => {
                console.warn(e);
            })
    }

    return (

        <>
            <i
                className='bx bx-trash-alt bx-tada-hover bx-border-circle'
                onClick={handleShow}
            >
            </i>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    <div className="wrap-content">
                        <DialogContent />
                        <div className="d-flex justify-content-center abtn-margin">
                            <div className="p-2 bd-highlight">
                                <button className="abtn-muted" onClick={handleClose}>
                                    Cancel
                                </button>
                            </div>
                            <div className="p-2 bd-highlight">
                                <button className="abtn abtn-danger" onClick={() => deleteProgram(id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default DeleteConfirmation;