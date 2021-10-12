import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import ProgramDataService from '../../services/Program'
import DialogContent from './Dialog';

import Modal from 'react-bootstrap/Modal'

import './program.css'
import '../../assets/css/reusable-components.css'


function DeleteConfirmation(props) {

    let history = useHistory();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const id = props.id;
    const deleteProgram = (id) => {


        ProgramDataService.remove(id)
            .then((res) => {
                console.log("Success delete a program");
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
            // onClick={() => deleteProgram(id)}
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
                            <div class="p-2 bd-highlight">
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