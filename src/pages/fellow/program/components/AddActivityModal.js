import React from 'react'
import { Modal } from 'react-bootstrap'
import { MdCancel } from 'react-icons/md'
import AddActivityForm from './AddActivityForm';
import { useActivityOptions } from './../../../../hooks/useActivities';
function AddActivityModal(props) {
    const { isLoading, isError, data } = useActivityOptions()
    const { show, setModal, fellowId, programId, topic } = props
    const handleClose = () => setModal(false);
    return (
        <Modal
            show={show}
            backdrop="static"
            keyboard={false}>
            <Modal.Body>
                <div className="m-4">
                    <div className="d-flex justify-content-between">
                        <h3 className="fw-bolder">
                            Activity Involvement
                        </h3>
                        <div>
                            <MdCancel style={{ fontSize: 1.5 + 'rem' }}
                                className="bx-tada-hover text-danger text-opacity-50"
                                onClick={handleClose} />
                        </div>
                    </div>
                    {isLoading && <div>Loading...</div>}
                    {isError && <div>Unable to load</div>}
                    {data && <AddActivityForm
                        activities={data}
                        handleModal={handleClose}
                        setModal={setModal}
                        fellowId={fellowId}
                        programId={programId}
                        topic={topic}
                    />}
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default AddActivityModal
