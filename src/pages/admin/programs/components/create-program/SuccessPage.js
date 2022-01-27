import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { AiFillCheckCircle } from 'react-icons/ai'

function AddProgramSuccess() {
    let navigate = useNavigate()
    return (
        <div className=" d-flex justify-content-center">
            <Card className="col-6 p-5 border-0">
                <div className="d-flex justify-content-center">
                    <AiFillCheckCircle
                        style={{ fontSize: 10 + 'rem' }}
                        className="text-success bx-tada" />
                </div>
                <h2 className="text-center mt-5 fw-bolder">
                    Success!
                </h2>
                <h5 className="text-center text-black-50">
                    Program created successfully
                </h5>
                <div className="d-flex justify-content-center mt-3">
                    <button
                        type="button"
                        className="btn btn-outline-primary rounded-pill"
                        onClick={() => navigate('/admin/program/manage-programs')}>
                        Continue
                    </button>
                </div>
            </Card>
        </div>
    )
}

export default AddProgramSuccess
