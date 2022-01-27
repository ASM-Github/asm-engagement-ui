import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import UserModalContent from './UserContent'
import { useViewUser } from '../../../../../hooks/useUser'

function UserModal({ modal, setModal, user_id }) {

    const handleClose = () => setModal(false);
    const { data: userDetails, isLoading, isError } = useViewUser(user_id);
    return (
        <>

            <Modal show={modal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>View User Authentication</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {isLoading && <p>Loading...</p>}
                    {isError && <p>Error to fetch the data from API</p>}
                    {userDetails && <UserModalContent userDetails={userDetails} />}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" className="px-5" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UserModal;
