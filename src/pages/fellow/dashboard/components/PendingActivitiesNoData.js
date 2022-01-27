import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FcDeleteDatabase } from 'react-icons/fc'

function PendingActivitiesNoData() {

    let navigate = useNavigate();

    return (
        <>
            <div className="d-flex justify-content-center">
                <FcDeleteDatabase style={{ fontSize: 10 + 'rem' }} />
            </div>
            <h6 className="text-center my-4">No Requests Found</h6>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-primary"
                    onClick={() => navigate('/fellow/manage-programs')}>
                    Request Activity
                </button>
            </div>
        </>
    )
}

export default PendingActivitiesNoData
