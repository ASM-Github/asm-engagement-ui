import React, { useState } from 'react';
// import components
import AddForm from './AddUserForm';
// import Bootstrap components
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import styles
import '../../components/button/button.css'

function ButtonIcon(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const closeModal = () => {
        window.location.reload();
    }

    return (
        <>
            <button className="abtn abtn-primary" onClick={handleShow}>
                <i className='bx-fw bx bx-user-plus'></i>
                {props.name}
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>

                <Modal.Body>
                    <div>
                        <div className="d-flex justify-content-between">
                            <div className="p-2 bd-highlight"></div>
                            <div className="p-2 bd-highlight">
                                <i
                                    className='bx bx-x-circle bx-sm bx-tada-hover'
                                    onClick={() => closeModal()}
                                >
                                </i>
                            </div>
                        </div>

                    </div>
                    <AddForm />
                </Modal.Body>

            </Modal>
        </>
    );
}


export default ButtonIcon;