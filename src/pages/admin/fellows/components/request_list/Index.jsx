import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap'

function RequestsCard({ fellows }) {
    let navigate = useNavigate()
    return (
        <Card className="border-0 p-4">
            <div className="mb-3">
                <h4 className="fw-bold mb-0">Pending Requests</h4>
                <small className="fw-bold text-primary">
                    Total Fellows :  0
                </small>
            </div>
            <small className="text-center py-5 text-black-50">
                {!fellows && 'No request available'}
            </small>
            <div className="d-flex justify-content-center mt-3  ">
                <button
                    className="btn btn-outline-primary rounded-pill px-5"
                    type="button" onClick={() => navigate('/admin/fellow/manage-fellows')}>
                    View More
                </button>
            </div>
        </Card>
    )

}

export default RequestsCard
