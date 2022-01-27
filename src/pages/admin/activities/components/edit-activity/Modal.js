import React from 'react'
import { Modal } from 'react-bootstrap'
import { BsPencilSquare } from 'react-icons/bs'
import { useActivityById } from '../../../../../hooks/useActivity'
import EditActivityForm from './Form'

function EditActivityModal({ show, setShow, id }) {

    const { isLoading, isError, data: activity } = useActivityById(id);
    const handleClose = () => setShow(false);

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title className='text-primary'><BsPencilSquare className='me-3' />
                    Edit Activity
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {isLoading && <p>Loading..</p>}
                {isError && <p>Oops, someting went wrong. Please try again later.</p>}
                {activity && <EditActivityForm activityId={id} handleClose={handleClose} activity={activity} setShow={setShow} />}
            </Modal.Body>
        </Modal>
    )
}

export default EditActivityModal
