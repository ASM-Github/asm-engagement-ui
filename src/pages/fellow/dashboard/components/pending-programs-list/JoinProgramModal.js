import React from 'react'
import { Modal } from 'react-bootstrap';
import Form from './JoinProgramForm'
import { useFellowListByFID } from './../../../../../hooks/useFellow';
import { useActivityOptions } from './../../../../../hooks/useActivities';
import Spinner from './../../../../../components/spinner/Spinner';
import { isAuth } from './../../../../../auth/Login/helpers';

function JoinprogramModal({ show, handleModal }) {

    const { fellow_desc } = isAuth();
    const { proLoading, proError, data: programs } = useFellowListByFID(fellow_desc);
    const { actLoading, actError, data: activities } = useActivityOptions();
    const handleClose = () => handleModal(false);

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            {proLoading && actLoading && <Spinner />}
            {proError && actError && <div>Unable to fetch the data</div>}
            {programs &&
                <Form handleClose={handleClose}
                    programs={programs}
                    activities={activities}
                />}
        </Modal>
    )
}

export default JoinprogramModal
