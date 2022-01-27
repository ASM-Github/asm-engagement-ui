import React from 'react'
import { Card } from 'react-bootstrap'
import Body from './Content'
import { useNavigate } from 'react-router-dom';

function RequestsList({ pendingProgramsList }) {
    let navigate =useNavigate()

    return (
        <Card className="border-0 p-4">
            <div className="mb-3">
                <h4 className="fw-bold mb-0">
                    Pending Requests
                </h4>
                <small className="text-primary fw-bold">
                    Total requests : {pendingProgramsList.length}
                </small>
            </div>
            {
                pendingProgramsList.map(program => (
                    
                    <Body
                        key={program.id}
                        activity={program.program_id.activity_type}
                        program={program.program_id.topic}
                        fellow={program.fellow_desc.name}
                        date={program.created_date}
                    />
                ))
            }
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-outline-primary rounded-pill mt-4 px-5"
                onClick={()=> navigate('/admin/program/manage-requests')}>
                    View More
                </button>
            </div>
        </Card>
    )
}

export default RequestsList
